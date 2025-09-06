import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
// import { forwardRef } from "react"
import { useNavigate } from "react-router-dom"

type NavDropdownProps = {
    titlesAndLinks: string[][]
    showNav: Boolean
}

// const NavDropDown = forwardRef<HTMLDivElement, NavDropdownProps>(({titlesAndLinks}, ref) => {
export default function NavDropDown ({titlesAndLinks, showNav}: NavDropdownProps){
    const navigate = useNavigate()
    const navigateHelper = (link: string) => {
        navigate(`/${link}`)
    }

    const animateBar = useAnimation()
    useEffect(() => {
        if (showNav) {
            animateBar.start((i) => ({
                y: 0,
                opacity: 1,
                transition: { delay: i * 0.05, duration: 0.3, ease: "easeOut" }
            }))
        }
    }, [showNav])

    return (
        <div className="flex flex-col justify-between mx-[1%] w-full">
            {titlesAndLinks.map((titleAndLink, key) => (
                <motion.div 
                    className={`
                        h-[35px] z-${key}
                        flex justify-center items-center border-b-1 border-zinc-200 bg-gray-50 hover:text-orange-500 active:bg-gray-300
                    `}
                    custom={key}
                    animate={animateBar}
                    initial={{y: -20, opacity:0}}
                    exit={{y: -20, opacity: 0, transition: { delay: 0.05*(titlesAndLinks.length - 1 - key), duration: 0.2, ease: "easeIn" }}}
                    key={key} onClick={() => navigateHelper(titleAndLink[1])}
                >
                    <h2>{titleAndLink[0]}</h2>
                </motion.div>
            ))}
        </div>
    )
}
// )

// export default NavDropDown