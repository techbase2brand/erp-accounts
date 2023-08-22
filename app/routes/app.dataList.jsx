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
    {
      key: "6",
      name: "Vikash Sony",
      id: 28,
      price: "20k",
      tags: ["2h ago"],
    },
    {
      key: "7",
      name: "Md Sahjad Ansari",
      id: 23,
      price: "20k",
      tags: ["3m ago"],
    },
    {
      key: "8",
      name: "Om Parkash",
      id: 25,
      price: "20k",
      tags: ["1h ago"],
    },
    {
      key: "9",
      name: "Vikash Sony",
      id: 28,
      price: "20k",
      tags: ["2h ago"],
    },
    {
      key: "10",
      name: "test",
      id: 12,
      price: "20k",
      tags: ["2h ago"],
    },
    {
      key: "11",
      name: "Test1",
      id: 13,
      price: "20k",
      tags: ["2h ago"],
    },
    {
      key: "12",
      name: "Vikash Sony",
      id: 28,
      price: "20k",
      tags: ["2h ago"],
    },
    {
      key: "13",
      name: "Md Sahjad Ansari",
      id: 23,
      price: "20k",
      tags: ["3m ago"],
    },
    {
      key: "14",
      name: "Om Parkash",
      id: 25,
      price: "20k",
      tags: ["1h ago"],
    },
    {
      key: "15",
      name: "Vikash Sony",
      id: 28,
      price: "20k",
      tags: ["2h ago"],
    },
    {
      key: "16",
      name: "test",
      id: 12,
      price: "20k",
      tags: ["2h ago"],
    },
    {
      key: "17",
      name: "Test1",
      id: 13,
      price: "20k",
      tags: ["2h ago"],
    },
    {
      key: "18",
      name: "Vikash Sony",
      id: 28,
      price: "20k",
      tags: ["2h ago"],
    },
    {
      key: "19",
      name: "Md Sahjad Ansari",
      id: 23,
      price: "20k",
      tags: ["3m ago"],
    },
    {
      key: "20",
      name: "Om Parkash",
      id: 25,
      price: "20k",
      tags: ["1h ago"],
    },
    {
      key: "21",
      name: "Vikash Sony",
      id: 28,
      price: "20k",
      tags: ["2h ago"],
    },
    {
      key: "22",
      name: "test",
      id: 12,
      price: "20k",
      tags: ["2h ago"],
    },
    {
      key: "23",
      name: "Test1",
      id: 13,
      price: "20k",
      tags: ["2h ago"],
    },
    {
      key: "24",
      name: "Vikash Sony",
      id: 28,
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
      <Card>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem 1.5rem",
            flexWrap: "wrap",
          }}
        >
          <Typography
            level={5}
            style={{
              margin: "0",
              cursor: "pointer",
              color: tabs === "tab-os-1" ? "#1677ff" : "",
            }}
            onClick={() => {
              handleTabData("tab-os-1");
            }}
          >
            Attribute
          </Typography>
          <Typography
            level={5}
            style={{
              margin: "0",
              cursor: "pointer",
              color: tabs === "tab-os-2" ? "#1677ff" : "",
            }}
            onClick={() => {
              handleTabData("tab-os-2");
            }}
          >
            Category
          </Typography>
          <Typography
            level={5}
            style={{
              margin: "0",
              cursor: "pointer",
              color: tabs === "tab-os-3" ? "#1677ff" : "",
            }}
            onClick={() => {
              handleTabData("tab-os-3");
            }}
          >
            Currency
          </Typography>
          <Typography
            level={5}
            style={{
              margin: "0",
              cursor: "pointer",
              color: tabs === "tab-os-4" ? "#1677ff" : "",
            }}
            onClick={() => {
              handleTabData("tab-os-4");
            }}
          >
            Customer
          </Typography>
          <Typography
            level={5}
            style={{
              margin: "0",
              cursor: "pointer",
              color: tabs === "tab-os-5" ? "#1677ff" : "",
            }}
            onClick={() => {
              handleTabData("tab-os-5");
            }}
          >
            Order
          </Typography>
          <Typography
            level={5}
            style={{
              margin: "0",
              cursor: "pointer",
              color: tabs === "tab-os-6" ? "#1677ff" : "",
            }}
            onClick={() => {
              handleTabData("tab-os-6");
            }}
          >
            Payment Methods
          </Typography>
          <Typography
            level={5}
            style={{
              margin: "0",
              cursor: "pointer",
              color: tabs === "tab-os-7" ? "#1677ff" : "",
            }}
            onClick={() => {
              handleTabData("tab-os-7");
            }}
          >
            Product
          </Typography>
          <Typography
            level={5}
            style={{
              margin: "0",
              cursor: "pointer",
              color: tabs === "tab-os-8" ? "#1677ff" : "",
            }}
            onClick={() => {
              handleTabData("tab-os-8");
            }}
          >
            Stock
          </Typography>
          <Typography
            level={5}
            style={{
              margin: "0",
              cursor: "pointer",
              color: tabs === "tab-os-9" ? "#1677ff" : "",
            }}
            onClick={() => {
              handleTabData("tab-os-9");
            }}
          >
            Store
          </Typography>
          <Typography
            level={5}
            style={{
              margin: "0",
              cursor: "pointer",
              color: tabs === "tab-os-10" ? "#1677ff" : "",
            }}
            onClick={() => {
              handleTabData("tab-os-10");
            }}
          >
            Tax
          </Typography>
        </div>
      </Card>
      <Layout>
        <Layout.Content style={{ padding: "24px" }}>
          {tabs === "tab-os-1" && (
            <Card>
              <Table columns={columns} dataSource={data} />
            </Card>
          )}
          {tabs === "tab-os-2" && <Card>TabContent 2</Card>}
          {tabs === "tab-os-3" && <Card>TabContent 3</Card>}
          {tabs === "tab-os-4" && <Card>TabContent 4</Card>}
          {tabs === "tab-os-5" && <Card>TabContent 5</Card>}
          {tabs === "tab-os-6" && <Card>TabContent 6</Card>}
          {tabs === "tab-os-7" && <Card>TabContent 7</Card>}
          {tabs === "tab-os-8" && <Card>TabContent 8</Card>}
          {tabs === "tab-os-9" && <Card>TabContent 9</Card>}
          {tabs === "tab-os-10" && <Card>TabContent 10</Card>}
        </Layout.Content>
      </Layout>
    </div>
  );
};

export default dataList;
