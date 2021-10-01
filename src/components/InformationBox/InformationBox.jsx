import React from "react";

import "./InformationBox.scss";

function InformationBox({ className = "", text }) {
   return <p className={`information-box ${className}`}>{text}</p>;
}

export default InformationBox;
