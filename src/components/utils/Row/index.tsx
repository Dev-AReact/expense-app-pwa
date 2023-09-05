import React from "react";
import Props from "./type";
import { Row as AntdRow } from "antd";

function Row({ children }: Props) {
  return <AntdRow>{children}</AntdRow>;
}

export default Row;
