import Agents from "@/components/Agents";
import React from "react";

const Page = () => {
  return (
    <>
      <h3>Interview Generations</h3>

      <Agents userName='You' userId='user1' type='generate' />
    </>
  );
};

export default Page;
