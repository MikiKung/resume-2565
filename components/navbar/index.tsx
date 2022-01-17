import classes from "./index.module.scss"
import React, { useState } from "react"
import Link from 'next/link'


export default function Navbar() {
    return <div className={classes.main}>
        {/* <div className={classes.nav}> */}
            <Link href='#Recommend' ><span className={classes.item} >Recommand</span></Link>
            <Link href={'#Education'}><span className={classes.item}>Education</span></Link>
            <span className={classes.item}>skill</span>
            <span className={classes.item}>project</span>
        {/* </div> */}
    </div>
}