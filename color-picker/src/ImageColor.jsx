import React, { useState, useRef } from "react"
import namer from "color-namer"

function GetColor() {

    const [clickPosition, setClickPosition] = useState({x: 0, y: 0})
    const [color, setColor] = useState("")
    const [colorName, setColorName] = useState("")
    const imageRef = useRef(null)

    const handleClick = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        console.log("Rect bounding element : ", rect)
        console.log("e.clientX = ", e.clientX)
        console.log("e.clientY = ", e.clientY)
        console.log("x = ", x)
        console.log("y = " , y)
        setClickPosition({x, y});

        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")
        canvas.width = e.target.width
        canvas.height = e.target.height
        ctx.drawImage(imageRef.current, 0, 0, canvas.width, canvas.height);

        const pixelData = ctx.getImageData(x, y, 1, 1).data;
        const rgbColor = `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`
        setColor(rgbColor);

        const colorNameResult = namer(rgbColor);
        console.log(colorNameResult)
        setColorName(colorNameResult.basic[0].name);
    };

    return (<div>
        <h1>Let's Find Color From Your Image</h1>
        <img 
            src="https://imgs.search.brave.com/Qy_VsWmCS-fy36K14kgj-IVbQXxZlu0_vNKslVN28Go/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTE1/MTIyMzMvcGhvdG8v/Y29sb3ItZ3VpZGUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVNnSnZWZEEzOXRx/bGFKeU1qLS1DSlZP/SVVWVzlMX01qODR0/WEg2dGNDSEE9"
            alt="Color Image"
            crossOrigin="anonymous"
            onClick={handleClick}
            ref={imageRef}
         />
         <p>Click Position : X = {clickPosition.x}, Y = {clickPosition.y}</p>
         <p>Color: <span style={{color}}>{ color || "Click to pick a color"}</span></p>
         <p>Color Name: {" "}<span style={{color}}>{ colorName }</span></p>
         <div>
            <button onClick={()=>{setColor(""); setClickPosition({x: 0, y: 0})}}>Reset</button>
         </div>
    </div>)
}

export default GetColor