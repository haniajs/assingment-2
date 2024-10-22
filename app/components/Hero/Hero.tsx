import React from "react";
import heroStyle from "./hero.module.css";
console.log(heroStyle, "CSS-Style");

export default function Hero() {
    return (
        <div className={heroStyle.style}>
            <h1><b>This is a hero section</b></h1>
        </div>
    )
}
