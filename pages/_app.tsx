import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { magic } from "@/lib/magic-client"
import "@/styles/globals.css"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect( () => {
    const handleLoggedIn = async () => {
      const isLoggedIn = await magic.user.isLoggedIn()
      if (isLoggedIn) {
        router.push("/")
      } else {
        router.push("/login")
      }
    }
    handleLoggedIn()
  }, [])

  useEffect(() => {
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

  return isLoading ? <div>Loading...</div> : <Component {...pageProps} />
}
