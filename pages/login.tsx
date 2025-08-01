import { useState } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import styles from "@/styles/Login.module.css"


const Login = () => {

    const [email, setEmail] = useState("")
    const [userMsg, setUserMsg] = useState("")
    const router = useRouter()

    const handleOnChangeEmail = e => {
        setUserMsg("")
        const email = e.target.value
        setEmail(email)
    }

    const handleLoginWithEmail = async e => {
        e.preventDefault()

        if (email) {
            if (email === "deep.mgn@gmail.com") {
                router.push("/")
            } else {
                console.log("Something went wrong logging in")
            }
        } else {
            setUserMsg("Enter a valid email address")
        }
    }


    return (
        <div className={styles.container}>
            <Head>
                <title>Netflix SignIn</title>
            </Head>

            <header className={styles.header}>
                <div className={styles.headerWrapper}>
                    <Link className={styles.logoLink} href="/">
                            <div className={styles.logoWrapper}>
                                <Image 
                                    src="/static/netflix.svg"
                                    alt="netflix logo"
                                    width={128}
                                    height={34}
                                />
                            </div>           
                    </Link>
                </div>
            </header>

            <main className={styles.main}>
                <div className={styles.mainWrapper}>
                    <h1 className={styles.signinHeader}>Sign In</h1>

                    <input 
                        type="email"
                        placeholder="email address"
                        className={styles.emailInput}
                        onChange={handleOnChangeEmail}
                    />

                    <p className={styles.userMsg}>{userMsg}</p>
                    <button onClick={handleLoginWithEmail} className={styles.loginBtn}>Sign In</button>
                </div>
            </main>
        </div>
    )
}

export default Login