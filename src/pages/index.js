import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from "../pages/components/Navbar"
import Hero from "../pages/components/Hero"
import Footer from "../pages/components/Footer"
import Trending from "../pages/components/trending"
import People from "../pages/components/people"
import Popular from "../pages/components/popular"



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
 <>
 <Navbar/>
 <Hero/>
 <Popular/>
 <Trending/>
 <People/>
 <Footer/>
 </>
  )
}
