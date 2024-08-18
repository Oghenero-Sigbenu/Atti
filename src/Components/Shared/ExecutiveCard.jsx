function ExecutivesCard({ item: { lastName, names, photo, title, position } }) {
  return (
    <div className="text-center w-[80%] mb-[1.5rem] mx-auto md:w-[22%]">
      <div className=" w-[250px] h-[250px]  flex justify-center  mx-auto  md:w-[250px] md:h-[250px]">
        <div className=" hover:-translate-y-1 transition-transform w-full bg-[#56bff4]">
          <img
            src={photo}
            alt="user"
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
      </div>
      <p className=" text-primary font-semibold">{title + " " + names}</p>
      <p className=" text-primary font-semibold">{lastName}</p>
      <p className="text-[#A7A5A5] font-normal">{position}</p>
    </div>
  );
}

export default ExecutivesCard;
