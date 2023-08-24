import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form, Input, Typography, Skeleton } from "antd";

const storesUrl = `https://saasintegrator.online/api/v1/stores/config-form`;
const token =
  "Bearer ZAHV2202069la2cZBwjzorR0DzQHaUnHE3QbrO55JR_Spw2qENgdoJaR-e5ev1fiEjoPAkfpaq";

const stores = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleFetchdata = async () => {
      try {
        const response = await axios.get(storesUrl, {
          headers: {
            Authorization: `${token}`,
          },
        });
        setData(response?.data?.["config-form"]);
        setLoading(false);
        // console.log("storeDataaaaaaa", response?.data);
        // console.log("storeDataaaaaaa", data);
      } catch (error) {
        console.log("errorrrrrrrr", error);
      }
    };
    handleFetchdata();
  }, []);

  useEffect(() => {
    console.log("storeDataaaaaaa", data); // This will log whenever data changes
  }, [data]);

  //   imput handles
  const onFinish = (values) => {
    console.log("Success:", values);
    alert("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Typography.Title level={4} style={{ marginBottom: "2rem" }}>
        Stores
      </Typography.Title>
      <Form
        name="basic"
        layout="vertical"
        autoComplete="off"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        {loading ? (
          <div style={{ paddingBottom: "2rem" }}>
            <Skeleton />
          </div>
        ) : (
          data.map((val, index) => {
            return (
              <Form.Item
                key={index}
                label={val?.label}
                name={val?.label}
                rules={[
                  {
                    required: true,
                    message: "Please fill field!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            );
          })
        )}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default stores;
