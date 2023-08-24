import React, { useState } from "react";
import { Layout, Button, Card } from "antd";
import Stores from "./components/configurations/stores";
import Currencies from "./components/configurations/currencies";
import Taxes from "./components/configurations/taxes";
import Attributes from "./components/configurations/Attributes";
import Paymentmethods from "./components/configurations/paymentmethods";
import Products from "./components/configurations/products";
import Customers from "./components/configurations/customers";
import Categories from "./components/configurations/categories";

const dataList = () => {
  const [tabs, setTabs] = useState("tab-os-1");

  const handleTabData = (value) => {
    setTabs(value);
    // console.log("valuessss", value)
  };

  return (
    <div>
      <Card style={{ margin: "24px 24px 0" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem 1.5rem",
            flexWrap: "wrap",
          }}
        >
          <Button
            style={{
              color: tabs === "tab-os-1" ? "#1677ff" : "",
            }}
            onClick={() => {
              handleTabData("tab-os-1");
            }}
          >
            Stores
          </Button>
          <Button
            style={{
              color: tabs === "tab-os-2" ? "#1677ff" : "",
            }}
            onClick={() => {
              handleTabData("tab-os-2");
            }}
          >
            Currencies
          </Button>
          <Button
            style={{
              color: tabs === "tab-os-3" ? "#1677ff" : "",
            }}
            onClick={() => {
              handleTabData("tab-os-3");
            }}
          >
            Taxes
          </Button>
          <Button
            style={{
              color: tabs === "tab-os-4" ? "#1677ff" : "",
            }}
            onClick={() => {
              handleTabData("tab-os-4");
            }}
          >
            Attributes
          </Button>
          <Button
            style={{
              color: tabs === "tab-os-5" ? "#1677ff" : "",
            }}
            onClick={() => {
              handleTabData("tab-os-5");
            }}
          >
            Order/Invoices
          </Button>
          <Button
            style={{
              color: tabs === "tab-os-6" ? "#1677ff" : "",
            }}
            onClick={() => {
              handleTabData("tab-os-6");
            }}
          >
            Payment Methods
          </Button>
          <Button
            style={{
              color: tabs === "tab-os-7" ? "#1677ff" : "",
            }}
            onClick={() => {
              handleTabData("tab-os-7");
            }}
          >
            Accounts
          </Button>
          <Button
            style={{
              color: tabs === "tab-os-8" ? "#1677ff" : "",
            }}
            onClick={() => {
              handleTabData("tab-os-8");
            }}
          >
            Products
          </Button>
          <Button
            style={{
              color: tabs === "tab-os-9" ? "#1677ff" : "",
            }}
            onClick={() => {
              handleTabData("tab-os-9");
            }}
          >
            Stock/Inventory
          </Button>
          <Button
            style={{
              color: tabs === "tab-os-10" ? "#1677ff" : "",
            }}
            onClick={() => {
              handleTabData("tab-os-10");
            }}
          >
            Customers
          </Button>
          <Button
            style={{
              color: tabs === "tab-os-11" ? "#1677ff" : "",
            }}
            onClick={() => {
              handleTabData("tab-os-11");
            }}
          >
            Tyre Pricing
          </Button>
          <Button
            style={{
              color: tabs === "tab-os-12" ? "#1677ff" : "",
            }}
            onClick={() => {
              handleTabData("tab-os-12");
            }}
          >
            Categories
          </Button>
        </div>
      </Card>
      <Layout>
        <Layout.Content style={{ padding: "24px" }}>
          <Card>
            {tabs === "tab-os-1" && <Stores />}
            {tabs === "tab-os-2" && <Currencies />}
            {tabs === "tab-os-3" && <Taxes />}
            {tabs === "tab-os-4" && <Attributes />}
            {tabs === "tab-os-5" && "Order/Invoices"}
            {tabs === "tab-os-6" && <Paymentmethods />}
            {tabs === "tab-os-7" && "Accounts"}
            {tabs === "tab-os-8" && <Products />}
            {tabs === "tab-os-9" && "Stock/Inventory"}
            {tabs === "tab-os-10" && <Customers />}
            {tabs === "tab-os-11" && "Tyre Pricing"}
            {tabs === "tab-os-12" && <Categories />}
          </Card>
        </Layout.Content>
      </Layout>
    </div>
  );
};

export default dataList;
