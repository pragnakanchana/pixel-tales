import React, { useContext, useEffect, useRef, useState } from "react";
import Photo from "./Photo";
import * as stylex from "@stylexjs/stylex";
import { Colors, getColor } from "../design/tokens/colors";
import ThemeContext from "../utils/themeContext";
import axios from "axios";
import Loader from "../design/components/Loader";
import TagFilters from "./TagFilters";

const styles = stylex.create({
  container: (theme) => ({
    backgroundColor: getColor(theme, Colors.background),
    margin: "0px 150px",
  }),
  tagFilters:{
    padding: "20px 0px",
  },
  grid: (theme) => ({
    columnCount: 4,
    columnGap: "10px",
    rowGap: "20px",
  }),
  loader: (theme) => ({
    display: "flex",
    backgroundColor: getColor(theme, Colors.background),
    margin: "0px 150px",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  }),
  gridItem: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
});

function PhotoGrid() {
  const [data, setData] = useState([]);
  const { theme } = useContext(ThemeContext);
  let entireData = useRef([]);
  const [tagsSet,setTagsSet] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .get("http://localhost:3001/getImages")
      .then((res) => {
        console.log("check res ", res.data?.data);
        console.log("check res length");
        entireData.current = res.data?.data;
        setData(res.data?.data);
        const tagsSet = new Set()
        res.data?.data.forEach(element => {
          console.log("check tgs ",element)
          element.tags.split(',').forEach((item)=>{
            tagsSet.add({label: item, isApplied:false})
          })
        })
        console.log("check tagsSet", tagsSet)
        setTagsSet([...tagsSet]);
      })
      .catch((err) => {
        console.log("check res error ", err);
        alert("api call failed");
      });
  };

  const onFilterClick =  (tagLabel) => {
    console.log("check tags ",entireData.current )
    const filteredData = entireData.current.filter((item)=>{
      return item.tags.includes(tagLabel);
    })
    setData(filteredData)
  };

  return !data || !data.length ? (
    <div {...stylex.props(styles.loader)}>
      <Loader />
    </div>
  ) : (
    <div {...stylex.props(styles.container(theme))}>
      <div {...stylex.props(styles.tagFilters)}>
      <TagFilters data= {tagsSet}  onFilterClick={onFilterClick}/>
      </div>
      <div {...stylex.props(styles.grid(theme))}>
        {data.map((item) => {
          return (
            <div {...stylex.props(styles.gridItem)}>
              <Photo imageUrl={item.imageUrl} description={item.tags} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PhotoGrid;
