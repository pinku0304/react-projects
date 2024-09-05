const PizzaMenu = ({ pizzaObj }) => {
  return (
    <>
      <div className={`main ${pizzaObj.soldOut ? "soldout" : ""}`}>
        <div className="img-sec">
          <img src={pizzaObj.photoName} alt="" />
        </div>
        <div className="text-sec">
          <h3>{pizzaObj.name}</h3>
          <h4>{pizzaObj.soldOut ? "Soldout" : pizzaObj.price}</h4>
          <p>{pizzaObj.ingredients}</p>
        </div>
      </div>
    </>
  );
};
export default PizzaMenu;
