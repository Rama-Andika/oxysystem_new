import React from "react";
import { Link } from "react-router-dom";

const VerifyEmail = () => {
  return (
    <div className="font-display h-screen overflow-x-hidden">
      <div className="grid grid-cols-12 h-full">
        <div className="col-span-7 max-[1103px]:col-span-6 max-[918px]:hidden py-[32px] ps-[32px]">
          <div className="bg-[#F8F7FA]  justify-center h-full relative">
            <img
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 "
              src={require("../../assets/illustrations/illustration-9.png")}
              alt="i
              llustration"
            />
            <img
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              src={require("../../assets/shapes/circle.png")}
              alt="circle"
            />
            <img
              className="absolute top-[30%] left-[30%] translate-x-[-50%] translate-y-[-50%] p-[16px] border border-divider rounded-full"
              src={require("../../assets/illustrations/illustration-10.png")}
              alt="setting"
            />
            <img
              className="absolute top-[70%] right-[20%] translate-x-[-50%] translate-y-[-50%] p-[16px] border border-divider rounded-full"
              src={require("../../assets/illustrations/illustration-11.png")}
              alt="setting"
            />
          </div>
        </div>
        <div className="col-span-5 max-[1103px]:col-span-6 max-[918px]:col-span-12 px-[94.5px] max-[542px]:px-[32px] max-[542px]:py-[32px]">
          <div className="flex flex-col justify-center h-full">
            <img
              src={require("../../assets/images/oxy-logo.png")}
              className="max-w-[127px] max-h-[87px] max-[542px]:max-w-[63px] max-[542px]:max-h-[43.31px]"
              alt="logo"
            />
            <div className="mt-[24px] font-bold text-[26px] max-[542px]:text-[22px] text-heading">
              Verify your email ✉️
            </div>
            <div className="text-[15px] text-heading">
              Account activation link sent to your email address:
              hello@example.com Please follow the link inside to continue.
            </div>
            <div className="mt-[26px]">
              <div className="mt-[16px]">
                <button className="py-[10px] bg-primary hover:bg-hover-primary w-full rounded-[6px] text-[15px] text-white">
                  Skip for now
                </button>
                <div className="mt-[16px] text-center text-[15px]">
                  <span className="text-body">Didn't get the mail?</span>{" "}
                  <Link to="/registration">
                    <span className="text-primary font-bold">Resend</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
