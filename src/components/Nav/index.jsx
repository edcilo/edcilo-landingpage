import styles from "./styles.module.scss";
import { useState } from "react";

export default function Nav({ items }) {
  const [show, setShow] = useState(false);
  const logo_light = "https://storage.edcilo.com/edcilo-logo-clear.svg";
  const logo_dark = "https://storage.edcilo.com/edcilo-logo-dark.svg";

  return (
    <>
      <button
        className={`secondary outline ${styles["nav-btn"]}`}
        onClick={() => setShow(true)}
      >
        🍔
      </button>

      <div
        className={`${styles["nav-layer"]} ${
          show ? styles["nav-layer-visible"] : styles["nav-layer-hidden"]
        }`}
        onClick={() => setShow(false)}
      />
      <nav
        className={`${styles["nav-container"]} ${
          show
            ? styles["nav-container-visible"]
            : styles["nav-container-hidden"]
        }`}
      >
        <div className={styles["nav-header"]}>
          <button
            className={`secondary outline ${styles["close-btn"]}`}
            onClick={() => setShow(false)}
          >
            ⇠
          </button>
          <picture className={styles["nav-picture"]}>
            <source srcSet={logo_light} media="(prefers-color-scheme: dark)" />
            <img src={logo_dark} width="80px" height="25px" />
          </picture>
          <span className={styles["nav-header-blank"]}>&nbsp;</span>
        </div>

        <ul className={styles["nav-list"]}>
          {items.map((item) => (
            <li className={styles["nav-list-item"]} key={item.id}>
              <a
                className={styles["nav-list-item-link"]}
                href={item.url}
                onClick={() => setShow(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <svg
          className={styles["nav-svg"]}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#AFC89A"
            fillOpacity="1"
            d="M0,192L80,213.3C160,235,320,277,480,293.3C640,309,800,299,960,266.7C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </nav>
    </>
  );
}
