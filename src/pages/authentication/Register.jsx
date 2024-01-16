import React from "react";
import Facebook from "../../assets/icons/Facebook";
import Twitter from "../../assets/icons/Twitter";
import Google from "../../assets/icons/Google";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
    const onClickSignUp = () => {
        navigate("/login")
    }
  return (
    <div className="font-display h-screen overflow-x-hidden">
      <div className="grid grid-cols-12 h-full">
        <div className="col-span-7 max-[1103px]:col-span-6 max-[918px]:hidden py-[32px] ps-[32px]">
        <div className="bg-[#F8F7FA]  justify-center h-full relative">
            <img
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10"
              src={require("../../assets/illustrations/illustration-2.png")}
              alt="i
              llustration"
            />
            <img
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              src={require("../../assets/shapes/circle.png")}
              alt="circle"
            />
          </div>
        </div>
        <div className="col-span-5 max-[1103px]:col-span-6 max-[918px]:col-span-12 px-[94.5px] max-[542px]:px-[32px] max-[1200px]:py-[32px]">
          <div className="flex flex-col justify-center h-full">
            <img
              src={require("../../assets/images/oxy-logo.png")}
              className="max-w-[127px] max-h-[87px] max-[542px]:max-w-[63px] max-[542px]:max-h-[43.31px]"
              alt="logo"
            />
            <div className="mt-[24px] font-bold text-[26px] max-[542px]:text-[22px] text-heading">
              Adventure starts here 🚀
            </div>
            <div className="text-[15px] text-body">
              Make your app management easy and fun!
            </div>
            <div className="mt-[26px]">
              <form action="">
                <div>
                  <div className="text-[13px] mb-[4px] text-heading">
                    Username
                  </div>
                  <input
                    className="border border-[#DBDADE] w-full px-[14px] py-[7px] text-[15px]"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div>
                  <div className="text-[13px] mb-[4px] text-heading">Email</div>
                  <input
                    className="border border-[#DBDADE] w-full px-[14px] py-[7px] text-[15px]"
                    placeholder="johndoe@gmail.com"
                    type="Email"
                  />
                </div>
                <div className="mt-[16px]">
                  <div className="text-[13px] text-heading ">Password</div>

                  <input
                    className="border border-[#DBDADE] w-full px-[14px] py-[7px] text-[15px]"
                    type="password"
                  />
                </div>
                <div className="mt-[16px] flex items-center gap-[6px]">
                  <input
                    type="checkbox"
                    id="remember-me"
                    className="border border-[#DBDADE] w-[18px] h-[18px]"
                  />
                  <label
                    htmlFor="remember-me  "
                    className="text-[15px] text-body"
                  >
                    <span>I Agree to </span>{" "}
                    <span className="text-primary">
                      {" "}
                      privacy policy & terms
                    </span>
                  </label>
                </div>
                <div className="mt-[16px]">
                  <button onClick={onClickSignUp} className="py-[10px] bg-primary hover:bg-hover-primary w-full rounded-[6px] text-[15px] text-white">
                    Sign Up
                  </button>
                  <div className="mt-[16px] text-center text-[15px]">
                    <span className="text-body">Already have an account?</span>{" "}
                    <Link to="/login">
                      <span className="text-primary font-bold">
                        Sign in instead
                      </span>
                    </Link>
                  </div>
                  <div className="text-center my-[26px] text-[13px] text-body">
                    orh
                  </div>
                  <div className="flex justify-center items-center gap-[10px]">
                    <div className="max-w-[38px] max-h-[38px] bg-[#4267B2]/[16%] py-[11px] px-[15px] rounded-[6px] text-center">
                      <Facebook />
                    </div>
                    <div className="max-w-[38px] max-h-[38px] bg-[#4267B2]/[16%] py-[11px] px-[15px] rounded-[6px]">
                      <Twitter className="ms-[-5px]" />
                    </div>
                    <div className="max-w-[38px] max-h-[38px] bg-[#4267B2]/[16%] py-[11px] px-[15px] rounded-[6px]">
                      <Google className="ms-[-5px]" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
