import Head from "next/head"
import Banner from "@/components/banner/banner";
import NavBar from "@/components/nav/navbar"
import SectionCards from "@/components/card/section-cards"
import { getVideos, getPopularVideos, getWatchItAgainVideos } from "@/lib/videos"
import { redirectUser } from "@/utils/redirectUser"
import styles from "@/styles/Home.module.css"

export async function getServerSideProps(context) {
  const { userId, token } = await redirectUser(context)

  if (!userId) {
    return {
      props: {},
      redirect: {
        destination: "/login",
        permanent: false
      }
    }
  }

  const watchItAgainVideos = await getWatchItAgainVideos(userId, token)
  const disneyVideos = await getVideos("disney trailer")
  const productivityVideos = await getVideos("Productivity")
  const travelVideos = await getVideos("indie music")
  const popularVideos = await getPopularVideos()

  return {
    props: { disneyVideos, productivityVideos, travelVideos, popularVideos, watchItAgainVideos }
  }
}

export default function Home( { disneyVideos, productivityVideos, travelVideos, popularVideos, watchItAgainVideos }) {
    return (
        <div className={styles.container}>
          <Head>
            <title>Netflix</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.main}>
            <NavBar />
            <Banner 
              videoId="4zH5iYM4wJo"
              title="Clifford the red dog"
              subTitle="a very cute dog"
              imgUrl="/static/clifford.webp"
            />

            <div className={styles.sectionWrapper}>
              <SectionCards title="Popular" videos={popularVideos} size="large" />
              <SectionCards title="Travel" videos={travelVideos} size="medium" />
              <SectionCards title="Productivity" videos={productivityVideos} size="small" />
              <SectionCards title="Disney" videos={disneyVideos} size="large" />
              <SectionCards title="Watch it again" videos={watchItAgainVideos} size="small" />
            </div>
          </div>
      </div>
    )
  }

  
