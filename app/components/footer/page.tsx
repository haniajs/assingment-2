import React from "react";
import footerStyle from "./footer.module.css";
console.log(footerStyle, "CSS-Style");

export default function Footer() {
    return (
        <div className={footerStyle.style}>
            <h1>Hania | All right reserved 2024</h1>
        </div>
    );
}