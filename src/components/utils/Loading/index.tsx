import React from "react";
import { Spin } from "antd";
import styles from "./style.module.css";
import Props from "./type";

function Loading({fullScreen} : Props) {
  return (
    <div className={`${fullScreen ? styles.container : ""}`}>
      <Spin />
    </div>
  );
}

export default Loading;
