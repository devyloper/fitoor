import React from "react";
import Link from "next/link";
type Props = {};

function ShopMenu({}: Props) {
  return (
    <div className="absolute top-[73px] h[20rem] z-50 hidden justify-evenly bg-white w-1/2 font-cardo p-6 group-hover:flex group-:flex hover:flex rounded-xl drop-shadow-sm ">
      
      <ul className="mx-2">
        <li className="my-2">
            <Link href="#">CATEGORIES</Link>
        </li>
        <li>
            <Link href="#">All</Link>
        </li>
        <li>
            <Link href="#">Necklaces</Link>
        </li>
        <li>
            <Link href="#">Bracelets</Link>
        </li>
      </ul>
      <ul>
        <li className="my-2">
            <Link href="#">PERSONALIZED JEWELLERY</Link>
        </li>
        <li>
            <Link href="#">All</Link>
        </li>
        <li>
            <Link href="#">Necklaces</Link>
        </li>
        <li>
            <Link href="#">Bracelets</Link>
        </li>
      </ul>
    </div>
  );
}

export default ShopMenu;
