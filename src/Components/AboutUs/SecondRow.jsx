import About1 from "../../img/Out1.jpeg";

function SecondRow() {
  return (
    <div className="flex-reverse flex flex-wrap mb-[4rem] mt-[8rem] max-w-[90%] lg:max-w-[85%] mx-auto ">
      <div className="mb-[4rem]  md:h-[400px] w-full  md:w-[52%]">
        <img src={About1} alt="" className="md:h-full w-full  object-cover" />
      </div>
      <div className="md:w-[40%] mb-[4rem] w-full  md:ml-[6rem] flex items-center">
        <div className="   ">
          <h4 className="text-[1.5rem] md:text-[2rem]  leading-8 font-extrabold text-primary">
            WHAT WE DO?
          </h4>
          <ul className="mt-[1rem]  text-[1rem] leading-7">
            <li className="font-bold list-disc mt-[.5rem] text-primary">
              Routine health outreach:
            </li>
            This includes free blood pressure check, blood glucose check,
            malaria test, BMI, HIV test and counseling at least once every
            month.
            <li className="font-bold list-disc  mt-[.5rem] text-primary">
              {" "}
              Subsidized check ups:
            </li>
            Test for ovarian cancer and breast cancer among others.
            <li className="font-bold list-disc  mt-[.5rem] text-primary">
              Feed an individual:
            </li>
            This includes occasional distribution of food, clothings and
            rendering of free health services to those in need at least twice a
            year.
            <li className="font-bold list-disc  mt-[.5rem] text-primary">
              Sing the World:
            </li>
            A healthy competition to encourage differently abled individuals in
            exploring and building their talents.
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SecondRow;
