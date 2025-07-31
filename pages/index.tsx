import Image from "next/image";
import { Roboto_Slab } from "next/font/google";
import Banner from "@/components/banner/banner";
import NavBar from "@/components/nav/navbar"

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
});


export default function Home() {
  return (
    <>
      <NavBar username="deepanm" />
      <Banner 
        title="Clifford the red dog" 
        subTitle="a very cute dog"
        imgUrl="./static/clifford.webp"
      />
    </>
  );
}
