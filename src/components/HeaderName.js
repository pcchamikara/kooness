import React from "react";
import { Link } from "react-router-dom";

export default function HeaderName(props) {
  return (
    <Link
      style={{ textDecoration: "none" }}
      onClick={props.onClick}
      to={props.to}
    >
      <button className={props.class} style={props.style}>
        {props.name}
      </button>
    </Link>
  );
}
