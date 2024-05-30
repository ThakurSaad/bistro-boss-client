const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mb-12 md:w-4/12 mx-auto">
      <p className="text-[#D99904] italic text-xl text-center">---{subHeading}---</p>
      <h3 className="uppercase text-4xl text-center border-y-4 rounded-xl py-5 mt-3">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
