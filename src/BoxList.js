import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList(){
    const [boxes, setBoxes] = useState([]);
    const add = boxVal => {
        setBoxes(boxes => [...boxes, boxVal]);
    };
    const remove = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));

    };

    const boxComps = boxes.map(box =>(
        <Box
            key = {box.id}
            id = {box.id}
            width = {box.width}
            height = {box.height}
            handleRemove = {remove}
            backgroundColor = {box.backgroundColor}
        />
    ));

    return (<div><NewBoxForm newBox={add}/>{boxComps}</div>);
}

export default BoxList;