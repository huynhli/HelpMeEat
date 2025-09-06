import { useState } from "react"
import NavDropDown from "./NavDropDown"
import { AnimatePresence } from "framer-motion"
import { useContext } from "react";
import { WindowSizeContext } from "./WindowSizeContext";
import { useNavigate } from "react-router-dom";


export default function Header(){
	// const scrollToSpot = (pixels: number): void => {
	// 	window.scrollTo({ top: pixels, behavior: 'smooth'})
	// }

	const navigate = useNavigate()
	const navHelper = (link: string) => {
		navigate(`/${link}`)
	}

	// Re-renders on update
	const [showNav, setShowNav] = useState<Boolean>(false)
	const showNavHelper = () => {
		setShowNav(prev => !prev)
	}

	const [ otherList, setOtherList ] = useState<string[]>([])

	// no re-render!
	// const showNavRef = useRef<Boolean>(false)
	// const navDropdownRef = useRef<HTMLDivElement | null>(null)
	
	// const showNavHelper = () => {
	// 	showNavRef.current = !showNavRef.current
	// 	if (navDropdownRef.current) {
	// 		navDropdownRef.current.style.display = showNavRef.current ? "none" : "flex"
	// 	}
	// }

	const { width } = useContext(WindowSizeContext)
	const mobileLimit = 700

	return (
		<div className="flex flex-col">
			<div 
				className={`
					z-10 relative flex flex-row ${width < mobileLimit ? "justify-center px-[10%]" : "justify-between" } items-center text-center h-15  mx-[1%] border-b-1 border-black
				`}
			>
				<div className="font-bold italic px-1 text-orange-500 active:text-orange-600 hover:cursor-pointer hover:scale-115 transition-transform duration-100 hover:text-orange-400"
					onClick={() => navHelper('')}
				>
					<h1 className="text-2xl">
						Help Me Eat
					</h1>
				</div>
				{/* <div className="w-18 text-center"><a onClick={() => scrollToSpot(700)} className={`inline-block mx-2 cursor-pointer font-bold text-lg transition-all  duration-300 hover:scale-125 `}>Games</a></div> */}
					
				{width < mobileLimit ? 
					<nav className={`left-4 absolute h-[27px] w-[27px] cursor-pointer flex flex-col 
							${showNav && "-translate-y-1  scale-70 bg-orange-500"}  
							transition-transform duration-100`} onClick={showNavHelper}
					>
						<div className={`h-[10%] bg-black ${showNav && "rotate-90 translate-x-[13px] translate-y-[8px]"} transition-transform duration-200 mt-1`}/>
						<div className={`h-[20%]`}/>
						<div className={`h-[10%] bg-black ${showNav && "-rotate-90 -translate-x-[13px] translate-y-[0px]"} transition-transform duration-200`}/>
						<div className={`h-[20%]`}/>
						<div className={`h-[10%] flex flex-row relative`}>
							<div className={`absolute bg-black h-full w-[50%] left-0 ${showNav && "rotate-45 translate-y-[11px] -translate-x-[3px] w-[75%]"} transition-transform duration-200`}/>
							<div className={`absolute bg-black h-full w-[50%] right-0 ${showNav && "-rotate-45 translate-y-[11px] translate-x-[3px] w-[75%]"} transition-transform duration-200`}/>
						</div>
					</nav>
				:
					<div className="flex flex-row h-full justify-between items-center">
						<button className="hover:scale-110 hover:text-orange-500 transition-transform duration-100 h-full w-20 mx-1 hover:cursor-pointer py-3"
							onClick={() => navHelper('social')}
						>
							Social
						</button>
						<div className="z-100 relative hover:scale-110 hover:text-orange-500 flex justify-center items-center transition-transform duration-100 h-full w-20 mx-1 py-3 group/outer">
							<button className="hover:cursor-pointer relative">Tools<div className="absolute right-[-13px] bottom-[50%] w-2 h-[1px] group-hover/outer:bg-orange-500 bg-black rotate-45"/><div className="absolute right-[-18px] bottom-[50%] w-2 h-[1px] group-hover/outer:bg-orange-500 bg-black -rotate-45"/> </button>
							<div className="text-black hidden group-hover/outer:flex flex-row w-30 h-47 absolute -bottom-[186px] -right-[13px]">
								<div className="relative flex flex-col text-sm bg-zinc-100 w-full h-full">
									<div className="flex items-center text-left pl-4 w-full h-full hover:cursor-pointer hover:shadow-lg hover:bg-gray-200"
										onClick={() => navHelper('')}
									>
										Pick a food
									</div>
									<div className="flex items-center text-left pl-4 w-full h-full hover:shadow-lg hover:bg-gray-200 group/inner"
										onMouseEnter={() => setOtherList([
											"Choose a random culture",
											"Choose a random dish",
											"Choose a random restaurant (soon)"
										])}
										onMouseLeave={() => setOtherList([])}
									>
										Random
										<div className="hidden group-hover/inner:flex absolute bg-white pl-4 -left-[160px] top-0 flex-col items-center justify-around w-[160px] h-full"
										>
											{otherList.map((item, key) => (
												<div className={`${key != 1 ? "border-[2px]" : "border-x-[2px]"} hover:bg-gray-100 hover:shadow-md border-gray-100 h-full w-full px-2 flex justify-left items-center`} key={key}>{item}</div>
											))}
										</div>
									</div>
									<div className="flex items-center text-left pl-4 w-full h-full hover:shadow-lg hover:bg-gray-200 group/inner"
										onMouseEnter={() => setOtherList([
											"Choose a random culture",
											"Choose a random dish",
											"Choose a random restaurant (soon)"
										])}
										onMouseLeave={() => setOtherList([])}
									>
										Pick a food
										<div className="hidden group-hover/inner:flex absolute bg-white pl-4 -left-[160px] top-0 flex-col items-center justify-around w-[160px] h-full"
										>
											{otherList.map((item, key) => (
												<div className={`${key != 1 ? "border-[2px]" : "border-x-[2px]"} hover:bg-gray-100 hover:shadow-md border-gray-100 h-full w-full px-2 flex justify-left items-center`} key={key}>{item}</div>
											))}
										</div>
									</div>
									
								</div>
							</div>
						</div>
						<div className="ml-3 bg-gray-300 h-[60%] w-[2px]"/>
						<button className="hover:text-orange-500 relative hover:scale-110 transition-transform duration-100 h-full w-20 mx-1 hover:cursor-pointer"
							onClick={() => navHelper('login')}
						>
							Login
						</button>
						<button 
							className="
								hover:scale-110 transition-transform duration-100 rounded-lg text-white bg-orange-500 hover:bg-orange-400 w-20 mx-1 hover:cursor-pointer active:bg-orange-600 h-[50%]
							"
							onClick={() => navHelper('signup')}
						>
							Sign up
						</button>
					</div>
				}
			</div>
			
			<AnimatePresence>
				{showNav &&
					<NavDropDown 
						titlesAndLinks={[
							["Login", "login"],
							["Sign up", "signup"],
							["Pick a food", "pickAFood"],
							["Try something new", "tryNew"],
							["Social", "social"],
							["Tools", "moreTools"]
						]}
						showNav={showNav}
					/>
				}
			</AnimatePresence>

		</div>
	)
}
