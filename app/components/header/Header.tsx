import React from "react";
import Link from "next/link";
import headerStyle from "./header.module.css";
console.log(headerStyle, "CSS-Style");

export default function Header () {
    return (
        <>
        <ul className={headerStyle.style}>
        <h1 className={headerStyle.h1}>LOGO</h1>
        <Link href="/">Home </Link>
        <Link href="/about">About </Link>
        <Link href="/contact">Contact </Link>
        <Link href="/service">Service </Link>
        </ul>
        </>
    );
}
