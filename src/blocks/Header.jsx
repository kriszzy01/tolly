import React from "react";
import user from "../assets/user.jpg";

export const Header = () => {
  return (
    <header>
      <h1>
        <span aria-hidden="true">
          <svg
            width="32"
            height="32"
            version="1.1"
            viewBox="0 0 8.4667 8.4667"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="matrix(1.9272 0 0 2.5996 -1.9445 -.48858)">
              <rect
                transform="matrix(.21653 -.97628 .89381 .44845 0 0)"
                x="-1.7148"
                y="1.6015"
                width="2.2226"
                height="2.2912"
                fill="#33404a"
                strokeWidth=".26868"
              />
              <rect
                transform="matrix(.64812 -.76154 .73085 .68254 0 0)"
                x="-.37841"
                y="2.288"
                width="2.1491"
                height="2.3002"
                fill="#5d7587"
                strokeWidth=".26472"
              />
              <rect
                transform="matrix(.86886 -.49506 .33333 .94281 0 0)"
                x="1.8191"
                y="2.681"
                width="2.6387"
                height="1.9014"
                fill="#bfc9d3"
                strokeWidth=".2667"
              />
            </g>
          </svg>
        </span>
        Tolly
      </h1>

      <button type="button" className="user" aria-label="user">
        <span aria-hidden="true">▼</span>
        <span className="user_name">Annette</span>
        <span className="user_avatar">
          <img src={user} alt="user avatar" />
        </span>
      </button>
    </header>
  );
};
