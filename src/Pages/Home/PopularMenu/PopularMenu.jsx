import SectionTitle from "../../../Components/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="max-w-screen-xl mx-auto my-24">
      <SectionTitle
        heading={"From our menu"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="grid gap-6 md:grid-cols-2 justify-items-center">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
