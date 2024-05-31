const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute bg-[#111827] text-white px-6 py-3 rounded-md right-5 top-5">
        ${price}
      </p>
      <div className="card-body">
        <h2 className=" text-center text-2xl font-semibold">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline bg-slate-100 border-0 border-orange-400 text-orange-400 border-b-4 mx-auto uppercase">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
