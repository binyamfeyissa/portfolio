"use client";
import styles from "./style.module.scss";
import { useState, useEffect, useRef } from "react";
import Project from "./components/project";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import Rounded from "../../common/RoundedButton";

const projects = [
  {
    title: "Bono",
    src: "bono.png",
    desc: "A restaurant managment system that is actively running inside a cafe",
    color: "#000000",
    link: "bono",
  },
  {
    title: "PVS",
    src: "pvss.png",
    desc: "A payment verification mobile app that integrates API's like CBE Birr and Telebirr",
    color: "#8cd965",
    link: "pvs",
  },
  {
    title: "Tera",
    src: "tera.png",
    desc: "A prcel locker company that is based in Addis Ababa that is still under development",
    color: "#EFE8D3",
    link: "tera",
  },
  {
    title: "Negus",
    src: "neguss.png",
    desc: "A 3d Website concept for Negus Malt",
    color: "#706D63",
    link: "negus",
  },
  {
    title: "Mela",
    src: "mela.png",
    desc: "A 3d Website concept for Negus Malt",
    color: "#706D63",
    link: "mela",
  },
  {
    title: "Sergegna Events",
    src: "event.png",
    desc: "A wedding attendie managment system, ticketing system.",
    color: "#706D63",
    link: "serategna",
  },
  {
    title: "Wedding thank you website",
    src: "betty.png",
    desc: "A platform where attendies can upload and download wedding pictures",
    color: "#706D63",
    link: "wedding",
  },
  {
    title: "Gebeya",
    src: "gebeya.png",
    desc: "An e-commerce platform where users can shop",
    color: "#706D63",
    link: "gebeya",
  },
  {
    title: "La vie en Rose",
    src: "la.png",
    desc: "A restaurant website",
    color: "#706D63",
    link: "la",
  },
  {
    title: "Yeshitila Investment group",
    src: "yig.png",
    desc: "A restaurant website",
    color: "#706D63",
    link: "yeshitila",
  },
  {
    title: "Emmas rostery",
    src: "emmas.png",
    desc: "A restaurant website",
    color: "#706D63",
    link: "emmas",
  },
  {
    title: "Kandake Beauty",
    src: "kandake.png",
    desc: "A restaurant website",
    color: "#706D63",
    link: "kandake",
  },
];

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x, y) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };
  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <main
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className={styles.projects}
    >
      <div className={styles.body}>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              desc={project.desc}
              manageModal={manageModal}
              key={index}
            />
          );
        })}
      </div>
      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className={styles.modalContainer}
        >
          <div
            style={{ top: index * -100 + "%" }}
            className={styles.modalSlider}
          >
            {projects.map((project, index) => {
              const { src, color } = project;
              return (
                <div
                  className={styles.modal}
                  style={{ backgroundColor: color }}
                  key={`modal_${index}`}
                >
                  <Image
                    src={`/images/${src}`}
                    width={300}
                    height={0}
                    alt="image"
                  />
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          ref={cursor}
          className={styles.cursor}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        ></motion.div>
        <motion.div
          ref={cursorLabel}
          className={styles.cursorLabel}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        >
          View
        </motion.div>
      </>
    </main>
  );
}
