import React from "react";

const ItemCount = ({stock, initial, onAdd}) => {
  return (
    <>
      <div className="container m-2">
        <div className="row align-items">
          <div className="col">
            <button className="btn btn-primary">-</button>
          </div>
          <div className="col">
            <p>{initial}</p>
          </div>
          <div className="col">
            <button className="btn btn-primary">+</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
