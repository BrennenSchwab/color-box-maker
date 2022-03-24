import React from "react";

function Box ({
    id,
    handleRemove,
    width = 20,
    height = 20,
    backgroundColor = "purple"
  }) {
    const remove = () => handleRemove(id);
    return (
      <div>
        <div
          style={{
            height: `${height}px`,
            width: `${width}px`,
            backgroundColor
          }}
        />
        <button onClick={remove}>Remove Box</button>
      </div>
    );
  }
  
  export default Box;