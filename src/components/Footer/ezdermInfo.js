import React from "react"
import styles from "./footer.module.css"

const ezdermInfo = ({ fromContactPage }) => {
  function handlePhoneCall() {
    window.open(
      "https://acctmgr.evoice.com/ACCTMGR/ClickToCall/ClickToConnectSession.aspx?key=d4e7060a-a5e7-418b-9aeb-fd5224fe4b3d",
      "",
      "width=570,height=280, left=40, top=100, resizable=no,scroll=yes,status=no,titlebar=no,toolbar=no,addressbar=no,copyhistory=no,navigationtoolbar=no"
    )
  }

  return (
    <div
      className={`${styles.Left} ${!fromContactPage && styles.LeftForFooter}`}
    >
      <div className={styles.LogoContainer}>
        {fromContactPage ? (
          <h2>CONTACT US</h2>
        ) : (
          <img src="ezLogo.png" alt="Ezderm logo" />
        )}
      </div>
      <p>EZDERM, LLC</p>
      <p>9128 Strada Place</p>
      <p>Naples, FL 34108</p>
      <p>(877) 443-9337</p>
      <div className={styles.ButtonWrap}>
        <button className={styles.Button} onClick={handlePhoneCall}>
          <i className={`fas fa-phone ${styles.PhoneIcon}`} /> CLICK TO CALL
        </button>
      </div>
    </div>
  )
}

export default ezdermInfo
