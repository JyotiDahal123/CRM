import React from "react";
import Layout from "../../shared/layout";
import NewCustomer from "./new-customer";
const Customers = () => {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-xl font-semibold">Customers</h1>
        <NewCustomer />
      </div>
    </Layout>
  );
};

export default Customers;
