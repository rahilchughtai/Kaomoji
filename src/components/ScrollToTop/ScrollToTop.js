import React, { useEffect, useState } from "react";
import './ScrollToTop.css';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUpTwoTone';


export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scorlled upto given distance
    const toggleVisibility = () => {
        console.log("scroll scroll")
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
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
                    <ArrowCircleUpIcon color="primary" sx={{ fontSize: 70 }} className="arrow-up"  ></ArrowCircleUpIcon>
                </div>
            }
        </div>
    );
}
