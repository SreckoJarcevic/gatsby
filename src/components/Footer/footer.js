import React from "react"
import { Link } from "gatsby"
import EzdermInfo from "./ezdermInfo"
import styles from "./footer.module.css"

export default function footer({ isGray }) {
  return (
    <div className={isGray && styles.Container}>
      <div className={styles.Footer}>
        <EzdermInfo />
        <div className={styles.Right}>
          <div>
            <h2>PRODUCTS</h2>
            <ul>
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
          </div>
          <div>
            <h2>ABOUT</h2>
            <ul>
              <li>
                <Link to="careers">CAREERS</Link>
              </li>
              <li>
                <Link to="privacy">PRIVACY</Link>
              </li>
              <li>
                <Link to="contact">CONTACT US</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>ACCOUNT</h2>
            <ul>
              <li>
                <a
                  href="https://pms.ezderm.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LOGIN
                </a>
              </li>
              <li>
                <a
                  href="https://ezderm.zendesk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SUPPORT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className={styles.Copyright}>
        Designed with Love in the USA <img src="us_flag.png" alt="USA flag" />
        Copyright © 2019
      </p>
    </div>
  )
}
