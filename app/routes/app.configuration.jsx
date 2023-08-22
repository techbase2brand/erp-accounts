import React, { useState } from "react";
import { Card, Layout, Typography, Radio, Space, Button } from "antd";
import { Link } from "@remix-run/react";
import { Breadcrumb } from "antd";

export default function AdditionalPage() {
  const [value, setValue] = useState(1);

  const onChangeHandle = (event) => {
    console.log("'radio checked:", event.target.value);
    setValue(event.target.value);
  };

  return (
    <>
      <div style={{ paddingBottom: "1rem", paddingLeft: "2rem" }}>
        <Breadcrumb
          items={[
            {
              title: <Link to="/app">Home</Link>,
            },
            {
              title: <Link to="/app">My Connenctions</Link>,
            },
            {
              title: "Create",
            },
          ]}
        />
      </div>
      <Layout>
        <Layout.Header style={{ background: "#0958d9" }}>
          <Typography.Title level={2} style={{ color: "#ffffff" }}>
            Create Connection
          </Typography.Title>
        </Layout.Header>
        <Layout.Content>
          <Card>
            <Radio.Group onChange={onChangeHandle} value={value}>
              <Space direction="vertical">
                <Radio value={1}>Option A</Radio>
                <Radio value={2}>Option B</Radio>
                <Radio value={3}>Option C</Radio>
                <Radio value={4}>Option D</Radio>
                <Radio value={5}>Option E</Radio>
              </Space>
            </Radio.Group>
          </Card>
          <Card>
            <Link to="/app" rel="home">
              <Button type="primary"> Home</Button>
            </Link>
          </Card>
        </Layout.Content>
      </Layout>
    </>
  );
}
