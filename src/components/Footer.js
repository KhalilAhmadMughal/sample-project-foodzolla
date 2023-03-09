import React from "react";

import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="flex bg-gradient-secondary text-white mt-10 border-t-2 border-t-[#3F3E45] py-4 justify-between items-center sm:px-6">
      <p className="text-xs">
        Copyright &copy; 2023 Foodzilla. All Rights Reserved.
      </p>
      <div className="flex gap-4">
        <AiFillTwitterSquare size="24px" />
        <AiFillFacebook size="24px" />
        <AiFillInstagram size="24px" />
        <AiFillLinkedin size="24px" />
      </div>
    </footer>
  );
};

export default Footer;
