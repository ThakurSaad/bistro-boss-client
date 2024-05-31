import FoodCard from "../../../Components/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div>
      <div className="grid justify-items-center md:grid-cols-3 grid-cols-1 gap-6">
        {items.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default OrderTab;
