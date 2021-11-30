import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearBasket } from "../features/basket";

const CheckoutView = () => {
  const items = useSelector((state) => state.products.value);
  const basket = useSelector((state) => state.basket.value);
  const dispatch = useDispatch();

  const currentItems = items.filter((item) => basket.includes(item.id));
  const sum = currentItems.reduce((acc, curr) => {
    const quantity = basket.filter((bi) => bi === curr.id).length;
    return acc + quantity * curr.price;
  }, 0);

  return (
    <>
      <button onClick={() => dispatch(clearBasket())}>Clear basket</button>
      <br />
      <span>Total price: {sum}</span>
      <ul>
        {currentItems.map((item, i) => {
          const quantity = basket.filter((bi) => bi === item.id).length;
          return (
            <li key={`k-${i}`}>
              {item.name}: ({quantity} x {item.price}) = {quantity * item.price}
              <button onClick={() => dispatch(removeItem(item.id))}>
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CheckoutView;
