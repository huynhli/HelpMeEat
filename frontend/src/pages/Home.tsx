
import { useNavigate } from "react-router-dom"
import { motion, useScroll } from "framer-motion"
import Footer from "../components/Footer"
import Banners from "../components/Banners"
import { useContext } from "react"
import { WindowSizeContext } from "../components/WindowSizeContext"

export default function HomePage(){
	const navigate = useNavigate()
	const navHelper = (link: string) => {
		navigate(`/${link}`)
	}
	
	const {width} = useContext(WindowSizeContext)
	const mobileLimit = 700

	const {scrollYProgress} = useScroll()

	return (
		<div>
			{/* hero + img */}
			<div className={`flex flex-col items-center relative h-[90vh] w-full`}>
				<div className={`z-10 flex flex-col ${width < mobileLimit ? "mt-[15vh]" : "mt-[30vh]" } items-center`}>
					<motion.h1 
						className={`font-bold ${width < mobileLimit ? "text-xl w-[280px]": "text-4xl w-[330px]"} mx-auto  text-center`}
						initial={{ opacity: 0, y: -100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ 
							opacity: { duration: 0.6 },
							y: { type: "spring", stiffness: 50, damping: 5 }
						}}
					>
						Ever bickered with another person over what to eat?
					</motion.h1>
					<motion.h2 
						className={`${width < mobileLimit ? "text-lg " : "text-xl"} text-center w-[280px] py-3`}
						initial={{opacity: 0, y: -80}}
						animate={{opacity: 1, y: 0}}
						transition={{opacity: {delay: 0.3, duration: 0.5, ease: "easeIn"}, y: {delay: 0.2, type: "spring", stiffness: 50, damping: 5}}}
					>
						Pick <i>now</i> with ease!
					</motion.h2>
					<motion.button 
						className={`${width < mobileLimit ? "w-[200px] h-10" : "w-[300px] text-2xl h-15"} bg-orange-400 text-white rounded-lg my-4 active:bg-orange-500 hover:bg-orange-300 hover:scale-115 hover:cursor-pointer transition-transform duration-100`}
						onClick={() => navHelper('pickAFood')}
						initial={{opacity: 0, y: -80}}
						animate={{opacity: 1, y: 0}}
						transition={{opacity: {delay: 0.3, duration: 0.5, ease: "easeIn"}, y: {delay: 0.2, type: "spring", stiffness: 45, damping: 7}}}
					>
						Pick a food
					</motion.button>
					<motion.button 
						className={`${width < mobileLimit ? "w-[200px] h-10" : "w-[300px] text-2xl h-15"} border-zinc-200 border-1 bg-zinc-200 rounded-lg active:bg-zinc-300 hover:bg-zinc-100 hover:scale-115 hover:cursor-pointer transition-transform duration-100`}
						onClick={() => navHelper('tryNew')}
						initial={{opacity: 0, y: -80}}
						animate={{opacity: 1, y: 0}}
						transition={{opacity: {delay: 0.3, duration: 0.5, ease: "easeIn"}, y: {delay: 0.2, type: "spring", stiffness: 45, damping: 7}}}
					>
						Try a new random food
					</motion.button>
					
				</div>
				<motion.div 
					className={`${width < 500 ? "-left-[190px] bottom-[-140px] scale-50" : width < mobileLimit ? "-left-[150px] scale-100" : "scale-125 -left-[50px]"} 
						absolute bottom-0 z-0
					`}
					initial={{x: -200}}
					animate={{x: 0}}
					transition={{type: "spring", stiffness: 100, damping: 5}}
				>
					<img className="lazy" src='/food1.png'/>
				</motion.div>
				<motion.div 
					className={`
						${width < 500 ? "-right-[190px] bottom-[-140px] scale-50" : width < mobileLimit ? "-right-[150px] scale-100" : "scale-125 -right-[50px]"} 
						
						absolute bottom-0  z-0
					`}
					initial={{x: 200}}
					animate={{x: 0}}
					transition={{type: "spring", stiffness: 100, damping: 5}}
				>
					<img className="lazy" src='/food2.png'/>
				</motion.div>
			</div>

			{/* banners */}
			<Banners scrollYProgress={scrollYProgress}/>

			<Footer/>
		</div>
	)
}
