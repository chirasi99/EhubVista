import { Redressed } from "next/font/google";
import  Container from "../Container";
import Link from "next/link";

const redressed = Redressed({subsets: ['latin'], weight: ['400']})

const NavBar = () => {
    return (
       <div className="sticky top-0 z-30 w-full shadow-sm bg-slate-200">
                <div className="py-4 border-b-[1px]">
                        <Container>
                                <div className="flex justify-between gap-3 item-center md-gap-0">
                                        <Link href="/" className="${redressed.className} font-bold text-1xl">
                                        <img src="/assets/EHubVista-logos_black.png" alt="logo" className="w-8 h-8 ml-5"/>
                                        E-HubVista 
                                        </Link>
                                        <div className="hidden md:block">Search</div>
                                        <div className="flex items-center gap-8 md:gap-12">
                                                <div>CartCount</div>
                                                <div>UserMenu</div>     
                                        </div>
                                </div>
                        </Container>
                </div>
        </div>
    );
}

export default NavBar;