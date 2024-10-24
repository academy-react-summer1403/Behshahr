import React, { useEffect, useState } from "react";
import arrowUnder from "./../../assets/arrowUnder.svg";
import filter from "./../../assets/filter.svg";
import { Field, Form, Formik } from "formik";
import searching from "./../../assets/search.svg";

import courses1 from "./../../assets/courses1.svg";
import like from "./../../assets/coursesLike.svg";
import dislike from "./../../assets/dislike.svg";
import favorite from "./../../assets/favo.svg";
import star from "./../../assets/star.svg";
import profileimg from "./../../assets/profileimg.svg";
import line from "./../../assets/line.svg";
import filter2 from "./../../assets/Group 242.svg";
import { CoursesSlider } from "../common/SliderCourses";
import { getApi } from "../../core/api/api";
import arrow from "./../../assets/arrow.svg";

const CoursesListForm = () => {
  const [data, setData] = useState([]);
 

  const GetCouresesTop = async () => {
    const path = `/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=9&SortingCol=Active&SortType=DESC&TechCount=0`;
    const response = await getApi({ path });
    console.log(response.data.courseFilterDtos);
    setData(response.data.courseFilterDtos);
  };
  useEffect(() => {
    GetCouresesTop();
  }, []);



  return (
    <>
      <h1 className="bg-white-500 mt-10 text-center text-3xl mx-14 dark:text-white">
        لیست دوره ها
      </h1>

      {/* Top */}

      <div className=" flex justify-between items-center mt-8 shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)]  bg-[#FBF6F6] dark:bg-gray-800 p-5 rounded-3xl mx-8">
        <Formik>
          <Form className="ml-10">
            <div className="relative">
              <Field
                type="text"
                className="rtl p-4 dark:text-white border-y-green-800 w-80 text-sm text-gray-900 border dark:bg-gray-800  rounded-2xl bg-gray-50"
                placeholder="جستجو..."
                required
              />

              <svg
                className="absolute  bottom-[6px] left-[12px]"
                fill="#158B68"
                height="40px"
                width="40px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="-53.72 -53.72 595.84 595.84"
                xml:space="preserve"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
          </Form>
        </Formik>

        <div className="flex justify-center items-center mr-10">
          <select className="mr-5 dark:bg-gray-800 border-y-green-800 border-solid border-2 rounded-full h-[4rem] bg-[#ffffff] w-[13rem] text-center   text-[17px] text-[#158B68] ">
            <option value="">مرتب سازی</option>
            <option value="">متوسط </option>
            <option value="">پیشرفته </option>
            <img className="h-[8px] ml-5 " src={arrowUnder} alt="" />
          </select>

          <button>
            <img className="w-[7rem] border-y-green-800" src={filter} alt="" />
          </button>
        </div>
      </div>

      {/* Middle */}

      <div className="flex justify-center items-start mx-8">
        <div className=" bg-[#FBF6F6] mt-10 px-6 grid grid-cols-3 grid-rows-3 gap-2 items-center rounded-3xl flx h-[108rem]  w-[70rem] dark:bg-gray-800 shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)]">
          {data.map((item, index) => {
            return (
              <div className="relative p-6  h-[415px] w-[311px] ml-6 text-center rounded-md mt-20 dark:bg-gray-700 bg-[#f6fbf6] shadow-[9px_9px_12px_3px_rgba(0,_0,_0,_0.1)] text-TextGreen">
                <div className="absolute top-[-80px] left-[78px]">
                  <img src={courses1} alt="" />
                </div>

                <div className="flex justify-between items-center mt-14">
                  <div className="flex justify-center items-center">
                    <img src={like} alt="" />
                    <p>{item?.likeCount}</p>
                    <img className="mx-2" src={dislike} alt="" />
                    <p> {item?.dissLikeCount} </p>
                    <img src={favorite} alt="" />
                    <p> {item?.currentRegistrants} </p>
                  </div>
                  <button class="text-TextGreen dark:bg-gray-800 dark:text-white bg-[#BFF4E4] rounded-lg cursor-pointer p-2">
                    {item?.statusName}
                  </button>
                </div>

                <p className="text-right mt-3 dark:text-white text-[#1A1E21] text-xl">
                  {item?.title}
                </p>

                <div className="flex justify-between items-center mt-5 dark:text-white">
                  <div className="flex justify-center items-center">
                    <img src={star} alt="" />
                    <p className="ml-2">{item?.currentRegistrants}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="mr-2"> {item?.teacherName}</p>
                    <img className="my-[-1rem]" src={profileimg} alt="" />
                  </div>
                </div>

                <p className="rtl mt-5 ml-[4rem] text-[#41A789] text-xs ">
                  {" "}
                  {item?.currentRegistrants} ساعت سخنرانی ( 190 ساعت ){" "}
                </p>

                <p className="rtl mt-2 leading-5 dark:text-white truncate ... text-[#6D6767] text-xs text-right">
                  {item?.describe}
                </p>

                <img className="mt-1" src={line} alt="" />

                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-PriceRed rtl "> {item?.cost} </p>
                  <p className="text-sm text-nowrap dark:text-white">
                    : هزینه تمام دوره
                  </p>
                </div>

                <div className="flex justify-between items-center w-[15rem] h-[2.5rem] mt-3 ml-2">
                  <button className="bg-[#5BE1B9] dark:bg-gray-900 dark:border-green-600 dark:border dark:text-white rounded-xl w-[10rem] h-[2.5rem] mr-4">
                    رزرو دوره
                  </button>
                  <button className="bg-[#eeeeee] dark:bg-gray-800 dark:text-white rounded-xl w-[10rem] h-[2.5rem] border-solid border border-green-600">
                    جزِئیات دوره
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center w-[21rem] h-[51rem]  dark:bg-gray-800 bg-[#FBF6F6]  mt-10 ml-2 rounded-3xl">
          <img className="mt-10" src={filter2} alt="" />




              <div className="dark:text-white h-14 mt-5 w-[20rem]">


              <details open>
          
          <summary className="ml-2 flex justify-between">
            
                <svg width="15" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2L11.1743 9.83007L2.34863 2" stroke="#22445D" stroke-width="3" stroke-linecap="round"/>
                </svg>
                
              دسته بندی
                
              
          </summary>
               <hr class="border-2 mx-2 border-[#5BE1B9] mt-2"/>
              <div className="rtl mx-3 mt-5 w-[19rem] border-2 border-[#5BE1B9] rounded-xl">

                    <label class="flex bg-gray-100 text-gray-700 px-3 pt-1 dark:bg-gray-700 dark:text-white  hover:bg-green-200 cursor-pointer ">
                      <input className="ml-3 size-4" type="checkbox" name="Country"/>
                      <i class="pl-2 text-md">حضوری</i>
                   </label>

                   <label class="flex bg-gray-100 text-gray-700 px-3 py-1 dark:bg-gray-700 dark:text-white  hover:bg-green-200 cursor-pointer ">
                      <input className="ml-3 size-4" type="checkbox" name="Country"/>
                      <i class="pl-2 text-md">آنلاین</i>
                   </label>

                   <label class="flex bg-gray-100 text-gray-700 pb-1 px-3 dark:bg-gray-700 dark:text-white  hover:bg-green-200 cursor-pointer ">
                      <input className="ml-3 size-4" type="checkbox" name="Country"/>
                      <i class="pl-2 text-md">آنلاین - حضوری</i>
                   </label>
              </div>
    
                </details>


              <details open>
          
              <summary className="my-5 mx-3 flex justify-between">
                
                    <svg width="15" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2L11.1743 9.83007L2.34863 2" stroke="#22445D" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                    
                  نوع دوره
                    
                  
              </summary>
                   <hr class="border-2 mx-3 border-[#5BE1B9] mt-2"/>
                  <div className="rtl mx-3 my-5 w-[19rem] border-2 border-[#5BE1B9] rounded-xl">

                        <label class="flex bg-gray-100 text-gray-700 px-3 pt-1 dark:bg-gray-700 dark:text-white  hover:bg-green-200 cursor-pointer ">
                          <input className="ml-3 size-4" type="radio" name="Country"/>
                          <i class="pl-2 text-md">حضوری</i>
                       </label>

                       <label class="flex bg-gray-100 text-gray-700 px-3 py-1 dark:bg-gray-700 dark:text-white  hover:bg-green-200 cursor-pointer ">
                          <input className="ml-3 size-4" type="radio" name="Country"/>
                          <i class="pl-2 text-md">آنلاین</i>
                       </label>

                       <label class="flex bg-gray-100 text-gray-700 pb-1 px-3 dark:bg-gray-700 dark:text-white  hover:bg-green-200 cursor-pointer ">
                          <input className="ml-3 size-4" type="radio" name="Country"/>
                          <i class="pl-2 text-md">آنلاین - حضوری</i>
                       </label>
                  </div>
        
                </details>



            <details open>
             

              <summary className="mx-3 flex justify-between">
                
                    <svg width="15" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2L11.1743 9.83007L2.34863 2" stroke="#22445D" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                    
              سطح دوره
                    
                  
              </summary>
                   <hr class="border-2 mx-3 border-[#5BE1B9] mt-2"/>
                  <div className="rtl mx-3 mt-5 w-[19rem] border-2 border-[#5BE1B9] rounded-xl">

                        <label class="flex bg-gray-100 text-gray-700 px-3 pt-1 dark:bg-gray-700 dark:text-white  hover:bg-green-200 cursor-pointer ">
                          <input className="ml-3 size-4" type="radio" name="Country"/>
                          <i class="pl-2 text-md">مبتدی</i>
                       </label>

                       <label class="flex bg-gray-100 text-gray-700 px-3 py-1 dark:bg-gray-700 dark:text-white  hover:bg-green-200 cursor-pointer ">
                          <input className="ml-3 size-4" type="radio" name="Country"/>
                          <i class="pl-2 text-md">پیشرفته</i>
                       </label>

                       <label class="flex bg-gray-100 text-gray-700 pb-1 px-3 dark:bg-gray-700 dark:text-white  hover:bg-green-200 cursor-pointer ">
                          <input className="ml-3 size-4" type="radio" name="Country"/>
                          <i class="pl-2 text-md">فوق پیشرفته</i>
                       </label>
                  </div>
             </details>


            <details open>
             

             <summary className="mx-3 mt-5 flex justify-between">
               
                   <svg width="15" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M20 2L11.1743 9.83007L2.34863 2" stroke="#22445D" stroke-width="3" stroke-linecap="round"/>
                   </svg>
                   
                    قیمت
                   
                 
             </summary>
                  
             <div class="price-range p-4">
    {/* <span class="text-sm">$</span>
    <span class="text-sm">900</span> */}
    <input class="w-full bg-green-300" type="range" name="" value="110" min="0" max="1000" oninput="this.previousElementSibling.innerText=this.value"/>
    <div class="-mt-2 flex w-full justify-between">
      <span class="text-sm text-gray-600">0</span>
      <span class="text-sm text-gray-600">1000</span>
    </div>
  </div>
             </details>

            </div>




         </div>



      </div>

      {/* <div className="flex relative ml-20 w-[86rem] ">
       

       <ul className="text-[#22445D] text-right h-[39rem] flex w-[20rem] mt-16 dark:text-white dark:bg-gray-800 bg-[#FBF6F6] shadow-[10px 10px 3px rgba(0, 0, 0, 0.160784)] rounded-3xl   ">
         <img
           className="w-[1.5rem] h-[3rem] absolute right-[5.5rem] top-[5.4rem]"
           src={filter2}
           alt=""
         />
         <button className="absolute top-[6rem] right-[7.5rem] text-[#22445D] dark:text-white">
           {" "}
           فیلترها
         </button>

         <li className="absolute right-10 top-40 ">
           تکنولوژی
           <img className="w-[12rem] h-[1rem]" src={line} alt="" />
         </li>
         <li className=" absolute right-8 top-52">
           نوع برگذاری
           <div className="border-solid border-[0.1px] rounded-2xl border-[#5BE1b2] h-[7rem] w-[180px] mt-4">
             <label className=" absolute right-6 top-12" htmlFor="check">
               حضوری
             </label>
             <label className="absolute right-6 top-20" htmlFor="check">
               ان لاین
             </label>
             <label
               className="text-right absolute right-4 top-28"
               htmlFor="check"
             >
               حضوری-ان لاین
             </label>
           </div>
         </li>
         <li className="absolute right-[2.5rem] top-[24rem]">
           سطح دوره
           <img className="w-[12rem] h-[1rem]" src={line} alt="" />
         </li>
         <li className="absolute right-[2.5rem] top-[26.5rem]">
           قیمت
           <img className="w-[12rem] h-[1rem]" src={line} alt="" />
         </li>
         <button className="bg-[#5BE1b2] dark:bg-gray-700 h-[3rem] w-[8rem] absolute right-[7rem] top-[31rem] rounded-xl">
           پاک کردن فیلترها{" "}
         </button>
       </ul>

       
     </div>
     */}

      {/* Slider */}

      <CoursesSlider />
    </>
  );
};

export { CoursesListForm };