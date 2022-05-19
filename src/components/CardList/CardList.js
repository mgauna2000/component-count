import React from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

export const CardList = () => {
  return (
    <>
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 my-4 g-4 grid">
          <ItemListContainer
            title={"Manga Shingeki no Kiojin"}
            image={"manga1.webp"}
            price={9360}
          />
          <ItemListContainer
            title={"Manga Naruto Shipuden"}
            image={"manga2.webp"}
            price={9360}
          />
          <ItemListContainer
            title={"Manga Akame ga Kill"}
            image={"manga3.webp"}
            price={6600}
          />
          <ItemListContainer
            title={"Manga Evangelion"}
            image={"manga4.webp"}
            price={6600}
          />
          <ItemListContainer
            title={"Manga Naruto"}
            image={"manga5.webp"}
            price={9360}
          />
          <ItemListContainer
            title={"Manga Sailor Moon"}
            image={"manga6.webp"}
            price={6600}
          />
        </div>
      </div>
    </>
  );
};
