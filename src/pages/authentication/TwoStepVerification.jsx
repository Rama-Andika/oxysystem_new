import React from "react";
import { Link } from "react-router-dom";

const TwoStepVerification = () => {
  return (
    <div className="font-display h-screen overflow-x-hidden">
      <div className="grid grid-cols-12 h-full">
        <div className="col-span-7 max-[1103px]:col-span-6 max-[918px]:hidden py-[32px] ps-[32px]">
          <div className="bg-[#F8F7FA]  justify-center h-full relative">
            <img
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 "
              src={require("../../assets/illustrations/illustration-12.png")}
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
              src={require("../../assets/illustrations/illustration-13.png")}
              alt="setting"
            />
            <img
              className="absolute top-[70%] right-[20%] translate-x-[-50%] translate-y-[-50%] p-[16px] border border-divider rounded-full"
              src={require("../../assets/illustrations/illustration-8.png")}
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
              Two-Step Verification 💬
            </div>
            <div className="text-[15px] text-body">
              We sent a verification code to your mobile. Enter the code from
              the mobile in the field below.
            </div>
            <div className="text-[15px] text-heading">******9763</div>
            <div className="mt-[26px]">
              <div className="text-[15px] text-body">
                Type your 6 digit security code
              </div>
              <div className="mt-[6px]">
                <form action="">
                  <div className="grid grid-cols-6 gap-[12px] mb-[16px]">
                    <input type="text" className="border border-[#DBDADE] h-[48px] text-center text-[24px] font-bold text-primary" />
                    <input type="text" className="border border-[#DBDADE] h-[48px] text-center text-[24px] font-bold text-primary" />
                    <input type="text" className="border border-[#DBDADE] h-[48px] text-center text-[24px] font-bold text-primary" />
                    <input type="text" className="border border-[#DBDADE] h-[48px] text-center text-[24px] font-bold text-primary" />
                    <input type="text" className="border border-[#DBDADE] h-[48px] text-center text-[24px] font-bold text-primary" />
                    <input type="text" className="border border-[#DBDADE] h-[48px] text-center text-[24px] font-bold text-primary" />
                  </div>
                  <button className="py-[10px] bg-primary hover:bg-hover-primary w-full rounded-[6px] text-[15px] text-white">
                    Verify my account
                  </button>
                  <div className="mt-[16px] text-center text-[15px]">
                    <span className="text-body">Didn't get the code?</span>{" "}
                    <Link to="/registration">
                      <span className="text-primary font-bold">Resend</span>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoStepVerification;
