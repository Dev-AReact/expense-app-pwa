"use client"

import { Form } from "antd";
import React from "react";
import Props from "./type";

function FormGroup({ label, children }: Props) {
  return <Form.Item label={label}>{children}</Form.Item>;
}

export default FormGroup;
