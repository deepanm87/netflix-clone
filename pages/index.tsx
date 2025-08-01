import Head from "next/head"
import Banner from "@/components/banner/banner";
import NavBar from "@/components/nav/navbar"
import SectionCards from "@/components/card/section-cards"
import { getVideos, getPopularVideos } from "@/lib/videos"
import styles from "@/styles/Home.module.css"

export async function getServerSideProps(context) {
  const disneyVideos = await getVideos("disney trailer")
  const productivityVideos = await getVideos("Productivity")
  const travelVideos = await getVideos("indie music")
  const popularVideos = await getPopularVideos()

  return {
    props: { disneyVideos, productivityVideos, travelVideos, popularVideos }
  }
}

export default function Home( { disneyVideos, productivityVideos, travelVideos, popularVideos }) {
    return (
        <div className={styles.container}>
          <Head>
            <title>Netflix</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.main}>
            <NavBar username="deepanm" />
            <Banner 
              title="Clifford the red dog"
              subTitle="a very cute dog"
              imgUrl="/static/clifford.webp"
            />

            <div className={styles.sectionWrapper}>
              <SectionCards title="Popular" videos={popularVideos} size="large" />
              <SectionCards title="Travel" videos={travelVideos} size="large" />
              <SectionCards title="Productivity" videos={productivityVideos} size="large" />
              <SectionCards title="Disney" videos={disneyVideos} size="large" />
            </div>
          </div>
      </div>
    )
  }

  
