import React from "react";
import { BiConfused } from "react-icons/bi";

const NotFoundPage = () => {
  return (
    <div className="min-h-[415px] w-full flex flex-col items-center justify-center gap-6 text-black">
      <BiConfused size={100} />
      <h1 className="capitalize text-5xl">404 page not found!</h1>
    </div>
  );
};

export default NotFoundPage;
