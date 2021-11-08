import React, { useEffect, useState } from "react";
import './ScrollToTop.css';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUpTwoTone';


export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(window.pageYOffset > 300)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="scroll-to-top">
            {
                isVisible && <div onClick={scrollToTop}>
                    <ArrowCircleUpIcon className="arrow-icon" sx={{ fontSize: 70 }} ></ArrowCircleUpIcon>
                </div>
            }
        </div>
    );
}
