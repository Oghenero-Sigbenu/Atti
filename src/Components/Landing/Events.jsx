import { CalendarIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import { events } from "../../helpers/data";

function Events() {
  return (
    <div className="w-full bg-[]  pb-[4rem]">
      <Carousel
        className=" "
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        // centerMode={true}
        centerSlidePercentage={100}
        showArrows={true}
        interval={3000}
      >
        {events?.map(
          ({
            eflier,
            title,
            second,
            description,
            deadline,
            date,
            url,
            host,
          }) => (
            <div className="w-[80%] flex-wrap gap-[4rem] flex mx-auto mt-[2rem]">
              <div className=" w-[90%] md:w-[30%] ">
                {eflier ? (
                  <img
                    src={eflier}
                    alt="CYON  Event flier"
                    className=" md:h-auto object-cover"
                  />
                ) : (
                  <div className="bg-green w-full h-[200px]  md:h-[400px]"></div>
                )}
              </div>
              <div className="items-center text-left flex w-full md:w-[65%] lg:w-[60%]">
                <div className="  mb-[2.5rem]">
                  <h2 className="font-bold text-primary text-[1.5rem] md:text-[2rem]">
                    {title}
                  </h2>
                  <p className=" mb-[.5rem] ">{description}</p>
                  <p className=" mb-[.5rem] ">{second}</p>
                  {title ===
                    "The Creek Health and Wellness (CHW) Project: Bridging Gaps in Riverine Healthcare." && (
                    <div>
                      <h4 className="font-bold text-primary text-[1rem] md:text-[1rem]">
                        Introduction
                      </h4>
                      <p className="mb-[1rem]">
                        The Creek Health and Wellness Project an initiative of
                        Atti Naomi's Foundation is a beacon of hope for the
                        riverine communities in Nigeria. With a mission to
                        provide accessible healthcare services, this project
                        aims to address the pressing needs of over 1.1 million
                        people residing in the regions of Bomadi, Burutu, and
                        Warri. Let's delve into the details of this
                        transformative endeavor.
                      </p>
                      <h4 className="font-bold text-primary text-[1rem] md:text-[1rem]">
                        The Challenge
                      </h4>
                      <p className="mb-[1rem]">
                        {" "}
                        Life in the riverine areas of Nigeria presents unique
                        challenges. Isolated by waterways, these communities
                        often lack proper healthcare infrastructure. Access to
                        medical facilities is limited, and emergencies can
                        become life-threatening due to the absence of timely
                        intervention. The Creek Health and Wellness Project
                        recognizes these disparities and seeks to bridge the
                        gap.
                      </p>
                      <h4 className="font-bold text-primary my-[1rem] [text-[1rem] md:text-[1rem]">
                        Key Components
                      </h4>
                      <h4 className="font-bold text-primary text-[1rem] md:text-[1rem]">
                        1. Floating Clinic
                      </h4>
                      <p className="mb-[1rem]">
                        The heart of the project lies in the concept of a
                        floating clinic. This innovative approach involves a
                        mobile healthcare unit that navigates the waterways,
                        reaching even the most remote corners. Equipped with
                        medical professionals, essential supplies, and
                        diagnostic tools, the floating clinic provides emergency
                        services, routine check-ups, and preventive care.
                        Whether it's a sudden illness or a routine vaccination,
                        the floating clinic is there to serve.
                      </p>
                      <h4 className="font-bold text-primary text-[1rem] md:text-[1rem]">
                        2. Medical Camps
                      </h4>
                      <p className="mb-[1rem]">
                        Regular medical camps are another vital aspect of the
                        project. At least once a month, healthcare teams set up
                        camp in strategic locations within Bomadi, Burutu, and
                        Warri. These camps serve as hubs for health education,
                        screenings, and consultations. The population receives
                        information on preventive measures, nutrition, hygiene,
                        and family planning. Vaccination drives ensure that
                        children and adults are protected against preventable
                        diseases.
                      </p>
                      <h4 className="font-bold text-primary text-[1rem] md:text-[1rem]">
                        3. Empowering the Community
                      </h4>
                      <p className="mb-[1rem]">
                        Empowerment is at the core of the Creek Health and
                        Wellness Project. Community engagement sessions foster
                        awareness and encourage active participation. Local
                        leaders, women's groups, and youth associations
                        collaborate to spread health literacy. By involving the
                        community, the project aims to create sustainable
                        change. When individuals understand the importance of
                        health, they become advocates for their own well-being.
                      </p>
                    </div>
                  )}
                  <div className="flex gap-2 font-bold mb-[.5rem]">
                    <CalendarIcon className="w-4 text-primary" />
                    <h5>{date}</h5>
                  </div>
                  <div className="flex gap-2 font-bold  mb-[.5rem]">
                    <LocationMarkerIcon className="w-4 text-primary" />
                    <h5 className="text-[.8rem] md:text-[1rem]">
                      Ayakoromor, Nigeria.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </Carousel>
    </div>
  );
}

export default Events;
