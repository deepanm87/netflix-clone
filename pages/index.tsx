import { Roboto_Slab } from "next/font/google";
import Banner from "@/components/banner/banner";
import NavBar from "@/components/nav/navbar"
import Card from "@/components/card/card"

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
      <Card imgUrl="/static/clifford.webp" size="large" />
      <Card size="medium" />
      <Card imgUrl="/static/clifford.webp" size="small" />
    </>
  )
}
