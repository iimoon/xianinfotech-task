import React, { useState } from "react";
import styles from "./styles/sidebar.module.css";
import virton from "../../assets/logo/virton.png";
import logoutIcon from "../../assets/icons/logout.png";

const Sidebar = () => {
  const [selected, setSelected] = useState("User List"); // Default selected menu item

  const handleSelection = (menuItem) => {
    setSelected(menuItem);
  };

  return (
    <div className={styles.sidebar}>
      <img src={virton} className={styles.logo} alt="Virton Logo" />
      <ul className={styles.menu}>
        {[
          "User List",
          "Transaction List",
          "Video Management",
          "Top Receivers List",
          "Logout",
        ].map((item) => (
          <li
            key={item}
            className={selected === item ? styles.active : ""}
            onClick={() => handleSelection(item)}
          >
            {item === "Logout" && (
              <img
                src={logoutIcon}
                alt="Logout Icon"
                className={styles.logoutIcon}
              />
            )}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
