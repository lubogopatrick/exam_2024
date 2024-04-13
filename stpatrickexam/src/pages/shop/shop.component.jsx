import React, { Component } from "react";
import { CollectionItem } from "../../components/collection-item/collection-item.component.jsx";
import SHOP_DATA from "../../shopdata.js";
import "./shop.styles.scss";

export class ShopPage extends Component {
  render() {
    return (
      <>
        <div className="product-list">
          {SHOP_DATA.map((x) => {
            return (
              <div className="list-container">
                <h2 className="title">{x.title.toUpperCase()}</h2>
                <div className="preview">
                  {x.items
                    .filter((y, idx) => idx < 4)
                    .map((items) => (
                      <CollectionItem key={items.id} item={items} />
                    ))}
                </div>

                {/* <filteritemlist> */}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

// {SHOP_DATA.map((y)=>{
//   return (
//     <div key={y.items}>
//       <h3>{y.id}</h3>
//     </div>
//   )
// }
