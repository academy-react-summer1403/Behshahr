import React from "react";
import LineFooter from "./../../../assets/svg/Landing/LineFooter.svg";
import logoLanding from "./../../../assets/svg/Landing/logosite.svg";
import tel from "./../../../assets/svg/Landing/TelegramF.svg";
import skype from "./../../../assets/svg/Landing/SkypeF.svg";
import facebook from "./../../../assets/svg/Landing/FacebookF.svg";

const Footer = () => {
  return (
    <>
      <div class="bg-[#A4F6DE] mt-16 h-[300px] ">
        <div className="flex justify-around items-start pt-8 text-[#444444E5]">
          <div className="rtl">
            <p>اخبار آموزشگاه</p>
            <p className="mt-5">
              برای دریافت اخبار بروز آموزشگاه ایمیل خود را وارد کنید.
            </p>
            <div className="pt-14">
              <input
                className="w-[200px] h-[40px] rounded-r-lg"
                type="text"
                placeholder="    example@gmail.com"
              />
              <button
                class="w-[60px] h-[40px] rounded-l-lg
                                     text-[#21394B] bg-BgGreen right-0 bottom-0"
              >
                ثبت
              </button>
            </div>
          </div>

          <div className="rtl">
            <p>آموزشگاه</p>
            <p className="mt-5">درباره ما</p>
            <p>ارتباط با ما</p>
            <p>قوانین آموزشگاه</p>
          </div>

          <div className="rtl">
            <p>خدمات</p>
            <p className="mt-5">آموزش حرفه ای</p>
            <p>مشاوره رایگان</p>
            <p>فرصت های شغلی</p>
          </div>
        </div>

        <img className="mt-8 pl-16" src={LineFooter} alt="" />

        <div className="flex justify-around items-center mt-4">
          <div className="flex justify-center items-center mr-96">
            <img src={tel} alt="" />
            <img className="mx-3" src={skype} alt="" />
            <img src={facebook} alt="" />
          </div>

          <div className="flex justify-center items-center">
            <p className="">
              کلیه حقوق این وب سایت برای آکادمی اچ وان محفوظ است.©
            </p>
            <img src={logoLanding} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export { Footer };