import { useLayoutEffect, useState } from "react"

export function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth)

    useLayoutEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return width
}
