import React, { useState } from "react";

const RenderShop = ({ children }) => {
  const [basket, setBasket] = useState([]);
  return children({
    basket,
    setBasket,
  });
};

const RenderProps4 = () => {
  return (
    <RenderShop>
      {({ basket, setBasket }) => (
        <>
          <div>
            <p>"Steppenwolf" by Hermann Hesse</p>
            <button
              onClick={() =>
                !basket.includes("Steppenwolf")
                  ? setBasket((oldBasket) => [...oldBasket, "Steppenwolf"])
                  : null
              }
            >
              Add to the basket
            </button>
          </div>
          <div style={{ width: 300, border: "1px solid black" }}>
            <p>Basket: </p>
            {basket &&
              basket.length > 0 &&
              basket.map((book) => {
                return (
                  <div>
                    <p>{book}</p>
                    <button onClick={() => setBasket([])}>
                      Delete {book} from the basket
                    </button>
                  </div>
                );
              })}
          </div>
        </>
      )}
    </RenderShop>
  );
};

export default RenderProps4;
