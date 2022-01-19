import classes from './index.module.scss'
import React, { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
  const [click, setClick] = useState(true)

  function tapCheck() {
    setClick(!click)
  }
  return (
    <div>
      <div className={classes.main}>
        <Link href="#Recommend">
          <span className={classes.item}>Recommand</span>
        </Link>
        <Link href="#Skill">
          <span className={classes.item}>Skill</span>
        </Link>
        <Link href="#Project">
          <span className={classes.item}>Project</span>
        </Link>
        <Link href="#Experience">
          <span className={classes.item}>Experience</span>
        </Link>
        <Link href="#Contact">
          <span className={classes.item}>Contact</span>
        </Link>
      </div>
      <div className={classes.mainRes}>
        {click ? (
          <FontAwesomeIcon
            onClick={tapCheck}
            className={classes.iconBars}
            icon={['fas', 'bars']}
          />
        ) : (
          <div className={classes.allLink}>
            <Link href="#Recommend">
              <span onClick={tapCheck} className={classes.item}>
                Recommand
              </span>
            </Link>
            <Link href="#Skill">
              <span onClick={tapCheck} className={classes.item}>
                Skill
              </span>
            </Link>
            <Link href="#Project">
              <span onClick={tapCheck} className={classes.item}>
                Project
              </span>
            </Link>
            <Link href="#Experience">
              <span onClick={tapCheck} className={classes.item}>
                Experience
              </span>
            </Link>
            <Link href="#Contact">
              <span onClick={tapCheck} className={classes.item}>
                Contact
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
