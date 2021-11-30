import React from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/basket";

function ListView() {
  const items = useSelector((state) => state.products.value);
  const dispatch = useDispatch();

  return (
    <ul className="ListView">
      {items.map((item, i) => (
        <li key={`k-${i}`}>
          {item.name} - {item.price}
          <button onClick={() => dispatch(addItem(item.id))}>Add</button>
        </li>
      ))}
    </ul>
  );
}

export default ListView;
