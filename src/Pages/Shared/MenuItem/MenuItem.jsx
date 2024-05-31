const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  
  return (
    <div className="flex items-center md:max-w-[648px]">
      <img
        className="w-[118px] h-[104px] rounded-full rounded-tl-none"
        src={image}
        alt=""
      />
      <div className="px-8">
        <h3 className="text-xl uppercase">{name} -----------</h3>
        <p className="text-[#737373]">{recipe}</p>
      </div>
      <p className="-mt-11 text-xl text-[#BB8506]">${price}</p>
    </div>
  );
};

export default MenuItem;
