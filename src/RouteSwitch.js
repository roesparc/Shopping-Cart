import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

const RouteSwitch = () => {
  return (
    <>
      <BrowserRouter>
        <Layout></Layout>
      </BrowserRouter>
    </>
  );
};

export default RouteSwitch;
