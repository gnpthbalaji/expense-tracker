import { useEffect, useState } from "react";



export const useFullscreen = () => {
    const [size, setSize] = useState([0, 0]);
    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return {
        width: size[0],
        height: size[1]
    }
};