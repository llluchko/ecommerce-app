import { takeLatest, call, put } from 'redux-saga/effects';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import {
  fetchCollectionSuccess,
  fetchCollectionsFailure,
} from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    // yield helps to cancel, etc...; with yield it's easier to test
    const snapshot = yield collectionRef.get();
    // call takes some function and the second params is the param that we pass into that function
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    // put() is the saga effect for creating actions -> like dispatch , but we have to yield it
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  // takeEvery non-blocking call - to not stop our app / spotting new Sagas on every call
  // do we want to block the code or no -> use take() for blocking
  // takeLatest => use only the last one (don't call the api separate times)
  yield takeLatest(
    // listening here...
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
