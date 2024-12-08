"use client";
import React from "react";
import styles from "./style.module.scss";

export default function index({ index, href, title, desc, manageModal }) {
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      onClick={() => {
        window.location.href = href;
      }}
      className={styles.project}
    >
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <p>Design & Development</p>
    </div>
  );
}
