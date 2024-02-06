"use client";

import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import SearchIcon from "@mui/icons-material/Search";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  FacebookOutlined,
  FacebookSharp,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [scrollY, setScrollY] = useState("");
  let navbarClasses = ["w-[100%]", "z-[99999]", "p-3"];

  const menuSheet = useRef();
  const closeMenu = useRef();
  const siteTitle = useRef();
  const siteName = useRef();

  const menuBtnHandler = () => {
    // menuSheet.current.style.transform = `translateX(50%)`;
    closeMenu.current.classList.add("static");
    closeMenu.current.classList.remove("hidden");
    menuSheet.current.classList.add("left-0");
    menuSheet.current.classList.remove("-left-[300px]");
    siteTitle.current.classList.remove("text-white");
    siteTitle.current.classList.add("text-black");
    siteName.current.classList.add("text-black");
    siteName.current.classList.remove("text-white");

    // menuSheet.current.classList.add('left-0')
  };
  const hideMenuHandler = () => {
    closeMenu.current.classList.remove("static");
    closeMenu.current.classList.add("hidden");
    menuSheet.current.classList.remove("left-0");
    menuSheet.current.classList.add("-left-[300px]");
    siteTitle.current.classList.add("text-white");
    siteTitle.current.classList.remove("text-black");
    siteName.current.classList.remove("text-black");
    siteName.current.classList.add("text-white");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
  });
  return (
    <div className="h-52">
      <header
        className={` ${navbarClasses.join(" ")} ${scrollY < 10 ? "absolute top-[20px] bg-primary lg:bg-transparent" : "fixed top-0 bg-primary  lg:bg-white  border-b border-b-gray-300"}`}
      >
        <div className=" pt-0 lg:pt-5 flex justify-around lg:justify-between px-1">
          <div className="flex items-center gap-3 z-[999]  w-[100%] lg:w-[auto] justify-start">
            <span>
              <FormatAlignLeftIcon
                onClick={() => menuBtnHandler()}
                className={`hover:cursor-pointer ${scrollY < 10 ? "text-white" : " text-black"}`}
              />
            </span>

            <div
              ref={menuSheet}
              className="fixed items-baseline z-[9999] top-0 -left-[300px] h-screen w-[300px] bg-white transition-all duration-100 ease-in"
            >
              <ul className="flex absolute w-full top-24 flex-col justify-center p-10">
                <li className="py-2 border-b w-full pl-3 hover:bg-gray-100 cursor-pointer hover:text-blue-500">
                  Biolody(33)
                </li>
                <li className="py-2 border-b w-full pl-3 hover:bg-gray-100 cursor-pointer hover:text-blue-500">
                  Chemistry(32)
                </li>
                <li className="py-2 border-b w-full pl-3 hover:bg-gray-100 cursor-pointer hover:text-blue-500">
                  Construction(21)
                </li>
                <li className="py-2 border-b w-full pl-3 hover:bg-gray-100 cursor-pointer hover:text-blue-500">
                  Conversion(12)
                </li>
                <li className="py-2 border-b w-full pl-3 hover:bg-gray-100 cursor-pointer hover:text-blue-500">
                  Ecology(6)
                </li>
                <li className="py-2 border-b w-full pl-3 hover:bg-gray-100 cursor-pointer hover:text-blue-500">
                  Everyday Life
                </li>
                <li className="py-2 border-b w-full pl-3 hover:bg-gray-100 cursor-pointer hover:text-blue-500">
                  Finance
                </li>
                <li className="py-2 border-b w-full pl-3 hover:bg-gray-100 cursor-pointer hover:text-blue-500">
                  Food
                </li>
                <li className="py-2 border-b w-full pl-3 hover:bg-gray-200 cursor-pointer hover:text-blue-500">
                  Healtch
                </li>
              </ul>
            </div>
            <span
              onClick={() => hideMenuHandler()}
              ref={closeMenu}
              className="close-menut h-[1100px] w-[97.5vw] bg-black bg-opacity-[.5] absolute hidden"
            ></span>
            <div className="flex gap-2 items-center z-[99999]">
              <h2
                ref={siteTitle}
                className={`font-bold text-xl text-black ${scrollY < 10 ? "text-white" : "text-black"} `}
              >
                omni'
              </h2>
              <span
                className={`${scrollY < 10 ? "text-white" : "text-black"}`}
                ref={siteName}
              >
                CALCULATOR
              </span>
            </div>
          </div>
          <ul className="hidden lg:flex px-3 gap-4 items-center text-primary font-semibold ">
            <li className="link">We're hiring!</li>
            <li className="link">Embed</li>
            <li className="font-light">Share via</li>
            <li>
              <div className="flex gap-2">
                <div className="h-[25px] w-[25px] rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0,0,256,256"
                  >
                    <g
                      fill="#4ebee1"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      // style="mix-blend-mode: normal"
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M25,2c-12.6907,0 -23,10.3093 -23,23c0,12.69071 10.3093,23 23,23c12.69071,0 23,-10.30929 23,-23c0,-12.6907 -10.30929,-23 -23,-23zM25,4c11.60982,0 21,9.39018 21,21c0,11.60982 -9.39018,21 -21,21c-11.60982,0 -21,-9.39018 -21,-21c0,-11.60982 9.39018,-21 21,-21zM26.58008,10c-2.65186,0 -4.663,0.86722 -5.90234,2.40039c-1.23934,1.53317 -1.67773,3.58065 -1.67773,5.82617v1.77344h-2c-0.55226,0.00006 -0.99994,0.44774 -1,1v5c0.00006,0.55226 0.44774,0.99994 1,1h2v12c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-12h4c0.47687,-0.00017 0.88729,-0.33701 0.98047,-0.80469l1,-5c0.05844,-0.29363 -0.01774,-0.598 -0.20762,-0.82948c-0.18987,-0.23148 -0.47346,-0.36572 -0.77285,-0.36584h-5v-2.19336c0,-0.48502 0.03137,-0.48103 0.17188,-0.57227c0.14051,-0.09124 0.64832,-0.23437 1.53906,-0.23437h3.28906c0.55226,-0.00006 0.99994,-0.44774 1,-1v-4c-0.00023,-0.42258 -0.26605,-0.79942 -0.66406,-0.94141c0,0 -2.8796,-1.05859 -5.75586,-1.05859zM26.58008,12c1.89242,0 3.64742,0.51045 4.41992,0.75195v2.24805h-2.28906c-1.04726,0 -1.89696,0.08458 -2.62695,0.55859c-0.72999,0.47401 -1.08398,1.38207 -1.08398,2.24805v3.19336c0.00006,0.55226 0.44774,0.99994 1,1h4.7793l-0.59961,3h-4.17969c-0.55226,0.00006 -0.99994,0.44774 -1,1v12h-4v-12c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1h-2v-3h2c0.55226,-0.00006 0.99994,-0.44774 1,-1v-2.77344c0,-1.97948 0.40501,-3.54478 1.23242,-4.56836c0.82741,-1.02358 2.10451,-1.6582 4.34766,-1.6582z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="h-[25px] w-[25px] rounded-full">
                  <Twitter className="text-primary" />
                </div>
                <div className="h-[25px] w-[25px] rounded-full">
                  <LinkedIn className="text-primary" />
                </div>
              </div>
            </li>
            <li>
              <div className="relative ">
                <input
                  type="search"
                  className=" w-44 px-4 py-2 text-gray-800 rounded-full focus:outline-none border border-primary"
                  x-model="search"
                />
                <SearchIcon
                  fontSize="small"
                  className="absolute top-3 right-3 text-primary"
                />
              </div>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
