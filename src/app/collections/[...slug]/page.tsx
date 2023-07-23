import Navbar from "@/app/components/Navbar";
import { useRouter } from 'next/router';

import React from 'react';
import Link from "next/link";
interface Props {}
const Page = (props:Props) => {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <div>
            <Navbar />
            <div className="m-8 font-sans  text-[10px] flex justify-center">
                <Link href={'/'} className="hover:underline">HOME</Link>&nbsp;/ {slug}
            </div>

        </div>
    );
};

export default Page;