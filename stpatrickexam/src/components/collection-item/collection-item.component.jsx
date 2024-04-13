import React from "react";
import { addItemToCart } from "../../redux/cart";
import { CustomButton } from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";
import { store } from "../../redux/store";

export const CollectionItem = ({ item }) => {
  const { name, price, imageUrl, id } = item;
  return (
    <div className="collection-item" key={item.id}>
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton
        onClick={() =>
          store.dispatch(
          addItemToCart
           ({
              quantity: 1,
              imageUrl,
              name,
              price,
              id
            })
          )
        }
        inverted
      >
        Add to Cart
      </CustomButton>
    </div>
  );
};
const mapStateToProps = (state) => ({
  addItem: state.cart.cartItems,
});

//const CollectionItem = connect(mapStateToProps)(CollectionItemComponent);

export default mapStateToProps;

// const mapDispatchToProps = dispatch => ({
//   addItem: item => dispatch(addItem(item))
// });

// export default connect(
//   null,
//   mapDispatchToProps
// )(CollectionItem);
