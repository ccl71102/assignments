import React from "react";

const Box = props => {
    return <div onClick={props.method}
                style={props.divStyle}>
                  Click Me
    </div>;
}

export default Box;