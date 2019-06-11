import React, { useEffect, useState } from "react"
import { Link, navigate } from "gatsby"

//search data
import main1 from "../Welcome/data"
import main2 from "../Products/data"
import main3 from "../Why/data"
import * as ehrSides from "../EHR/data"
import * as pmsSides from "../PMS/data"
import * as kioskSides from "../KIOSK/data"
import * as portalSides from "../PORTAL/data"
import careers from "../Careers/data"
import contact from "../ContactUs/data"
import privacy from "../Privacy/data"

import styles from "./header.module.css"
import ShortMenu from "./shortMenu"
import Nav from "./nav"

careers.link = "/careers"
contact.link = "/contact"
privacy.link = "/privacy"
const main = [...main1, ...main2, ...main3]
main.link = "/"
const ehr = [...ehrSides.left, ...ehrSides.right]
ehr.link = "/ehr"
const pms = [...pmsSides.left, ...pmsSides.right]
pms.link = "/pms"
const kiosk = [...kioskSides.left, ...kioskSides.right]
kiosk.link = "/check-in-kiosk"
const portal = [...portalSides.left, ...portalSides.right]
portal.link = "/patient-portal"

const searchBundle = [main, ehr, pms, kiosk, portal, careers, contact, privacy]

export default function header() {
  const { width } = useWindowSize()

  function handleSearch(event) {
    if (event.key !== "Enter") return
    const { value } = event.target
    if (value === " " || !value) return
    let currentLink = ""
    const regex = new RegExp(value, "i")
    let results = []

    searchBundle.forEach(page => {
      currentLink = page.link
      page.forEach(part => {
        for (let property in part) {
          if (property !== "img" || property !== "icon") {
            const matching = part[property].match(regex)
            if (matching) {
              matching.link = currentLink
              results.push(matching)
            }
          }
        }
      })
    })

    const groupedResult = results.reduce((acc, match) => {
      if (acc[match.link]) {
        acc[match.link].push(match.input)
      } else {
        acc[match.link] = [match.input]
      }
      return acc
    }, {})

    navigate("/search", { state: { groupedResult, value } })
  }

  return (
    <div className={styles.Container}>
      {width < 900 && <ShortMenu />}
      <Link to="/" className={styles.Logo}>
        <img src={"EZderm.png"} alt="Logo" />
      </Link>
      {width > 900 && <Nav />}
      <input
        className={styles.Input}
        placeholder="...search"
        onKeyDown={handleSearch}
      />
    </div>
  )
}

function useWindowSize() {
  const isClient = typeof window === "object"

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return false
    }

    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize
}
