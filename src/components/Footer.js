import React from "react";

const Footer = () => {
  return (
    <>
      <hr className="h-5 my-6 shadow-inner w-full shadow-[#8c8b8b] opacity-50" />

      <div className="hidden px-4 py-4 mt-8 p-4 sm:block">
        <div className="flex px-4 mx-14">
          <h3 className="text-[#747575] text-base">Questions? Contact us.</h3>
        </div>
        {/* list container */}
        <div className="flex space-x-16 mx-14">
          {/* 1st column */}
          <div className="flex flex-col space-y-2">
            <ul>
              <li className="mx-auto px-4  py-2 mt-6">
                <a href="#" className="text-[#757575] text-sm ">
                  FAQ
                </a>
              </li>
              <li className="mx-auto px-4 py-2">
                <a href="#" className="text-[#757575] text-sm ">
                  Investor Relations
                </a>
              </li>
              <li className="mx-auto px-4 py-2">
                <a href="#" className="text-[#757575] text-sm ">
                  Privacy
                </a>
              </li>
              <li className="mx-auto px-4 py-2">
                <a href="#" className="text-[#757575] text-sm ">
                  Speed Test
                </a>
              </li>
            </ul>
          </div>

          {/* 2nd column */}
          <div className="flex flex-col space-y-2">
            <ul>
              <li className="mx-auto px-4 py-2 mt-6">
                <a href="#" className="text-[#757575] text-sm ">
                  Help Center
                </a>
              </li>
              <li className="mx-auto px-4 py-2">
                <a href="#" className="text-[#757575] text-sm ">
                  Jobs
                </a>
              </li>
              <li className="mx-auto px-4 py-2">
                <a href="#" className="text-[#757575] text-sm ">
                  Cookie Preferences
                </a>
              </li>
              <li className="mx-auto px-4 py-2">
                <a href="#" className="text-[#757575] text-sm ">
                  Legal Notice
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd column */}
          <div className="flex flex-col space-y-2">
            <ul>
              <li className="mx-auto px-4 py-2 mt-6">
                <a href="#" className="text-[#757575] text-sm ">
                  Account
                </a>
              </li>
              <li className="mx-auto px-4 py-2">
                <a href="#" className="text-[#757575] text-sm ">
                  ways to watch
                </a>
              </li>
              <li className="mx-auto px-4 py-2">
                <a href="#" className="text-[#757575] text-sm ">
                  Corporate Information
                </a>
              </li>
              <li className="mx-auto px-4 py-2">
                <a href="#" className="text-[#757575] text-sm ">
                  Only on Netflix
                </a>
              </li>
            </ul>
          </div>
          {/* 4th column */}
          <div className="flex flex-col space-y-2">
            <ul>
              <li className="mx-auto px-4 py-2 mt-6">
                <a href="#" className="text-[#757575] text-sm ">
                  Media Center
                </a>
              </li>
              <li className="mx-auto px-4 py-2">
                <a href="#" className="text-[#757575] text-sm ">
                  Terms of Use
                </a>
              </li>
              <li className="mx-auto px-4 py-2">
                <a href="#" className="text-[#757575] text-sm ">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex px-4 mt-6 mb-4  mx-14">
          <h3 className="text-[#747575] text-sm">Netflix Bangladesh</h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
