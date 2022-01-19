import classes from "./index.module.scss"
import React, { useState } from "react"
import Link from 'next/link'


export default function Navbar() {
    return <div className={classes.main}>
        {/* <div className={classes.nav}> */}
            <Link href='#Recommend' ><span className={classes.item} >Recommand</span></Link>
            <Link href='#Skill'><span className={classes.item}>Skill</span></Link>
            <Link href='#Project'><span className={classes.item}>Project</span></Link>
            <Link href='#Experience'><span className={classes.item}>Experience</span></Link>
            <Link href='#Contact'><span className={classes.item}>Contact</span></Link>
        {/* </div> */}
    </div>
}