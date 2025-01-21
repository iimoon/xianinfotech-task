import styles from "./styles/footer.module.css";
import logo from "../assets/logo/nexus.png";
import fb from "../assets/icons/fb.png";
import instagram from "../assets/icons/instagram.png";
import linkedin from "../assets/icons/linkedin.png";
import skype from "../assets/icons/skype.png";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerTopSection}>
        <div className={styles.footerLogo}>
          <img src={logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
            eligendi, voluptatibus deleniti ipsum officiis alias ex impedit.
          </p>
        </div>
        <div className={styles.importantLinks}>
            <h1>Important links</h1>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
        </div>
        <div className={styles.iconsSection}>
            <p>Terms & Conditions</p>
            <p>Contact Support</p>
            <div className={styles.iconsContainer}>
                <img src={fb} alt="facebook" />
                <img src={instagram} alt="instagram" />
                <img src={linkedin} alt="linkedin" />
                <img src={skype} alt="skype" />
            </div>
        </div>  
      </div>
        <div className={styles.divider}></div>
      <div className={styles.Copyright}>
        <p>Copyright 2025. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
