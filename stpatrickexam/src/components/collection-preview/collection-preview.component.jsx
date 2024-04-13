import React from 'react';
import SHOP_DATA from '../../shopdata';

import { CollectionItem } from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

export const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {SHOP_DATA
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

// export default CollectionPreview;
