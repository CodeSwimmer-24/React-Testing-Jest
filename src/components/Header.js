import React from "react";
import { BsFillBasket3Fill } from "react-icons/bs";
import logo from "../assets/logo.png";
import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';

function Header() {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const login = async() => {
        const response = await signInWithPopup(firebaseAuth, provider);
        console.log(response,'rrrr')
    }

  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      <div className="hidden md:flex w-full h-full item-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-20 object-cover" />
        </Link>
        <div className="flex item-center gap-8">
          <ul className="flex item-center gap-8 ">
            <li className="text-base text-textColor hover:text-hiadingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base text-textColor hover:text-hiadingColor duration-100 transition-all ease-in-out cursor-pointer">
              About
            </li>
            <li className="text-base text-textColor hover:text-hiadingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-hiadingColor duration-100 transition-all ease-in-out cursor-pointer">
              Services
            </li>
            {/* <li className="relative flex item-center justify-center">
          <BsFillBasket3Fill /> s       
          </li> */}
          </ul>
          <div className="relative flex item-center justify-center">
            <BsFillBasket3Fill whileTap={{scale: 0.6}} className="text-textColor text-2xl ml-8 hover:cursor-pointer" />
            <div className="absolute -top-2 -right-4 w-5 h-5 rounded-full bg-red-600 flex item-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
          <div className="relative">
          <RiAccountCircleFill onClick={login} className="w-10 m-w-[30px] h-10 m-h-[30px] text-textColor mb-4 hover:cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="flex md:hidden w-full h-full bg-blue-400 p-4"></div>
    </header>
  );
}

export default Header;
