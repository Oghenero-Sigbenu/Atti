import { Layout } from "../../Components";
import Creek from "../../img/plan.png";

function Financials() {
  return (
    <Layout>
      <div className=" max-w-[90%] my-4  mb-[5rem] lg:max-w-[85%] mx-auto ">
        <div className="flex mt-[2rem] justify-end">
          <a
            href="/Financial Plan.pdf"
            download
            className="bg-primary cursor-pointer hover:bg-blue text-white  px-[1rem] py-[.5rem] rounded-[1px]"
          >
            Download Financial
          </a>
        </div>
        <div className=" mt-[2rem] lg:mt-[rem] mb-[12rem]">
          <h2 className="font-bold mb-[2rem] text-center">
            Creek Health and Wellness Project financials.
          </h2>
          <div className=" shadow-md">
            <a href="/Financial Plan.pdf" download className="cursor-pointer ">
              <img src={Creek} alt="Creek financials" className="mx-auto" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Financials;
