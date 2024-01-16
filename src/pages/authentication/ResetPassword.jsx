import React from 'react'
import { Link } from 'react-router-dom'
import ArrowLeft from '../../assets/icons/ArrowLeft'

const ResetPassword = () => {
  return (
    <div className="font-display h-screen overflow-x-hidden">
      <div className="grid grid-cols-12 h-full">
        <div className="col-span-7 max-[1103px]:col-span-6 max-[918px]:hidden py-[32px] ps-[32px]">
          <div className="bg-[#F8F7FA]  justify-center h-full relative">
            <img
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 "
              src={require("../../assets/illustrations/illustration-6.png")}
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
              src={require("../../assets/illustrations/illustration-7.png")}
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
              Reset Password? 🔒
            </div>
            <div className="text-[15px] text-heading">
            for john.doe@email.com
            </div>
            <div className="mt-[26px]">
              <form action="">
                <div>
                  <div className="text-[13px] mb-[4px] text-heading">New Password</div>
                  <input
                    className="border border-[#DBDADE] w-full px-[14px] py-[7px] text-[15px]"
                    placeholder="John Doe"
                    type="password"
                  />
                </div>
                <div>
                  <div className="text-[13px] mb-[4px] text-heading">Confirm Password</div>
                  <input
                    className="border border-[#DBDADE] w-full px-[14px] py-[7px] text-[15px]"
                    placeholder="John Doe"
                    type="password"
                  />
                </div>

                <div className="mt-[16px]">
                  <button className="py-[10px] bg-primary hover:bg-hover-primary w-full rounded-[6px] text-[15px] text-white">
                    Set New Password
                  </button>
                  <div className="mt-[16px] text-center text-[15px]">
                    <Link to="/login" className="flex gap-[6.5px] justify-center items-center">
                      <div className="text-primary font-bold"><ArrowLeft /></div>
                      <div className="text-primary font-bold">
                        Back to log in
                      </div>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword