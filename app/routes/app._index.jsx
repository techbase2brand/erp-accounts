import { useEffect } from "react";
import { json } from "@remix-run/node";
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

import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  const { session } = await authenticate.admin(request);

  return json({ shop: session.shop.replace(".myshopify.com", "") });
};

export async function action({ request }) {
  const { admin } = await authenticate.admin(request);

  const color = ["Red", "Orange", "Yellow", "Green"][
    Math.floor(Math.random() * 4)
  ];
  const response = await admin.graphql(
    `#graphql
      mutation populateProduct($input: ProductInput!) {
        productCreate(input: $input) {
          product {
            id
            title
            handle
            status
            variants(first: 10) {
              edges {
                node {
                  id
                  price
                  barcode
                  createdAt
                }
              }
            }
          }
        }
      }`,
    {
      variables: {
        input: {
          title: `${color} Snowboard`,
          variants: [{ price: Math.random() * 100 }],
        },
      },
    }
  );

  const responseJson = await response.json();

  return json({
    product: responseJson.data.productCreate.product,
  });
}

export default function Index() {
  const nav = useNavigation();
  const { shop } = useLoaderData();
  const actionData = useActionData();
  const submit = useSubmit();
  const { Link: AntdLink } = Anchor; // Use a renamed import for Antd's Link
  const isLoading =
    ["loading", "submitting"].includes(nav.state) && nav.formMethod === "POST";

  const productId = actionData?.product?.id.replace(
    "gid://shopify/Product/",
    ""
  );

  useEffect(() => {
    if (productId) {
      notification.success({
        message: "Success",
        description: "Product created",
      });
    }
  }, [productId]);

  const generateProduct = () => submit({}, { replace: true, method: "POST" });

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

  return (
    <Layout>
      <Layout.Content style={{ padding: "24px" }}>
        {/* <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "16px",
          }}
        >
          <Link to="/app/newConnection">
            <Button type="primary">+ Build New Connection</Button>
          </Link>
        </div> */}
        <Card>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography.Title level={4} style={{ margin: "0" }}>
              My Connections
            </Typography.Title>

            <Link to="/app/newconnection">
              <Button type="primary">+ Build New Connection</Button>
            </Link>
          </div>
        </Card>
        <Card>
          <Table columns={columns} dataSource={data} />
        </Card>
      </Layout.Content>
    </Layout>
  );
}
