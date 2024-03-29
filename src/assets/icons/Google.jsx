import React from "react";

const Google = ({
  widht = "17",
  height = "17",
  color = "#DB4437",
  className,
}) => {
  return (
    <svg
      className={className}
      width={widht}
      height={height}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.1883 7.00111C13.6789 6.99987 11.1694 7.00049 8.66 7.00078C8.66033 8.04162 8.65877 9.08246 8.66062 10.123C10.1139 10.1227 11.5672 10.1224 13.0202 10.123C12.8518 11.1204 12.259 12.0325 11.4185 12.594C10.8901 12.9493 10.283 13.1799 9.65707 13.2895C9.02715 13.397 8.37626 13.4108 7.7479 13.2836C7.10891 13.1561 6.49895 12.8899 5.96684 12.5146C5.116 11.9168 4.46667 11.0422 4.13327 10.0579C3.79236 9.05681 3.78986 7.94284 4.13483 6.94264C4.37419 6.23771 4.77259 5.58652 5.29595 5.05659C5.94151 4.39571 6.78081 3.92327 7.68508 3.72953C8.45937 3.56425 9.27585 3.59579 10.0339 3.82513C10.6782 4.02076 11.2722 4.37383 11.7588 4.83846C12.2506 4.34944 12.7399 3.85762 13.2308 3.36768C13.4883 3.10397 13.7589 2.8518 14.0082 2.5809C13.2627 1.89095 12.3887 1.33634 11.4338 0.985743C9.71457 0.353025 7.7757 0.339596 6.04495 0.938626C4.09451 1.60636 2.43373 3.06495 1.51291 4.90854C1.19233 5.54379 0.958268 6.22184 0.817664 6.91926C0.463944 8.65688 0.710488 10.5095 1.51197 12.0922C2.03286 13.1252 2.77965 14.0435 3.68551 14.7635C4.54012 15.445 5.53625 15.9483 6.5924 16.2293C7.92509 16.5867 9.34367 16.5786 10.6851 16.2733C11.8975 15.9943 13.0446 15.415 13.9604 14.5694C14.9285 13.6798 15.619 12.5077 15.9846 11.2482C16.3833 9.87429 16.4383 8.40754 16.1883 7.00111Z"
        fill={color}
      />
    </svg>
  );
};

export default Google;
