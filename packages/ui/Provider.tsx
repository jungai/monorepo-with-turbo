import React from "react";
import { ConfigProvider } from "antd";

import "antd/dist/antd.css";

export const Provider: React.FC = ({ children }) => {
  return <ConfigProvider direction="rtl">{children}</ConfigProvider>;
};
