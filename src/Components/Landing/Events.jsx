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
                  <div className="flex gap-2 font-bold mb-[.5rem]">
                    <CalendarIcon className="w-4 text-primary" />
                    <h5>{date}</h5>
                  </div>
                  <div className="flex gap-2 font-bold  mb-[.5rem]">
                    <LocationMarkerIcon className="w-4 text-primary" />
                    <h5 className="text-[.8rem] md:text-[1rem]">{host}</h5>
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
