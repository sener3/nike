import React from "react";

const CardTotals = ({ value }) => {
  return (
    <div className="text-center mt-4">
      {value.cartTotal === 0 ? null : (
        <h2>Cart total is: {value.cartTotal}$</h2>
      )}
    </div>
  );
};

export default CardTotals;
