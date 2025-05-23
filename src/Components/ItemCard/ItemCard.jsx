import { useState } from "react";
import styles from "./ItemCard.module.css"

function ItemCard({
  itemInfo: {
    id,
    image,
    category,
    title,
    price,
    rating: { rate, count },
  },
  setQtyArray,
  orderedIds,
  setOrderedIds,
  setTotal,
}) {
  const [qnty, setQnty] = useState(1);
  function handleDecrement() {
    if (qnty >= 2) {
      setQnty((prevQnty) => prevQnty - 1);
    }
  }
  function handleIncrement() {
    setQnty((prevQnty) => prevQnty + 1);
  }
  function handleAddToCart() {
    setQtyArray((prevArray) =>
      prevArray.map((qty, index) => {
        if (index === id - 1) {
          return qty + qnty;
        } else {
          return qty;
        }
      }),
    );
    if (!orderedIds.includes(id - 1)) {
      setOrderedIds((prevArray) => [...prevArray, id - 1]);
    }
    setTotal((prevTotal) => prevTotal + qnty * price);
    setQnty(1);
  }
  return (
    <div className={styles.itemCard}>
      <img src={image} alt="" className={styles.itemImage} />
      <span> </span>
      <hr className={styles.lineBreak} />
      <p className={styles.category}>{category}</p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>
        {" "}
        <span>&#36;</span> {price}
      </p>
      <p>
        <b>stars:</b> {rate} ({count})
      </p>
      <span className={styles.editQtyContainer}>
        <button onClick={handleDecrement}>-</button>
        <input
          tabIndex={0}
          type="number"
          value={qnty}
          className={styles.inputQty}
          onChange={(e) => {
            setQnty(e.target.value == "" ? "" : parseInt(e.target.value));
          }}
          onBlur={(e) => {
            setQnty(e.target.value == "" ? 1 : parseInt(e.target.value));
          }}      
        />
        <button onClick={handleIncrement}>+</button>
      </span>

      <p>
        <button onClick={handleAddToCart} className={styles.addToCartButton}>
          <b>Add to Cart</b>
        </button>
      </p>
    </div>
  );
}

export default ItemCard;
