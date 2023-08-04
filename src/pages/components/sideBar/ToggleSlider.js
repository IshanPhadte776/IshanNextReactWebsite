import React, { useState } from "react";
import styles from "./ToggleSlider.module.css";

function ToggleSlider(props) {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);

    if (!isToggled) {
      props.onLanguageChange("Francais");
    } else {
      props.onLanguageChange("English");
    }
  };

  return (
    <div className={styles.toggleSliderText} onClick={handleToggle}>
      <div className={styles.toggleSliderSwitch}>
        <div className={styles.toggleSliderSwitchKnob} style={{marginLeft: isToggled ? '40px' : '0'}}></div>
      </div>
      <div className={styles.toggleSliderLabel}>{isToggled ? "English" : "Francais"}  </div>
    </div>
  );
}

export default ToggleSlider;
