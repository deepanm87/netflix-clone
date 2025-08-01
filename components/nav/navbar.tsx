import { useState, useEffect } from "react"
import styles from "./navbar.module.css"
import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"
import { magic } from "@/lib/magic-client"

const Navbar = () => {

    const [showDropdown, setShowDropdown] = useState(false)
    const [username, setUsername] = useState("")
    const router = useRouter()

    useEffect(() => {
        async function getUsername() {
            try {
                const { email } = await magic.user.getMetadata()
                if (email) {
                    setUsername(email)
                }
            } catch (error) {
                console.error(`Error retrieving email, ${error}`)
            }
        }
        getUsername()
    }, [])
    
    const handleOnClickHome = e => {
        e.preventDefault()
        router.push('/')
    }

    const handleOnClickMyList = e => {
        e.preventDefault()
        router.push('browse/my-list')
    }

    const handleShowDropdown = e => {
        e.preventDefault()
        setShowDropdown(!showDropdown)
    }

    const handleSignout = async e => {
        e.preventDefault()

        try {
            await magic.user.logout()
            router.push("/login")
        } catch (error) {
            console.error(`Error logging out, ${error}`)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Link className={styles.logoLink} href='/'>
                    <div className={styles.logoWrapper}>
                        <Image 
                            src="/static/netflix.svg"
                            alt="Netflix logo"
                            width={128}
                            height={34}
                        />
                    </div>
                </Link>
                <ul className={styles.navItems}>
                    <li 
                        className={styles.navItem}
                        onClick={handleOnClickHome}
                    >Home</li>
                    <li 
                        className={styles.navItem2}
                        onClick={handleOnClickMyList}
                        >My List</li>
                </ul>
                 
                    <nav className={styles.navContainer}>
                    <div>
                        <button 
                            className={styles.usernameBtn}
                            onClick={handleShowDropdown}
                            >
                            <p className={styles.username}>{username}</p>
                            <Image 
                                src="/static/expand_more.svg"
                                alt="expand more"
                                width={24}
                                height={24}
                            />
                        </button>
                        { showDropdown && (
                            <div className={styles.navDropdown}>
                            <div>
                                <a 
                                    className={styles.linkName}
                                    onClick={handleSignout}
                                    >
                                    Sign out
                                </a>
                                <div className={styles.lineWrapper}></div>
                            </div>
                        </div>
                        )}
                    </div>  
                </nav>
                
            </div>
        </div>
    )
}

export default Navbar