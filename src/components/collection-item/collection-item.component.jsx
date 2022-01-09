import React from 'react';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

// if we use {}, we are rendering multiple javascript out of this function
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='collection-footer'>
        <span className='name'> {name} </span>
        <span className='price'> {price} </span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

// when we dispatch / call this function
// dispatch the object in to the store
const mapDispatchToPros = (dispatch) => ({
  // addItem is prop that return action
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToPros)(CollectionItem);
