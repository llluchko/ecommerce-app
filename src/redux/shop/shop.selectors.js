import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

// store the data in object instead of an array is called data normalization
// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5,
// };

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  // return array with the keys from an object
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

// Memoize does the same idea of memoization as reselect does for our selectors,
// except this time we're memoizing the return of our function which returns our selector:
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    // there is now data here -> render empty state if I need to
    (collections) => (collections ? collections[collectionUrlParam] : null)
    // collections.find(
    //   (collection) => collection.id == COLLECTION_ID_MAP[collectionUrlParam]
    // )
  )
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  // !!0; !!'', !!null => false
  (shop) => !!shop.collections
);
