import React, { useEffect, useState } from "react";
import Photo from "./Photo";
import {useParams, useLocation} from "react-router-dom";

function PhotoView(props) {
    const {photoIndex} = useParams()
    const {state} = useLocation();
    console.log("check params ", state)
    return (
        <div className="large-image-view">
            <img height={880} src = {state}></img>
        </div>
    )
}

export default PhotoView;
