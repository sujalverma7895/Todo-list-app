import React from "react";
import { ReactDOM } from 'react-dom';
import { Box } from "./Inputbox";

const Task=()=>{
    return (
        <div>
        <Box/>
    </div>
    )
};
let root = ReactDOM.createRoot(document.getElementById('demo'));
root.render(<Task/>);
