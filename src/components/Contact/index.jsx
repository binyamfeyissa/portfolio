import styles from "./style.module.scss";
import Image from "next/image";
import Rounded from "../../common/RoundedButton";
import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import Magnetic from "../../common/Magnetic";
import Link from "next/link";

export default function Contact() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  return (
    <motion.div
      style={{ y }}
      ref={container}
      className={styles.contact}
      id="footer"
    >
      <div className={styles.body}>
        <div className={styles.title}>
          <span>
            <div className={styles.imageContainer}>
              <Image fill={true} alt={"image"} src={`/images/pp.png`} />
            </div>
            <h2>Let&apos;s work</h2>
          </span>
          <h2>together</h2>
          <motion.div style={{ x }} className={styles.buttonContainer}>
            <Link href={`https://www.linkedin.com/in/binyam-feyissa`}>
              <Rounded backgroundColor={"#334BD3"} className={styles.button}>
                <p>Get in touch</p>
              </Rounded>
            </Link>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <div className={styles.nav}>
          <Link href={`mailto:binyam.feyissa.gudina@gmail.com`}>
            <Rounded>
              <p>binyam.feyissa.gudina@gmail.com</p>
            </Rounded>
          </Link>
          <Link href={`tel:+251967933981`}>
            <Rounded>
              <p>+251-967933981</p>
            </Rounded>
          </Link>
        </div>
        <div className={styles.info}>
          <div>
            <span>
              <h3>Version</h3>
              <p>2024 © Edition</p>
            </span>
          </div>
          <div>
            <span>
              <h3>socials</h3>
              <Magnetic>
                <Link href={`https://www.linkedin.com/in/binyam-feyissa`}>
                  <p>Linkedin</p>
                </Link>
              </Magnetic>
            </span>
            <Magnetic>
              <Link href={`https://wa.me/251967933981`}>
                <p>Whatsapp</p>
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href={`https://t.me/immigrant_from_pluto`}>
                <p>Telegram</p>
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href={`https://github.com/binyamfeyissa/`}>
                <p>GitHub</p>
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
