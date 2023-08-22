import React from "react";
import { Typography } from "antd";
import { Link } from "@remix-run/react";

const { Title } = Typography;
const menu = () => {
  return (
    <div className="menu-section-os">
      <Link to="/app" style={{textDecoration: "none"}}>
        <Title style={{color: "#fff"}} level={5}>Dashboard</Title>
      </Link>
      <Link to="/app" style={{textDecoration: "none"}}>
        <Title style={{color: "#fff"}} level={5}>My Connections</Title>
      </Link>
      <Link to="/app/dataList" style={{textDecoration: "none"}}>
        <Title style={{color: "#fff"}} level={5}>Data</Title>
      </Link>
    </div>
  );
};

export default menu;
