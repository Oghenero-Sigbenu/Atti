import VisionIcon from "../../Assests/vision.png";
import Target from "../../Assests/target.png";

function Vision() {
  return (
    <div className="w-full  bg-[rgba(142,224,254,0.29)] pt-[3rem] pb-[3rem]">
      <div className="flex flex-wrap ">
        <div className="w-full md:w-[48%] mb-[4rem]">
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
            Our vision is to create a world where every individual, regardless
            of their location or socio-economic status, has equitable access to
            high-quality healthcare services. We envision vibrant and healthy
            communities thriving in even the most remote corners of our planet.
          </p>
        </div>
        <div className="w-full md:w-[48%] mb-[4rem]">
          <img
            src={VisionIcon}
            alt="icon"
            className="w-[80px] mx-auto mb-[1rem]"
          />

          <h4 className="text-[2rem] text-center  font-extrabold leading-8 text-primary ">
            Our Mission
          </h4>
          <p className="mt-[1rem] md:w-[80%] mx-auto text-center  text-[1rem] leading-7">
            Our mission is to provide free,accessible, and essential healthcare
            services to underserved populations in rural areas, students, and
            marginalized communities. Through innovative approaches and
            community partnerships, we aim to improve health outcomes, reduce
            disparities, and empower individuals to lead healthier lives.
          </p>
        </div>
      </div>

      <div className="flex justify-between flex-wrap  mt-[3rem] max-w-[90%] lg:max-w-[85%] mx-auto ">
        <div className="w-full  mx-auto md:w-[70%] mb-[4rem]">
          <img src={Target} alt="icon" className="w-[80px] mx-auto mb-[1rem]" />
          <h4 className="text-[2rem] mb-[1rem] text-center  font-extrabold leading-8 text-primary ">
            Our Core Value
          </h4>
          <ul className="text-left  leading-">
            <li className="font-bold list-disc mt-[.5rem] text-primary">
              {" "}
              Compassion:
            </li>
            We approach every individual with empathy, kindness, and a deep
            understanding of their unique circumstances.
            <li className="font-bold list-disc mt-[.5rem] text-primary">
              {" "}
              Equity:
            </li>
            We believe that everyone deserves equal access to healthcare,
            regardless of their background or location.
            <li className="font-bold list-disc mt-[.5rem] text-primary">
              {" "}
              Innovation:
            </li>
            We embrace creative solutions, technology, and novel approaches to
            overcome barriers and improve health outcomes.
            <li className="font-bold list-disc mt-[.5rem] text-primary">
              {" "}
              Collaboration:
            </li>
            We work hand-in-hand with communities, partners, and volunteers to
            achieve our shared goals.
            <li className="font-bold list-disc mt-[.5rem] text-primary">
              {" "}
              Accountability:
            </li>
            We are committed to transparency, ethical practices, and responsible
            stewardship of resources.
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Vision;
