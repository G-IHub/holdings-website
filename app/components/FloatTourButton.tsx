import React from "react";

export default function FloatTourButton(){
  return (
    <a
      href="https://tour.genomacholdings.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="float-tour-btn"
      aria-label="View tour site (opens in a new tab)"
    >
      <span className="float-tour-text">View Tour Site</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 3h7v7" />
        <path d="M10 14L21 3" />
        <path d="M21 21H3V3" />
      </svg>
    </a>
  );
}
