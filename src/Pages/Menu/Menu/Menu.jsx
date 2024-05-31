import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

// import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import menuCover from "../../../assets/menu/banner3.jpg";
import dessertCover from "../../../assets/menu/dessert-bg.jpeg";
import pizzaCover from "../../../assets/menu/pizza-bg.jpg";
import saladCover from "../../../assets/menu/salad-bg.jpg";
import soupCover from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <section>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover menuCover={menuCover} title={"Our menu"}></Cover>

      <SectionTitle
        heading={"Today's offer"}
        subHeading={"Don't miss"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>

      <MenuCategory
        items={dessert}
        title="dessert"
        coverImg={dessertCover}
      ></MenuCategory>

      <MenuCategory
        items={pizza}
        title="pizza"
        coverImg={pizzaCover}
      ></MenuCategory>

      <MenuCategory
        items={salad}
        title="salad"
        coverImg={saladCover}
      ></MenuCategory>

      <MenuCategory
        items={soup}
        title="soup"
        coverImg={soupCover}
      ></MenuCategory>
    </section>
  );
};

export default Menu;
