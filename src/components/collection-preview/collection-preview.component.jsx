import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'> {title.toUpperCase()} </h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

// whetever the component is rendered or rerendered filter() and map() get called every time - anonymous functions calls

export default CollectionPreview;
