import { NextPage } from "next";
import { useQuery } from "@tanstack/react-query";
import { axios } from "utils";

export const Auth = (page: NextPage) => () => {
  const { data: user, error } = useQuery(["user"], async function () {
    const { data } = await axios.get("/auth/current-user");
    if (!data) throw new Error("Not authorozed");

    return data;
  });
};
