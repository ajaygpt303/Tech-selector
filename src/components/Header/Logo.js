import React from "react";
import "./HeaderStyles.css";

function Logo({ children, ...restProps }) {
  return (
    <div>
      <a href="/" {...restProps}>
        {children}
        <img className="logo" href="/" src="https://i.postimg.cc/NjPYcJTS/Capture.png" alt="Techselector logo" />
      </a>
    </div>
  );
}

export default Logo;
