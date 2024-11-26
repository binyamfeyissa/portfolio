"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "../Header"; // Adjust the import path as necessary
import "./style.css";

const ProjectDetail = ({ project }) => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container">
      <Header customClass="project-details-header" /> {/* Pass custom class */}
      <main className="main">
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {project.title}
        </motion.h1>

        <motion.div
          className="project-info"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <div className="info-column">
            <h3>Role / Services</h3>
            <div class="stripe"></div>
            <p>{project.role}</p>
            <p>Design: </p>
            <p>Photography: {project.photographer}</p>
          </div>
          <div className="info-column">
            <h3>Description</h3>
            <div class="stripe"></div>
            <p>{project.desc}</p>
          </div>
          <div className="info-column">
            <h3>Tech Stack</h3>
            <div class="stripe"></div>
            <p>{project.tech}</p>
          </div>
        </motion.div>
        <motion.div
          className="project-infoo"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <div className="info-column">
            <h3>Description</h3>
            <div class="stripe"></div>
            <p>{project.description}</p>
          </div>
        </motion.div>

        <motion.div
          className="laptop-mockup"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Image
            src={`/images/${project.src}`}
            alt={`${project.title} website mockup on laptop`}
            width={1000}
            height={600}
          />
        </motion.div>

        {/* <div className="mobile-screens">
          {project.mobileScreens.map((screen, index) => (
            <motion.div
              key={index}
              className="mobile-screen"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src={screen}
                alt={`${project.title} mobile screen ${index + 1}`}
                width={300}
                height={600}
              />
            </motion.div>
          ))}
        </div> */}
      </main>
      <footer className="footer">
        <div className="footer-content">
          <h2 className="footer-title">FABRIC™</h2>
          <div className="footer-grid">
            <div className="footer-column">
              <h3>Edition</h3>
              <p>{project.year} © Edition</p>
            </div>
            <div className="footer-column">
              <h3>Local Time</h3>
              <p>15:07 AM GMT+1</p>
            </div>
            <div className="footer-column">
              <h3>Socials</h3>
              <div className="socials">
                <p>Awwwards</p>
                <p>Instagram</p>
                <p>Dribbble</p>
                <p>LinkedIn</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <button className="like-button">
        View <br /> Project
      </button>
    </div>
  );
};

export default ProjectDetail;
