import VisionIcon from "../../Assests/vision.png";
import Target from "../../Assests/target.png";

function Vision() {
  return (
    <div className="w-full  bg-[rgba(142,224,254,0.29)] pt-[3rem] pb-[3rem]">
      <div className="w-full mb-[4rem]">
        <img
          src={VisionIcon}
          alt="icon"
          className="w-[80px] mx-auto mb-[1rem]"
        />

        <h4 className="text-[2rem] text-center  font-extrabold leading-8 text-primary ">
          Our Vision
        </h4>
        <p className="mt-[1rem] md:w-[80%] mx-auto text-center  text-[1rem] leading-7">
          To create a world where healthcare is a fundamental right not a
          privilege.
          <br />
          Our vision is to create a world where every individual, regardless of
          their location or socio-economic status, has equitable access to
          high-quality healthcare services. We envision vibrant and healthy
          communities thriving in even the most remote corners of our planet.
        </p>
      </div>
      <div className="flex justify-between flex-wrap  mt-[3rem] max-w-[90%] lg:max-w-[85%] mx-auto ">
        <div className="w-full md:w-[48%] mb-[4rem]">
          <img
            src={VisionIcon}
            alt="icon"
            className="w-[80px] mx-auto mb-[1rem]"
          />

          <h4 className="text-[2rem] text-center  font-extrabold leading-8 text-primary ">
            Our Mission
          </h4>
          {/* <p className="mt-[1rem] text-center  text-[1rem] leading-7">
            Our mission is to provide free,accessible, and essential healthcare
            services to underserved populations in rural areas, students, and
            marginalized communities. Through innovative approaches and
            community partnerships, we aim to improve health outcomes, reduce
            disparities, and empower individuals to lead healthier lives by
            theres processes
          </p> */}
          <ul className="text-left">
            <li className="mb-[1rem]">
              {" "}
              - Reach the Unreachable: Establish mobile clinics, telemedicine
              networks, and community health hubs to bring healthcare directly
              to remote areas. Prioritize regions with limited infrastructure
              and long travel times.
            </li>
            <li className="mb-[1rem]">
              {" "}
              - Holistic Care:Deliver not only medical treatment but also
              preventive services, health education, mental health support, and
              nutrition programs.
            </li>
            <li className="mb-[1rem]">
              {" "}
              - Collaborate:Partner with local governments, NGOs, and other
              stakeholders to maximize impact. Leverage existing resources and
              build sustainable networks.
            </li>
            <li className="mb-[1rem]">
              {" "}
              - Empower Communities:Train local healthcare workers, community
              health volunteers, and student volunteers. Empower communities to
              take ownership of their health.
            </li>
            <li className="mb-[1rem]">
              {" "}
              - Data-Driven Solutions:Collect and analyze health data to
              identify specific needs, track progress, and adapt services
              accordingly.
            </li>
          </ul>
        </div>
        <div className="w-full  mx-auto md:w-[48%] mb-[4rem]">
          <img src={Target} alt="icon" className="w-[80px] mx-auto mb-[1rem]" />
          <h4 className="text-[2rem] mb-[1rem] text-center  font-extrabold leading-8 text-primary ">
            Our Core Value
          </h4>
          <ul className="text-left">
            <li className="mb-[1rem]">
              {" "}
              - Compassion:We approach every individual with empathy, kindness,
              and a deep understanding of their unique circumstances.
            </li>
            <li className="mb-[1rem]">
              {" "}
              - Equity:We believe that everyone deserves equal access to
              healthcare, regardless of their background or location.
            </li>
            <li className="mb-[1rem]">
              {" "}
              - Innovation: We embrace creative solutions, technology, and novel
              approaches to overcome barriers and improve health outcomes.
            </li>
            <li className="mb-[1rem]">
              {" "}
              - Collaboration:We work hand-in-hand with communities, partners,
              and volunteers to achieve our shared goals.
            </li>
            <li className="mb-[1rem]">
              {" "}
              - Accountability:We are committed to transparency, ethical
              practices, and responsible stewardship of resources.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Vision;
