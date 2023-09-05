import React from "react";
import Props from "./type";
import { Button as Btn } from "antd";

function Button({ variant = "default", children }: Props) {
  return (
    <>
      {variant === "primary" && <Btn type="primary">{children}</Btn>}
      {variant === "default" && <Btn type="default">{children}</Btn>}
      {variant === "danger" && (
        <Btn type="primary" danger>
          {children}
        </Btn>
      )}
    </>
  );
}

export default Button;
