import React, { useState } from "react";
import axios from "axios";
import Loader from "../design/components/Loader";
import Tags from "./Tags";
import * as stylex from "@stylexjs/stylex";
import { ADD, UPLOAD } from "../utils/constants";
import ConfettiAnimation from "../design/components/Confetti";

const styles = stylex.create({
  container: {
    backgroundImage: `url("https://cdn.prod.website-files.com/5a9ee6416e90d20001b20038/64c14f36767c0e634bd3909a__1.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    marginRight: -8,
    marginLeft: -8,
    position: "absolute",
    top: 100,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    marginTop: -100,
  },
  form: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 24,
    borderRadius: 24,
    width: 400,
  },
  textInput: {
    width: 200,
    padding: "8px 10px",
    margin: "8px 0px",
    display: "inline-block",
    border: { default: "1px solid #663399", ":focus": "2px solid #663399" },
    outline: "none",
    borderRadius: "8px",
    boxSizing: "border-box",
  },
  addTag: {
    padding: "8px 10px",
    margin: "8px 8px",
    display: "inline-block",
    border: "none",
    outline: "none",
    borderRadius: "8px",
    boxSizing: "border-box",
    backgroundColor: "#663399",
    color: "#ffffff",
    fontWeight: 500,
    height: "100%",
  },
  fileInput: {
    display: "inline-block",
    padding: "6px 12px",
    cursor: "pointer",
  },
  input: {
    "::file-selector-button": {
      marginRight: "20px",
      border: "none",
      background: "#663399",
      padding: "10px 20px",
      borderRadius: "10px",
      color: "#fff",
      cursor: "pointer",
      transition: "background .2s ease-in-out",
    },
  },
  section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
  },
  tagSection: {
    flexDirection: "row",
  },
  uploadButton: {
    padding: "8px 10px",
    margin: "8px 0px",
    display: "inline-block",
    border: "none",
    outline: "none",
    borderRadius: "8px",
    boxSizing: "border-box",
    backgroundColor: "#663399",
    color: "#ffffff",
    fontWeight: 500,
    fontSize: 16,
  },
  confetti: {
    position: "absolute",
  },
  successWrapper:{
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    height: '100%',
    width:'100%'
  }
});

function ImageUpload() {
  const [file, setFile] = useState("");
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tagText, setTagText] = useState("");
  const [uploadSuccess, setUplaodSuccess] = useState(false);

  const resetToInitialState = () => {
    setFile("");
    setTags([]);
    setLoading(false);
    setTagText("");
  };

  const upload = () => {
    console.log("check upload ", file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify({tagsData:tags.join(',')}));
    if (!file || !tags.length) {
      alert("Please fill details");
      return;
    }
    setLoading(true);
    console.log("check form Data ", formData);
    axios
      .post("http://localhost:3001/upload", formData)
      .then((res) => {
        resetToInitialState();
        setUplaodSuccess(true);
        setTimeout(() => {
          setUplaodSuccess(false);
        }, 1500);
      })
      .catch((er) => {
        resetToInitialState();
        alert("Sorry, Error while uploading!");
      });
  };

  const addTag = () => {
    let input = document.getElementById("tagInput");
    input.value = "";
    setTags(tags.concat(tagText));
    setTagText("");
  };

  return loading ? (
    <Loader />
  ) : uploadSuccess ? (
    <div
      {...stylex.props(styles.successWrapper)}
    >
      <div style={{fontSize: 24}}> Upload Successfull, redirecting...</div>
      <div {...stylex.props(styles.confetti)}>
        <ConfettiAnimation />
      </div>
    </div>
  ) : (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.form)}>
        <div {...stylex.props(styles.section)}>
          <input
            {...stylex.props(styles.input)}
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
          <div {...stylex.props(styles.tagSection)}>
            <input
              {...stylex.props(styles.textInput)}
              id="tagInput"
              type="text"
              onChange={(e) => {
                setTagText(e.target.value);
              }}
            />
            <button
              {...stylex.props(styles.addTag)}
              type="button"
              onClick={addTag}
            >
              {ADD}
            </button>
          </div>
          <div {...stylex.props(styles.tagSection)}>
          {tags.map((tag) => {
            return <Tags tagText={tag} />;
          })}
          </div>
        </div>
        <div {...stylex.props(styles.section)}>
          <button
            {...stylex.props(styles.uploadButton)}
            type="button"
            onClick={upload}
          >
            {UPLOAD}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
