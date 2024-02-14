import styles from "./display.module.css";

const Display = ({ displayValue }) => {
  return (
    <input
      className={styles.display}
      type="text"
      placeholder="Enter value"
      value={displayValue}
      readOnly
    />
  );
};

export default Display;
