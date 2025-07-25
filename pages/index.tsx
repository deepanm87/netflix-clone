import Image from "next/image";
import { Roboto_Slab } from "next/font/google";
import Banner from "@/components/banner/banner";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <h1>Netflix</h1>

      <Banner 
        title="Clifford the red dog" 
        subTitle="a very cute dog"
        imgUrl="./static/clifford.webp"
      />
    </>
  );
}
