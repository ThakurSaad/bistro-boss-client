import SectionTitle from "../../../Components/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import styles from "./Featured.module.css";

const Featured = () => {
  return (
    <section className={`min-h-screen bg-fixed md:py-16 lg:py-32 mb-32 ${styles.featuredItem}`}>
      <SectionTitle
        heading={"From our menu"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="md:flex max-w-screen-lg mx-auto items-center justify-center">
        <div>
          <img className="md:w-[548px] w-sm" src={featured} alt="featured" />
        </div>
        <div className="max-w-[500px] md:pl-8 md:text-white">
          <p className="text-2xl">March 20, 2023</p>
          <p className="text-2xl uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline mt-8 uppercase md:text-white">Read more</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
