import { Layout } from "../../Components";

function Financials() {
  return (
    <Layout>
      <div className=" max-w-[90%]  my-[5rem] lg:max-w-[85%] mx-auto ">
        <div className="mt-[7rem] mb-[12rem]">
          <h2 className="font-bold mb-[2rem] text-center">Financials</h2>
          <table class="table-fixed border-spacing-0 border-collapse border  mx-auto">
            <thead>
              <tr className="  border-b">
                <th className="w-[15%] rounded-l-lg   px-[1rem] py-[.5rem]">
                  Income
                </th>
                <th className="w-[15%] px-[1rem] py-[.5rem]">Expenses</th>
                <th className="w-[15%] px-[1rem] py-[.5rem]">Year</th>
                <th className="w-[15%] px-[1rem] py-[.5rem]">Year</th>
                <th className="w-[15%] px-[1rem] py-[.5rem]">Year</th>
                <th className="w-[15%]  rounded-r-lg  px-[1rem] py-[.5rem]">
                  Year
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-[15%] border  text-center">1961</td>
                <td className="w-[15%] border  text-center">1961</td>
                <td className="w-[15%] border  text-center">1961</td>
                <td className="w-[15%] border   text-center">1961</td>
                <td className="w-[15%] border   text-center">1961</td>
                <td className="w-[15%] border   text-center">1961</td>
              </tr>
              <tr>
                <td className="w-[15%] border  text-center">1961</td>
                <td className="w-[15%] border  text-center">1961</td>
                <td className="w-[15%] border  text-center">1961</td>
                <td className="w-[15%] border   text-center">1961</td>
                <td className="w-[15%] border   text-center">1961</td>
                <td className="w-[15%] border   text-center">1961</td>
              </tr>{" "}
              <tr>
                <td className="w-[15%] border  text-center">1961</td>
                <td className="w-[15%] border  text-center">1961</td>
                <td className="w-[15%] border  text-center">1961</td>
                <td className="w-[15%] border   text-center">1961</td>
                <td className="w-[15%] border   text-center">1961</td>
                <td className="w-[15%] border   text-center">1961</td>
              </tr>
              <tr>
                <td className="w-[15%] border  text-center">1961</td>
                <td className="w-[15%] border  text-center">1961</td>
                <td className="w-[15%] border  text-center">1961</td>
                <td className="w-[15%] border   text-center">1961</td>
                <td className="w-[15%] border   text-center">1961</td>
                <td className="w-[15%] border   text-center">1961</td>
              </tr>{" "}
              <tr>
                <td className="w-[15%] border  text-center">1961</td>
                <td className="w-[15%] border  text-center">1961</td>
                <td className="w-[15%] border  text-center">1961</td>
                <td className="w-[15%] border   text-center">1961</td>
                <td className="w-[15%] border   text-center">1961</td>
                <td className="w-[15%] border   text-center">1961</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default Financials;
