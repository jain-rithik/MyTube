import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg items-center">
      <div className="flex items-center gap-5 col-span-1">
        <i className="text-3xl cursor-pointer" onClick={toggleMenuHandler}>
          <FontAwesomeIcon icon={faBars} />
        </i>
        <img className="h-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
          alt="Youtube Logo"
        />
      </div>
      <div className="col-span-10">
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" placeholder="Search" />
        <button className="border border-gray-400 p-2 rounded-r-full">Search</button>
      </div>
      <div className="col-span-1">
        <i>
          <FontAwesomeIcon icon={faUser} />
        </i>
      </div>
    </div>
  );
};

export default Head;
