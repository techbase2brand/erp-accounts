import React, { useState } from "react";
import {
  useActionData,
  useLoaderData,
  useNavigation,
  useSubmit,
  Link,
} from "@remix-run/react";
import {
  Layout,
  notification,
  Anchor,
  Button,
  Table,
  Tag,
  Space,
  Card,
  Typography,
} from "antd";

const dataList = () => {
  const [tabs, setTabs] = useState("tab-os-1");
  const columns = [
    {
      title: "Connection Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Ids",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Updated",
      key: "tags",
      dataIndex: "updated",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            return <Typography key={tag}>{tag}</Typography>;
          })}
        </>
      ),
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>
            Show
            {/* {record.name} */}
          </a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "Md Sahjad Ansari",
      id: 23,
      price: "20k",
      tags: ["3m ago"],
    },
    {
      key: "2",
      name: "Om Parkash",
      id: 25,
      price: "20k",
      tags: ["1h ago"],
    },
    {
      key: "3",
      name: "Vikash Sony",
      id: 28,
      price: "20k",
      tags: ["2h ago"],
    },
    {
      key: "4",
      name: "test",
      id: 12,
      price: "20k",
      tags: ["2h ago"],
    },
    {
      key: "5",
      name: "Test1",
      id: 13,
      price: "20k",
      tags: ["2h ago"],
    },
  ];

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
        </div>
      </Card>
      <Layout>
        <Layout.Content style={{ padding: "24px" }}>
          {tabs === "tab-os-1" && (
            <Card>
              <Table columns={columns} dataSource={data} />
            </Card>
          )}
          {tabs === "tab-os-2" && <Card>Currencies</Card>}
          {tabs === "tab-os-3" && <Card>Taxes</Card>}
          {tabs === "tab-os-4" && <Card>Attributes</Card>}
          {tabs === "tab-os-5" && <Card>Order/Invoices</Card>}
          {tabs === "tab-os-6" && <Card>Payment Methods</Card>}
          {tabs === "tab-os-7" && <Card>Accounts</Card>}
          {tabs === "tab-os-8" && <Card>Products</Card>}
          {tabs === "tab-os-9" && <Card>Stock/Inventory</Card>}
          {tabs === "tab-os-10" && <Card>Customers</Card>}
          {tabs === "tab-os-11" && <Card>Tyre Pricing</Card>}
        </Layout.Content>
      </Layout>
    </div>
  );
};

export default dataList;
