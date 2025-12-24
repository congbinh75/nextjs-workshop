import { getAllMessagesAsync } from "@/api/messages";
import Pagination from "@/components/pagination";
import { Message } from "@/types/message";
import { PaginationModel } from "@/types/pagination";
import { parse } from "cookie";
import { GetServerSidePropsContext } from "next";
import { ReactElement } from "react";
import Layout from "../layout";

type AdminProps = {
  messages: Message[];
  pagination: PaginationModel;
  decoded: string;
};

const Admin = ({ messages, pagination, decoded }: AdminProps) => {
  console.log(decoded);
  return (
    <section style={{ padding: "20px", width: "80%", margin: "0 auto" }}>
      <h1>Messages</h1>

      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f5f5f5" }}>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  fontWeight: "bold",
                  borderBottom: "2px solid #ddd",
                }}
              >
                Name
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  fontWeight: "bold",
                  borderBottom: "2px solid #ddd",
                }}
              >
                Email
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  fontWeight: "bold",
                  borderBottom: "2px solid #ddd",
                }}
              >
                Website
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  fontWeight: "bold",
                  borderBottom: "2px solid #ddd",
                  width: "40%",
                }}
              >
                Message
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  fontWeight: "bold",
                  borderBottom: "2px solid #ddd",
                }}
              >
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr key={msg.id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "12px", verticalAlign: "top" }}>
                  {msg.name}
                </td>
                <td style={{ padding: "12px", verticalAlign: "top" }}>
                  <a href={`mailto:${msg.email}`}>{msg.email}</a>
                </td>
                <td style={{ padding: "12px", verticalAlign: "top" }}>
                  {msg.website ? (
                    <a
                      href={msg.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {msg.website}
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
                <td
                  style={{
                    padding: "12px",
                    verticalAlign: "top",
                    width: "40%",
                  }}
                >
                  {msg.message}
                </td>
                <td style={{ padding: "12px", verticalAlign: "top" }}>
                  {new Date(msg.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <Pagination pagination={pagination} />
    </section>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const cookies = parse(context.req.headers.cookie || "");
    const token = cookies.auth_token;

    if (!token) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
  } catch (error) {
    console.error("Auth error:", error);

    return {
      redirect: {
        destination: "/login?error=Session%20expired",
        permanent: false,
      },
    };
  }

  const result = await getAllMessagesAsync();
  const messages = result.messages;
  const pagination = result.pagination;

  return {
    props: { messages, pagination },
  };
}

Admin.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Admin;
