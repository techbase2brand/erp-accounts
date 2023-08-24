import React from "react";
import { Typography } from "antd";
import { Link } from "@remix-run/react";

const { Title } = Typography;
const menu = () => {
  return (
    <div className="menu-section-os">
      <Link to="/app" style={{textDecoration: "none"}}>
        <Title style={{color: "#fff"}} level={4}>Dashboard</Title>
      </Link>
      <Link to="/app/configuration" style={{textDecoration: "none"}}>
        <Title style={{color: "#fff"}} level={4}>Configurations</Title>
      </Link>
    </div>
  );
};

export default menu;
