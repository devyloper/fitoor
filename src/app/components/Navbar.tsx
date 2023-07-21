'use client'
import React from "react";
import Link from "next/link";
import ShopMenu from "./ShopMenu";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="sticky top-0 flex justify-between border-b-2 my-0 mx-[4rem] ">
        <ul className="flex items-center text-sm font-cardo">
            <button className="mx-3 group h-[100%] transition-transform duration-150 ease-in-out">
            <Link href="#">
                <li className="asas">
                    Shop
                <ShopMenu />
                </li>
                
            </Link>
            </button>
            
            <button className=" mx-3 group h-[100%]">
            <Link href="#">
                <li className="">
                    Personlized Jewellery
                <ShopMenu />
                </li>
                
            </Link>
            </button>
            <li className="mx-3 my-3">Gifts</li>
            <li className="mx-3 my-3">Collection</li>
            <li className="mx-3 my-3">Featured</li>
        </ul>
        <div className="flex items-center logo font-pinyon text-2xl font-medium mx-3 my-5">
        <h1 className="text-purple-900">
            Fitoor.co
        </h1>
        </div>
        <ul className="flex items-center text-sm font-cardo mx-3 my-3">
            <li className="mx-3 my-3">Track Order</li>
            <li className="mx-3 my-3">Contact Us</li>
            
        </ul>
        <div className="flex items-center">
            <SearchIcon className="mx-3 "/>
            <PersonOutlineOutlinedIcon className="mx-3"/>
            <LocalMallOutlinedIcon className="mx-3"/>
        </div>
    </div>
  );
}
