
// import { useContext } from "react";

// import { CategoryPreview } from "../../components/category-preview/category-preview.component";
// // import { CollectionPreview } from "../../components/category-preview/category-preview.component";
// import { CategoriesContext } from "../../contexts/categories.context";
// import { ProductCard } from "../../components/product-card/product-card.component";
// import "./shop.styles.scss";

// export const Shop = () => {
//   const { products } = useContext(CategoriesContext);

//   return (
//     <div className="shop-container">
//       {Object.keys(products).map((title) => {
//         const products = products [title];
//         return (
//           <CategoryPreview key={title} title={title} products={products} />
//         );
//       })}

//       <div className="products-container">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };



//shop 2





// import React from 'react';
// import { Route } from 'react-router-dom';
// import { CollectionPage ,CollectionsOverview } from '../../components';

// // import CollectionsOverview from '../../components/collections-overview/collections-overview.component';


// export const ShopPage = ({ match }) => (
//   <div className='shop-page'>
//     <Route exact path={`${match.path}`} component={CollectionsOverview} />
//     <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//   </div>
// );

// // export default ShopPage;
