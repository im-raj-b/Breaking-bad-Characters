import React from "react";
import loading from "../../images/spinner.gif";


const Loading = () => {
    return (
      <img
        src={loading}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    );
}

export default Loading;