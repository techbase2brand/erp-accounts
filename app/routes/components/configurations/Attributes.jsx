import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form, Typography, Skeleton, Select } from "antd";

const attributesUrl = `https://saasintegrator.online/api/v1/attributes/config-form`;
const token =
  "Bearer ZAHV2202069la2cZBwjzorR0DzQHaUnHE3QbrO55JR_Spw2qENgdoJaR-e5ev1fiEjoPAkfpaq";

const Attributes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputValue, seInputValue] = useState("");

  useEffect(() => {
    const handleFetchData = async () => {
      try {
        const response = await axios.get(attributesUrl, {
          headers: {
            Authorization: `${token}`,
          },
        });

        const itemWithMapAttributes = response?.data?.["config-form"]?.find(
          (item) => item?.form?.map_attributes
        );

        if (itemWithMapAttributes) {
          setData(itemWithMapAttributes.form.map_attributes);
        } else {
          console.log("map_attributes not found in any item");
        }
        setLoading(false);
      } catch (error) {
        console.log("errorrrrrrrr", error);
      }
    };
    handleFetchData();
  }, []);

  useEffect(() => {
    console.log("attributesDataaaaaaa", data);
  }, [data]);

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
        Attributes
      </Typography.Title>
      <Form
        name="Attributes"
        layout="vertical"
        autoComplete="off"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        {loading ? (
          <div style={{ paddingBottom: "2rem" }}>
            <Skeleton />
          </div>
        ) : (
          <>
            <Typography style={{ paddingBottom: "1rem" }}>
              {data?.label}
            </Typography>
            <Form.Item name="Attributes">
              <Select
                style={{
                  width: "100%",
                }}
                defaultValue={data.default_value}
                onChange={(value) => {
                  seInputValue(value);
                }}
                value={inputValue}
                options={data.options.map((option, index) => ({
                  label: option.label,
                  value: option.value,
                  key: index,
                }))}
              />
            </Form.Item>
          </>
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

export default Attributes;
