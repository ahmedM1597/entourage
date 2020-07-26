import React from "react";

function Icon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 107 107"
    >
      <path
        fill="#58595B"
        fillRule="nonzero"
        d="M0-16.884a4.392 4.392 0 014.386-4.387h16.885a4.39 4.39 0 014.386 4.387V.001a4.385 4.385 0 01-4.386 4.386H4.386A4.388 4.388 0 010 .001v-16.885z"
        transform="translate(0 88.63) scale(4.16667)"
      ></path>
      <path
        fill="#fff"
        fillRule="nonzero"
        d="M0 .008h-2.473v8.806H-6.13V.008h-1.739v-3.11h1.739v-2.015c0-1.435.689-3.689 3.694-3.689l2.707.011v3.018h-1.966c-.323 0-.778.159-.778.848v1.83h2.79L0 .008z"
        transform="translate(69.085 52.027) scale(4.16667)"
      ></path>
    </svg>
  );
}

export default Icon;
