import Title from "../Common/Title";
import { executives } from "../../helpers/data";
import ExecutivesCard from "../Shared/ExecutiveCard";

function ExecutivesRow() {
  return (
    <div>
      <div className="w-full mt-[11rem] md:mt-[1rem] mb-[3rem] py-[1rem]">
        <Title
          text="text-primary"
          title="MEET THE TEAM"
          bg="bg"
          border="border-blue"
        />

        <div className="flex flex-wrap mx-auto max-w-[90%] lg:max-w-[85%] justify-center md:justify-between py-[2rem]">
          {window.location.pathname === "/executives"
            ? executives &&
              executives?.map((item) => <ExecutivesCard item={item} />)
            : executives &&
              executives &&
              executives
                ?.slice(0, 4)
                .map((item) => <ExecutivesCard item={item} />)}
        </div>
        {window.location.pathname === "/executives" ? (
          ""
        ) : (
          <div className="w-full text-center"></div>
        )}
      </div>
    </div>
  );
}

export default ExecutivesRow;
