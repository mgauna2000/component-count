import React from "react";
import "./ItemListContainer.css";

const ItemListContainer = ({ image, title, price }) => {
  return (
    <>
      <div className="col">
        <div className="card">
          <img src={`./${image}`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">${price}</p>
            <button type="button" className="btn btn-secondary">
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
