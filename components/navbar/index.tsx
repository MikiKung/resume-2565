import classes from "./index.module.scss"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return <div className={classes.main}>
        <div className={classes.grid}>
            <span className={classes.item}></span>
            <span className={classes.item} >เเนะนำตัว</span>
            <span className={classes.item}>ประวัติการศึกษา</span>
            <span className={classes.item}>Framework</span>
            <span className={classes.item}>ผลงาน</span>
        </div>
        <div className={classes.Navbar}>
            <FontAwesomeIcon icon={faBars} className={classes.NavbarResponsive} />
        </div>

    </div>
}