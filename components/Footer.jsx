import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="p-16 h-48">
        <div className="flex flex-col justify-center lg:flex-row lg:justify-between px-5">
          <div>
            <p className="text-center">Copyright Omni Calculator sp. z o . o</p>
          </div>
          <div className="links mx-auto lg:mx-2 my-5 lg:my-1">
            <Link href={"#"} className="link">
              Privacy ,
            </Link>
            <Link href={"#"} className="link">
              Cookies &
            </Link>
            <Link href={"#"} className="link">
              Terms of service
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
