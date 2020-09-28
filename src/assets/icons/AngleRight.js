import React from 'react';
const AngleRight = () => (
  <>
    <svg width="2vw" viewBox="0 0 54 77" fill="none">
      <g filter="url(#filter0_ddi)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.949 16.1098C20.2801 14.5537 17.6658 14.6451 16.1097 16.314C14.5536 17.9829 14.6451 20.5972 16.3139 22.1533L37.4187 41.8316L16.3141 61.5098C14.6453 63.0659 14.5538 65.6802 16.1099 67.3491C17.666 69.0179 20.2803 69.1094 21.9492 67.5533L46.0083 45.1203C46.9514 44.241 47.3907 43.0236 47.3136 41.83C47.3897 40.6373 46.9503 39.4214 46.0081 38.5428L21.949 16.1098Z"
          fill="#EEEEEE"
        />
      </g>
      <defs>
        <filter
          id="filter0_ddi"
          x="0.79"
          y="0.79"
          width="52.7423"
          height="75.8731"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feMorphology
            radius="0.21"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow"
          />
          <feOffset dx="-4" dy="-4" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="0.21"
            operator="erode"
            in="SourceAlpha"
            result="effect3_innerShadow"
          />
          <feOffset dx="4" dy="4" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
          />
          <feBlend mode="normal" in2="shape" result="effect3_innerShadow" />
        </filter>
      </defs>
    </svg>
  </>
);

export default AngleRight;
