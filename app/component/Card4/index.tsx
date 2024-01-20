import styles from "./index.module.scss";

const Card4 = () => {
  return (
    <>
      <div className={styles.cardLayout}>
        <div className={styles.cardHover}></div>
        <div className={styles.card}>
          <div className={styles.top}>
            <div className={styles.left}>
              <div className={styles.xian}></div>

              <div className={styles.programming}>What is Bitcoin</div>
            </div>
            <div className={styles.right} />
          </div>
          <div className={styles.footer}>
            <div className={styles.box}>
              <img src="/time.svg" />
              36 Hour
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card4;
