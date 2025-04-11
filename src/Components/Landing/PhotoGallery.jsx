import Event from "../../img/Out.jpeg";

import Event2 from "../../img/Out2.jpeg";
import Bus from "../../img/mobile.jpeg";

function Gallery() {
  return (
    <div className="w-full  " id="gallery">
      <h2 className="text-center mt-[3rem]  text-primary font-extrabold text-[1.7rem]">
        PHOTO GALLERY
      </h2>
      <hr className="w-[90px] mx-auto border-b mt-3 border-blue border-4 bg-primary"></hr>
      <div className=" flex flex-wrap  justify-between max-w-[90%] lg:max-w-[85%] py-[2rem] mx-auto">
        <div className="w-full h-[300px] md:w-[30%] mb-[2rem] ">
          <img
            src={Bus}
            alt="Hero view"
            className="w-[100%] h-[100%] object-cover"
          />
          <h4 className="text-center font-light text-primary  mt-[.5rem]">
            Mobile Health and Wellness Initiative.
          </h4>
        </div>
        <div className="w-full md:w-[30%] mb-[2rem] ">
          <div className="  bg-blue w-full h-[300px]">
            <img
              src={Event2}
              alt="events"
              className="w-full h-[100%] object-cover"
            />
          </div>
          <h4 className="text-center font-light text-primary  mt-[.5rem]">
            Medical outreach at ketu Lagos.
          </h4>
        </div>
        <div className="w-full md:w-[30%] mb-[2rem]">
          <div className=" bg-blue h-[300px] w-full">
            <img
              src={Event}
              alt="events"
              className="w-full h-[100%] object-cover"
            />
          </div>
          <h4 className="text-center font-light text-primary  mt-[.5rem]">
            Medical outreach at CYON ADC camp.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
