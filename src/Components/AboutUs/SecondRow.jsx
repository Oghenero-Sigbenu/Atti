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
              {" "}
              Reach the Unreachable:
            </li>
            Establish mobile clinics, telemedicine networks, and community
            health hubs to bring healthcare directly to remote areas. Prioritize
            regions with limited infrastructure and long travel times.
            <li className="font-bold list-disc mt-[.5rem] text-primary">
              {" "}
              Holistic Care:
            </li>
            Deliver not only medical treatment but also preventive services,
            health education, mental health support, and nutrition programs.
            <li className="font-bold list-disc mt-[.5rem] text-primary">
              {" "}
              Collaborate:
            </li>
            Partner with local governments, NGOs, and other stakeholders to
            maximize impact. Leverage existing resources and build sustainable
            networks.
            <li className="font-bold list-disc mt-[.5rem] text-primary">
              {" "}
              Empower Communities:
            </li>
            Train local healthcare workers, community health volunteers, and
            student volunteers. Empower communities to take ownership of their
            health.
            <li className="font-bold list-disc mt-[.5rem] text-primary">
              {" "}
              Data-Driven Solutions:
            </li>
            Collect and analyze health data to identify specific needs, track
            progress, and adapt services accordingly.
            <li className="font-bold list-disc mt-[.5rem] text-primary">
              - Feed an individual:
            </li>
            This includes occasional distribution of food, clothings and
            rendering of free health services to those in need at least twice a
            year.
            <li className="font-bold list-disc mt-[.5rem] text-primary">
              - ⁠Sing the word:
            </li>
            Healthy competition to encourage differently abled individuals in
            exploring and building their talents.
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SecondRow;
