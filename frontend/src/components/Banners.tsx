import {MotionValue} from "framer-motion"

import BannerItem from "../components/BannerItem"
import { useContext } from "react"
import { WindowSizeContext } from "./WindowSizeContext"

type BannersProps = {
  scrollYProgress: MotionValue<number>
}

export default function Banners({scrollYProgress}: BannersProps){
    const { width, mobileLimit } = useContext(WindowSizeContext)

    return(
        <div className={`z-10 flex min-h-[20vh] mx-[10%] ${ width < mobileLimit ? "flex-col my-[5vh] " : "flex-row justify-around my-[12vh]"}`}>
            <BannerItem 
                scrollYProgress={scrollYProgress} order={1} 
                bannerTitle="iPhone" 
                descHeading="Coming soon!" 
                desc="
                "
                link="iphone"
            />
            <BannerItem 
                scrollYProgress={scrollYProgress} order={2} 
                bannerTitle="Android" 
                descHeading="Coming soon!" 
                desc="

                "
                link="android"
            />
            <BannerItem 
                scrollYProgress={scrollYProgress} order={3} 
                bannerTitle="Desktop" 
                descHeading="Coming soon!" 
                desc="

                "
                link="desktop"
            />
            <BannerItem 
                scrollYProgress={scrollYProgress} order={4} 
                bannerTitle="Offline" 
                descHeading="Coming soon!" 
                desc="

                "
                link="desktopOffline"
            />
        </div>
    )
}