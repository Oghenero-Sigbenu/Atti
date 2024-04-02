import { Layout } from "../../Components";
import Creek from "../../Assests/financials.jpeg";

function Financials() {
  return (
    <Layout>
      <div className=" max-w-[90%]  my-[5rem] lg:max-w-[85%] mx-auto ">
        <div className="mt-[7rem] mb-[12rem]">
          <h2 className="font-bold mb-[2rem] text-center">
            Creek Health and Wellness Project financials.
          </h2>
          <div>
            <img src={Creek} alt="Creek financials" className="" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Financials;
