import React, { useState } from "react";
import { BsFillBasket3Fill } from "react-icons/bs";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { GrAdd } from "react-icons/gr";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";


function Header() {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [isMenue, setIsMenue] = useState(false);

  const [{ user }, dispatch] = useStateValue();

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenue(!isMenue);
    }
  };

  const logout = () => {
    setIsMenue(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16">
      <div className="hidden md:flex w-full h-full item-center justify-between">
        {/* Website view */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-20 object-cover" />
        </Link>
        <div className="flex mt-4 item-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex item-center gap-8 mt-2"
          >
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
          </motion.ul>
          <div className="relative mt-2 flex item-center justify-center">
            <BsFillBasket3Fill
              whileTap={{ scale: 0.6 }}
              className="text-textColor text-2xl ml-8 hover:cursor-pointer"
            />
            <div className="absolute -top-2 -right-4 w-5 h-5 rounded-full bg-red-600 flex item-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : avatar}
              className="w-10 rounded-full min-w-[40px] h-10 min-h-[40px] drop-shadow-x1 cursor-pointer"
              onClick={login}
            />
            {isMenue && (
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex-col absolute top-12 right-0 px-4 py-2"
              >
                {user && user.email === "fahadmahmood1200@gmail.com" && (
                  <Link to="/createContainer">
                    <p className="flex items-center px-4 py-2 gap-2  cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out rounded-lg text-textColor ">
                      <GrAdd /> New Item
                    </p>
                  </Link>
                )}
                <p
                  className="flex items-center px-4 py-2 gap-2  cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out rounded-lg text-textColor "
                  onClick={logout}
                >
                  {" "}
                  <AiOutlineLogout />
                  Log Out
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* Mobile view */}
      <div className="flex items-center justify-between md:hidden w-full h-full">
      <div className="relative flex item-center justify-center">
            <BsFillBasket3Fill
              whileTap={{ scale: 0.6 }}
              className="text-textColor text-2xl ml-8 hover:cursor-pointer"
            />
            <div className="absolute -top-2 -right-4 w-5 h-5 rounded-full bg-red-600 flex item-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-20 object-cover" />
        </Link>
        
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : avatar}
            className="w-10 rounded-full min-w-[40px] h-10 min-h-[40px] drop-shadow-x1 cursor-pointer"
            onClick={login}
          />
          {isMenue && (
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex-col absolute top-12 right-0 px-4 py-2"
            >
              {user && user.email === "fahadmahmood1200@gmail.com" && (
                <Link to="/createContainer">
                  <p className="flex items-center px-4 py-2 gap-2  cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out rounded-lg text-textColor ">
                    <GrAdd /> New Item
                  </p>
                </Link>
              )}
              <ul className="flex flex-col px-10 py-2 gap-8 ">
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
              </ul>
              <p
                className="flex items-center px-4 py-2 gap-2  cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out rounded-lg text-textColor bg-gray-200"
                onClick={logout}
              >
                {" "}
                <AiOutlineLogout />
                Log Out
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
