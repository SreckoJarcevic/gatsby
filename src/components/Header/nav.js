import React, { useEffect, useRef } from "react"
import styles from "./header.module.css"
import { Link } from "gatsby"

const Nav = ({ hideNavForShortMenu }) => {
  const ref = useRef()

  if (hideNavForShortMenu)
    useOnClickOutside(ref, () => hideNavForShortMenu(false))

  return (
    <div className={styles.Nav} ref={ref}>
      <span className={styles.Dropdown}>
        <button className={styles.DropButton}>PRODUCTS</button>
        <ul className={styles.DropdownMenu}>
          <li>
            <Link to="ehr">EHR</Link>
          </li>
          <li>
            <Link to="pms">PMS</Link>
          </li>
          <li>
            <Link to="check-in-kiosk">CHECK-IN KIOSK</Link>
          </li>
          <li>
            <Link to="patient-portal">PATIENT PORTAL</Link>
          </li>
        </ul>
      </span>
      <Link to="why-ezderm" className={styles.Links}>
        WHY EZDERM?
      </Link>
      <a
        className={styles.Links}
        href="https://ezderm.zendesk.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        SUPPORT
      </a>
      <a
        className={styles.Links}
        href="https://pms.ezderm.com/login"
        target="_blank"
        rel="noopener noreferrer"
      >
        LOGIN
      </a>
    </div>
  )
}

export default Nav

function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = event => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }

        handler(event)
      }

      document.addEventListener("mousedown", listener)
      document.addEventListener("touchstart", listener)

      return () => {
        document.removeEventListener("mousedown", listener)
        document.removeEventListener("touchstart", listener)
      }
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  )
}
