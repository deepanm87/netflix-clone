import Image from "next/image"
import styles from "./banner.module.css"
import PlayIcon from "@/public/static/play_arrow.svg"

const Banner = ({ title, subTitle, imgUrl }) => {

    const handleOnPlay = () => {
        console.log('clicked')
    }

    return (
        <div className={styles.container}>
            <div className={styles.leftWrapper}>
                <div className={styles.left}>
                    <div className={styles.nseriesWrapper}>
                        <p className={styles.firstLetter}>N</p>
                        <p className={styles.series}>S E R I E S</p>
                    </div>
                    <h3 className={styles.title}>{title}</h3>
                    <h3 className={styles.subTitle}>{subTitle}</h3>

                    <div className={styles.playBtnWrapper}>
                        <button className={styles.btnWithIcon} onClick={handleOnPlay}>
                            <Image src={PlayIcon} alt="play icon" width={32} height={32} />
                            <span className={styles.playText}>Play</span>
                        </button>
                    </div>
                </div>
            </div>
             <div 
                className={styles.bannerImg}
                style={{ backgroundImage: `url(${imgUrl})`}}
                >
             </div> 
        </div>
    )
}

export default Banner