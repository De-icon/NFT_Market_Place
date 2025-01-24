"use client"

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { User, Logo } from "../assets/img/icons/index";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";



export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // ... existing code ...

  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavItems = () => (
    <ul className={`font-WorkSans ${isMobile ? 'flex flex-col space-y-4' : 'flex space-x-6 items-center'}`}>
      <li className="hover:bg-secondary p-2 rounded-md">
        <Link href='/marketplace'>Marketplace</Link>
      </li>
      <li className="hover:bg-secondary p-2 rounded-md">
        <Link href='/ranking'>Ranking</Link>
      </li>
      <li className="hover:bg-secondary p-2 rounded-md">
        <Link href='/connectWallet'>Connect a Wallet</Link>
      </li>
      
        <li>
        <Link href='/register'>
          <Button className={isMobile ? 'w-full' : ''}>
            <Image src={User} className="w-5 h-5 mr-2 bg-transparent" alt="User icon"/> Sign Up
          </Button>
        </Link>
      </li>
      
      {/* // <div className="flex items-center space-x-3">
      //   <li>
        
      //   <Button  className={isMobile ? 'w-full' : ''}>
      //     <img src={User} className="w-5 h-5 mr-2 bg-transparent" alt="User icon"/> Log Out
      //   </Button>
      
      // </li>
      // <li>
      //   <Link to='/profile'><img className=' w-12 h-12 rounded-full' src={Avatar1} /></Link>
      // </li>
      // </div> */}

     
    </ul>
  );

  return (
    <div className="w-full sticky">
      <div className="w-full p-7">
        <div className="flex flex-row items-center justify-between">
          <Link href="/"><Image className="w-52 cursor-pointer" src={Logo} alt="Logo" /></Link>
          
          {isMobile ? (
            <button onClick={toggleMenu} className="z-50">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          ) : (
            <nav>
              <NavItems />
            </nav>
          )}
        </div>
        {isMobile && (
          <nav className={`mt-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <NavItems />
          </nav>
        )}
      </div>
    </div>
  );
}