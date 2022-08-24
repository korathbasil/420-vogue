import { NextPage } from "next";
import { useQuery } from "@tanstack/react-query";
import { axios } from "utils";

export const WithAuth = (Page: NextPage) => () => {
  const { isError } = useQuery(["user"], async function () {
    // const { data } = await axios.get("/auth/current-user");
    // if (!data) throw new Error("Not authorozed");

    // return data;

    return {
      _id: "sdhbaksjdhkajsd",
      firstname: "Bazil",
      lastname: "korath",
      email: "korathbasil@email.com",
    };
  });

  if (isError) return;
  return Page;
};
