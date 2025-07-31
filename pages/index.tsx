import { Roboto_Slab } from "next/font/google";
import Banner from "@/components/banner/banner";
import NavBar from "@/components/nav/navbar"
import SectionCards from "@/components/card/section-cards"
import styles from "@/styles/Home.module.css"

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
});


export default function Home() {

  const disneyVideos = [
    {
      imgUrl: "/static/clifford.webp"
    }, 
      {
        imgUrl: "/static/clifford.webp"
    }, 
    {
      imgUrl: "/static/clifford.webp"
    }
  ]


  return (
    <div className={styles.container}>
      <NavBar username="deepanm" />
      <Banner 
        title="Clifford the red dog" 
        subTitle="a very cute dog"
        imgUrl="./static/clifford.webp"
      />

      <div className={styles.sectionWrapper}>
        <SectionCards title="Disney" videos={disneyVideos} size="large" />
        <SectionCards title="Disney" videos={disneyVideos} size="medium" />
      </div>
    </div>
  )
}
