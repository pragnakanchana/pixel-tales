import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as stylex from "@stylexjs/stylex";
import { motion } from "framer-motion";
import Tags from "./Tags";

const styles = stylex.create({
  container: {
    position: "relative",
    flex: 1,
    overflow: "hidden",
    borderRadius: "24px",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 5,
    height: "100%",
    opacity: 0.5,
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: "8px",
    backgroundColor: "white",
    color: "black",
    opacity: 1,
    fontSize: 16,
    borderRadius: 8,
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "24px",
  },
  tagsContainer: {
    marginLeft: 12,
    marginRight: 12,
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
});

function Photo({ imageUrl = "", description = "" }) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  const handleDownload = async (e) => {
    e.stopPropagation();
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "downloaded_image.jpg"; // You can change the filename as needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      {...stylex.props(styles.container)}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div
        {...stylex.props(styles.container)}
        onClick={(e) => {
          console.log("check event ", imageUrl);
          navigate("/viewPhoto/123", { state: imageUrl });
        }}
        onMouseEnter={() => {
          console.log("check mouse enter");
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
      >
        <img src={imageUrl} alt={description} {...stylex.props(styles.img)} />

        {hovered && (
          <div {...stylex.props(styles.image)}>
            <button {...stylex.props(styles.button)} onClick={handleDownload}>
              Download
            </button>
          </div>
        )}
      </div>
      <div {...stylex.props(styles.tagsContainer)}>
        {description.split(",").map((item) => {
          return <Tags tagText={item} />;
        })}
      </div>
    </motion.div>
  );
}

export default Photo;
