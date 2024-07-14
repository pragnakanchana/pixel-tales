import { useState } from "react";

const useOnlineStatus =()=>{

    const [isOnline, setIsOnline] = useState(true)

    // window.addEventListener("offline", (event) => {
    //     if(event.type === "offline"){
    //         setIsOnline(false);
    //     }
    //     else{
    //         setIsOnline(true);
    //     }
    //     console.log("check addEvent listender ", event)
    // });

    // setInterval(()=>{
    //     setIsOnline(!isOnline);
    //     console.log("check setinterval")
    // },3000)

    return isOnline
}

export default useOnlineStatus;