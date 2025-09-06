import { useContext, useState } from "react"
import { AnimatePresence, motion, MotionValue, useSpring, useTransform } from "framer-motion"
import { WindowSizeContext } from "./WindowSizeContext"

type BannerItemProps = {
    order: number
    scrollYProgress: MotionValue<number>
    bannerTitle: string
    descHeading: string
    desc: string
    link: string
}

export default function BannerItem ({ order, scrollYProgress, bannerTitle, descHeading, desc } : BannerItemProps) {
    const { width, mobileLimit } = useContext(WindowSizeContext)
   
    const [showBanner, setShowBanner] = useState<number>(0)

    const bannerItemY = useTransform(scrollYProgress, width < mobileLimit ? [0.1*(order -1), (0.1*(order -1))+0.02] : [0.2*(order -1), (0.2*(order -1))+0.02] , [-50, 0])
    const springY = useSpring(bannerItemY, {stiffness: 50, damping: 8})
    const bannerItemOpacity = useTransform(scrollYProgress, width < mobileLimit ? [0.1*(order -1), (0.1*(order -1))+0.02] : [0.2*(order -1), (0.2*(order -1))+0.02], [0, 1])
    const springOpacity = useSpring(bannerItemOpacity, {stiffness: 50, damping: 8})
   
    return (
        <motion.div
            className={`my-[1vh] bg-gray-200 rounded-lg shadow-sm relative h-full ${width < mobileLimit ? "" : "w-[23%]"}`}
            style={{y: springY, opacity: springOpacity}}
        >
            <motion.div
                className={`
                    text-lg font-bold z-20 shadow-md w-full h-[7vh] rounded-md bg-gray-300 flex items-center justify-center hover:cursor-pointer hover:bg-gray-400
                    ${showBanner === order && "bg-gray-400"}
                `}
                onClick={() => setShowBanner(prevShowBanner => prevShowBanner === order ? 0 : order)}
            >
                {bannerTitle}
            </motion.div>
            <AnimatePresence>
                {showBanner === order &&
                    <motion.div
                        key={order}
                        className="z-0 bg-gray-200 py-5 flex items-center justify-center flex-col w-full rounded-b-lg shadow-md"
                        // TODO: onClick={() => {useNavigate()(`/${link}`)}}
                    >
                        <h2 className="font-bold">{descHeading}</h2>
                        <p>{desc}</p>
                    </motion.div>
                }
            </AnimatePresence>
        </motion.div>
    )
}