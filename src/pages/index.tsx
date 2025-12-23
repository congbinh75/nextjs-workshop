import { GetServerSideProps } from "next";
import { redirect, RedirectType } from "next/navigation";

export default function Home() {
  redirect("/dashboard", RedirectType.replace);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: "/dashboard",
      permanent: false,
    },
  };
};
