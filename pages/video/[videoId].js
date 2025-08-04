import { useRouter } from "next/router"
import Modal from "react-modal"
import styles from "@/styles/Video.module.css"

Modal.setAppElement("#__next")

const Video = () => {

    const router = useRouter()

    return (
        <div className={styles.container}>
            <Modal
                isOpen={true}
                contentLabel="Watch the video"
                onRequestClose={() => router.back()}
                overlayClassName={styles.overlay}
                className={styles.modal}
            >
                <iframe
                    id="ytplayer"
                    className={styles.videoPlayer}
                    type="text/html"
                    width="100%"
                    height="360"
                    src={`https://www.youtube.com/embed/${router.query.videoId}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
                >
                </iframe>
                <div>Modal body</div>
            </Modal>
        </div>
    )
}

export default Video