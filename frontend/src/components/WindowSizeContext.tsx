import { createContext, useState, useEffect } from 'react'

export const WindowSizeContext = createContext({
  width: window.innerWidth,
  height: window.innerHeight,
  mobileLimit: 500
}) 


export function WindowSizeProvider({ children } : any) {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    mobileLimit: 500
  }) 

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
        mobileLimit: 500
      }) 
    } 

    window.addEventListener("resize", handleResize) 

    // Cleanup
    return () => window.removeEventListener("resize", handleResize) 
  }, []) 

  return (
    <WindowSizeContext.Provider value={size}>
      {children}
    </WindowSizeContext.Provider>
  ) 
}