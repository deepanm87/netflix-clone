import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import styles from "@/styles/Login.module.css"
import { magic } from "@/lib/magic-client"


const Login = () => {

    const [email, setEmail] = useState("")
    const [userMsg, setUserMsg] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    useEffect( () => {
        const handleComplete = () => {
            setIsLoading(false)
        }
        router.events.on("routeChangeComplete", handleComplete)
        router.events.on("routeChangeError", handleComplete)

        return () => {
            router.events.off("routeChangeComplete", handleComplete)
            router.events.off("routeChangeError", handleComplete)
        }
    }, [router])

    const handleOnChangeEmail = e => {
        setUserMsg("")
        const email = e.target.value
        setEmail(email)
    }

    const handleLoginWithEmail = async e => {
        e.preventDefault()
        setIsLoading(true)

        if (email) {
            if (email === "deep.mgn@gmail.com") {
                try {
                    const didToken = await magic.auth.loginWithMagicLink({ email })

                    if (didToken) {
                        setIsLoading(false)
                        router.push("/")
                    }
                } catch (error) {
                    console.error(`Something went wrong logging in ${error}`)
                    setIsLoading(false)
                }
            } else {
                setUserMsg("Something went wrong logging in")
            }
        } else {
            setIsLoading(false)
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
                    <button onClick={handleLoginWithEmail} className={styles.loginBtn}>{ isLoading ? "Loading..." : "Sign In" }</button>
                </div>
            </main>
        </div>
    )
}

export default Login