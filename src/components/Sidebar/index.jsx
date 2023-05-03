import styles from "./Sidebar.module.scss";

const Sidebar = ({ active, setActive }) => {
  const tabs = [
    { num: 1, name: "your info" },
    { num: 2, name: "select plan" },
    { num: 3, name: "add-ons" },
    { num: 4, name: "summary" },
  ];

  return (
    <section className={styles.sidebar}>
      <div className={styles.tabs}>
        {tabs.map((num, index) => (
          <div
            key={index}
            className={styles.tab}
            onClick={() => setActive(num.num)}
          >
            <div
              className={
                active === num.num
                  ? `${styles.active} ${styles.circle}`
                  : styles.circle
              }
            >
              <p> {num.num}</p>
            </div>
            <div className={styles.details}>
              <h4>STEP {num.num}</h4>
              <h5>{num.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sidebar;