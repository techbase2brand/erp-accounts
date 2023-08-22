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
    console.log("ConnectionValue:", connectionValue);
  };

  const onIntegrateHandle = (event) => {
    setIntegrateValue(event.target.value);
    console.log("IntegrateValue:", integrateValue);
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
        // console.log("dataaaaaaaa" ,data?.platforms)
      } catch (error) {
        console.log("errorrrrrrr", error);
      }
    };

    fetchData();
    // console.log("dataaa", alldata);
    // console.log("platformDataaa", platformData);
    // console.log("planDataaa", planData);
  }, []);

  const filteredPlanData = planData?.filter(
    (value) => value?.plugins[0]?.id === "99ba5e0e-dad2-454b-9ce4-5e36920adb0d"
  );

  const handleCheckout = async () => {
    // try {
    //   const response = await axios.post(
    //     "https://saasintegrator.online/api/v1/connection",
    //     {
    //       plan_id: integrateValue,
    //     }
    //   );
    //   console.log("responseeeeeeeeeeeeeeeeeeeeeeeeeeee", response);
    // } catch (error) {
    //   console.log("errorrrrrrrrrrr" ,error)
    // }
    console.log("handleCheckout");
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
        <Layout.Header style={{ background: "#fff" }}>
          <Typography.Title level={4}>Create Connection</Typography.Title>
        </Layout.Header>
        <Layout.Content>
          <Card>
            <div
            // style={{
            //   display: "flex",
            //   gap: "3rem",
            // }}
            >
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
                                  <span>{value.display_name}</span>
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
                    <Radio.Group
                      onChange={onIntegrateHandle}
                      value={integrateValue}
                      style={{ width: "100%" }}
                    >
                      {filteredPlanData.map((value, index) => (
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
                              {/* <span>{value?.name}</span> */}
                              <span>{value?.plugins[0]?.display_name}</span>
                              <span>{value?.plugins[0]?.description}</span>
                            </div>
                          </Radio>
                        </div>
                      ))}
                    </Radio.Group>
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
