import { Layout } from "../../Components";

function Projects() {
  return (
    <Layout contact={false}>
      <div className="w-full">
        <div className="max-w-[90%]  mt-[2rem] mb-[5rem] lg:max-w-[85%] mx-auto">
          <div>
            <h4 className="font-bold text-primary text-[1rem] md:text-[1rem]">
              Introduction
            </h4>
            <p className="mb-[1rem]">
              The Creek Health and Wellness Project an initiative of Atti
              Naomi's Foundation is a beacon of hope for the riverine
              communities in Nigeria. With a mission to provide accessible
              healthcare services, this project aims to address the pressing
              needs of over 1.1 million people residing in the regions of
              Bomadi, Burutu, and Warri. Let's delve into the details of this
              transformative endeavor.
            </p>
            <h4 className="font-bold text-primary text-[1rem] md:text-[1rem]">
              The Challenge
            </h4>
            <p className="mb-[1rem]">
              {" "}
              Life in the riverine areas of Nigeria presents unique challenges.
              Isolated by waterways, these communities often lack proper
              healthcare infrastructure. Access to medical facilities is
              limited, and emergencies can become life-threatening due to the
              absence of timely intervention. The Creek Health and Wellness
              Project recognizes these disparities and seeks to bridge the gap.
            </p>
            <h4 className="font-bold text-primary my-[1rem] [text-[1rem] md:text-[1rem]">
              Key Components
            </h4>
            <h4 className="font-bold text-primary text-[1rem] md:text-[1rem]">
              1. Floating Clinic
            </h4>
            <p className="mb-[1rem]">
              The heart of the project lies in the concept of a floating clinic.
              This innovative approach involves a mobile healthcare unit that
              navigates the waterways, reaching even the most remote corners.
              Equipped with medical professionals, essential supplies, and
              diagnostic tools, the floating clinic provides emergency services,
              routine check-ups, and preventive care. Whether it's a sudden
              illness or a routine vaccination, the floating clinic is there to
              serve.
            </p>
            <h4 className="font-bold text-primary text-[1rem] md:text-[1rem]">
              2. Medical Camps
            </h4>
            <p className="mb-[1rem]">
              Regular medical camps are another vital aspect of the project. At
              least once a month, healthcare teams set up camp in strategic
              locations within Bomadi, Burutu, and Warri. These camps serve as
              hubs for health education, screenings, and consultations. The
              population receives information on preventive measures, nutrition,
              hygiene, and family planning. Vaccination drives ensure that
              children and adults are protected against preventable diseases.
            </p>
            <h4 className="font-bold text-primary text-[1rem] md:text-[1rem]">
              3. Empowering the Community
            </h4>
            <p className="mb-[1rem]">
              Empowerment is at the core of the Creek Health and Wellness
              Project. Community engagement sessions foster awareness and
              encourage active participation. Local leaders, women's groups, and
              youth associations collaborate to spread health literacy. By
              involving the community, the project aims to create sustainable
              change. When individuals understand the importance of health, they
              become advocates for their own well-being.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
