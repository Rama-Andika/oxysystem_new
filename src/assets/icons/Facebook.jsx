import React from "react";

const Facebook = ({ widht = "9", height = "17", color = "#4267B2" }) => {
  return (
    <svg
      width={widht}
      height={height}
      viewBox="0 0 9 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.21688 5.68087H5.6849V4.02027C5.6849 3.39663 6.09823 3.25123 6.38935 3.25123C6.67981 3.25123 8.17614 3.25123 8.17614 3.25123V0.509605L5.71537 0.5C2.98368 0.5 2.36202 2.54479 2.36202 3.85334V5.68087H0.782227V8.50596H2.36202C2.36202 12.1315 2.36202 16.5 2.36202 16.5H5.6849C5.6849 16.5 5.6849 12.0885 5.6849 8.50596H7.92709L8.21688 5.68087Z"
        fill={color}
      />
    </svg>
  );
};

export default Facebook;
