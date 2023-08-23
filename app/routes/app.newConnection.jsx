import React, { useEffect, useState } from "react";
import { Card, Layout, Typography, Radio, Space, Button } from "antd";
import { Link, Links } from "@remix-run/react";
import { Breadcrumb } from "antd";
import axios from "axios";

export default function AdditionalPage() {
  const [connectionValue, setConnectionValue] = useState();
  const [integrateValue, setIntegrateValue] = useState();
  const [createConnectionTab, setCreateConnectionTab] = useState("tab-os-1");
  const [alldata, setAlldata] = useState([]);
  const [platformData, setPlatformData] = useState([]);
  const [planData, setPlanData] = useState([]);

  const onChooseConnectionHandle = (event) => {
    setConnectionValue(event.target.value);
    console.log("ConnectionValue:", event.target.value);
  };

  const onIntegrateHandle = (event) => {
    setIntegrateValue(event.target.value);
    console.log("IntegrateValue:", event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://saasintegrator.online/api/v1/platforms`;
        const response = await axios.get(url);
        const dataa = response?.data;
        const platforms = response?.data?.platforms;
        const plans = response?.data?.plans;
        setPlatformData(platforms);
        setPlanData(plans);
        setAlldata(dataa);
        console.log("dataaa", alldata);
      } catch (error) {
        console.log("errorrrrrrr", error);
      }
    };
    fetchData();
    console.log("dataaa", alldata);
    // console.log("platformDataaa", platformData);
    // console.log("planDataaa", planData);
  }, []);

  const filteredPlanData = planData?.filter(
    (value) =>
      value?.plugins[0]?.id === connectionValue && value?.status === "active"
  );

  const handleCheckout = async () => {
    try {
      const response = await axios.post(
        "https://saasintegrator.online/api/v1/connection",
        {
          plan_id: integrateValue,
        }
      );
      console.log("responseeeeeeeeeeeeeeeeeeeeeeeeeeee", response);
      alert("Plan successfully added")
    } catch (error) {
      console.log("errorrrrrrrrrrr", error);
    }
  };

  return (
    <>
      <div style={{ padding: "1rem" }}>
        <Breadcrumb
          items={[
            {
              title: <Link to="/app">Home</Link>,
            },
            {
              title: "Create",
            },
          ]}
        />
      </div>
      <Layout style={{ padding: "1rem" }}>
        <Card style={{ background: "#fff" }}>
          <Typography.Title level={4}>Create Connection</Typography.Title>
        </Card>
        <Layout.Content>
          <Card>
            <div>
              <div
                className="connection-tabs-os"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  paddingBottom: "1rem",
                  color: createConnectionTab === "tab-os-1" ? "#1677ff" : "",
                }}
              >
                <Button
                  style={{
                    color: createConnectionTab === "tab-os-1" ? "#1677ff" : "",
                  }}
                  onClick={() => {
                    setCreateConnectionTab("tab-os-1");
                  }}
                >
                  Choose Platform
                </Button>
                <Button
                  style={{
                    color: createConnectionTab === "tab-os-2" ? "#1677ff" : "",
                  }}
                  onClick={() => {
                    setCreateConnectionTab("tab-os-2");
                  }}
                >
                  Integrate
                </Button>
              </div>

              <div className="tab-data-os">
                {createConnectionTab === "tab-os-1" && (
                  <div>
                    <Typography.Title level={4}>
                      Create Connection
                    </Typography.Title>
                    <Radio.Group
                      onChange={onChooseConnectionHandle}
                      value={connectionValue}
                      style={{ width: "100%" }}
                    >
                      {platformData.map((value, index) => {
                        if (value.type !== "ecom") {
                          return (
                            <div
                              style={{
                                display: "flex",
                                width: "100%",
                                paddingBottom: "0.8rem",
                              }}
                              key={value.id}
                            >
                              <Radio value={value.id}>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                  }}
                                >
                                  <Typography.Title
                                    level={5}
                                    style={{ margin: "0" }}
                                  >
                                    {value.display_name}
                                  </Typography.Title>
                                  <span
                                    style={{
                                      display: "flex",
                                    }}
                                  >
                                    <img
                                      src={value.logo.small.url}
                                      alt={value.display_name}
                                      style={{
                                        width: "auto",
                                        height: "22px",
                                      }}
                                    />
                                  </span>
                                </div>
                              </Radio>
                            </div>
                          );
                        }
                      })}
                    </Radio.Group>
                    <div style={{ paddingTop: "1rem" }}>
                      <Button
                        type="primary"
                        onClick={() => {
                          setCreateConnectionTab("tab-os-2");
                        }}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                )}

                {createConnectionTab === "tab-os-2" && (
                  <div>
                    <Typography.Title level={4}>Integrate</Typography.Title>
                    {filteredPlanData.map((value, index) => (
                      <div
                        style={{
                          paddingBottom: "0.8rem",
                        }}
                      >
                        <Radio.Group
                          onChange={onIntegrateHandle}
                          value={integrateValue}
                          style={{ width: "100%" }}
                        >
                          <div
                            style={{
                              display: "flex",
                              width: "100%",
                            }}
                            key={value.id}
                          >
                            <Radio value={value.id}>
                              <Typography.Title
                                level={5}
                                style={{ margin: "0" }}
                              >
                                {value?.plugins[0]?.display_name}
                              </Typography.Title>
                            </Radio>
                          </div>
                        </Radio.Group>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <div>
                            <span>{value?.plugins[0]?.description}</span>
                          </div>
                          <div>
                            <span>{value?.price_formatted}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div style={{ paddingTop: "1rem" }}>
                      <Button type="primary" onClick={handleCheckout}>
                        Checkout
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
          {/* <Card>
            <Link to="/app/configuration">
              <Button type="primary"> Next</Button>
            </Link>
          </Card> */}
        </Layout.Content>
      </Layout>
    </>
  );
}
