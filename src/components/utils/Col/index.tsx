import React from "react";
import { Col as AntdCol } from "antd";
import Props from "./type";

function Col({ col, cols, children }: Props) {
  return (
    <AntdCol span={col} xs={cols?.xs} sm={cols?.sm} md={cols?.md} lg={cols?.lg}>
      {children}
    </AntdCol>
  );
}

export default Col;
