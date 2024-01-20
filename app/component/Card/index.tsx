import Link from "next/link";
import styles from "./index.module.scss";
import Button from "../Button/index";

type TProps = {
  cardIndex: number;
  xianColor?: "syntax" | "learning-track";

  theme: {
    title: string;
    tagList: string[];
  };
  notes?: string;
  footer?:
    | {
        isHideCompleted: boolean;
      }
    | false;
  list?: {
    leftFont: string;
    rightFont: string;
  }[];
};
const Card1 = (props: TProps) => {
  const {
    cardIndex,
    xianColor,
    theme,
    notes,
    list,
    footer = { isHideCompleted: false },
  } = props;
  return (
    <>
      <div className={styles.cardLayout}>
        <div
          className={styles.cardHover}
          style={{
            backgroundImage: `url('/card${cardIndex}Hover.svg')`,
          }}
        ></div>
        <div
          className={styles.card}
          style={{
            backgroundImage: `url('/card${cardIndex}.svg')`,
          }}
        >
          {!!xianColor && (
            <div
              style={{
                background: `var(--Gradiant-gradiant---${xianColor})`,
              }}
              className={styles.xian}
            ></div>
          )}

          <div className={styles.theme}>
            <div className={styles.programming}>{theme.title}</div>
            {theme.tagList.map((item) => (
              <Button key={item}>{item}</Button>
            ))}
            {!!notes && <div className={styles.notes}>{notes}</div>}
          </div>

          {!!list && (
            <div className={styles.list}>
              {list.map((item, index) => (
                <div className={styles.row} key={index}>
                  <span className={styles.left}>{item.leftFont}</span>
                  <span className={styles.right}>{item.rightFont}</span>
                </div>
              ))}
            </div>
          )}

          {!!footer && (
            <div className={styles.footer}>
              <div className={styles.box}>
                <img src="/time.svg" />
                36 Hour
              </div>
              <div className={styles.box}>
                <img src="/book.svg" />5 course
              </div>

              {!footer?.isHideCompleted && (
                <div className={styles.completed}>
                  <img src="/Group.svg" />
                  <span className={styles.text}>45% COMPLETED</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Card1;
