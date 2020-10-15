import { FAVORITE_PRODUCTS } from '../actions/types';

const defaultState: any = [];

const favoriteProducts = (state = defaultState, action: any) => {
  switch (action.type) {
    case FAVORITE_PRODUCTS:
      return action.newFavorite;
    default:
      return state;
  }
};

export default favoriteProducts;
