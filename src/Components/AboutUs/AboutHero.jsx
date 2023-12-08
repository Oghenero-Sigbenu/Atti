import About from "../../img/Out2.jpeg";

function AboutHero() {
  return (
    <div className="w-full md:h-[450px]  bg-[rgba(142,224,254,0.29)]  mb-[4rem] pt-[3rem]">
      <div className="flex flex-wrap  mt-[3rem] max-w-[90%] lg:max-w-[85%] mx-auto ">
        <div className="w-full md:w-[52%] md:mt-[4rem]  md:mr-[6rem] mb-[2rem]">
          <h4 className="text-[1.5rem] md:text-[2rem] font-extrabold leading-8 text-primary ">
            ABOUT US
          </h4>
          <p className="mt-[1rem]  text-[1rem] leading-7">
            A non-profit organization aimed at touching the lives of individuals
            through providing good health,food and clothing. With us, the act of
            saving lives goes in the little care that you give.
          </p>
        </div>
        <div className="md:h-[400px] md:w-[38%] w-full -mb-[4rem] md:mb-0">
          <img src={About} alt="" className="h-full object-cover w-full" />
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
