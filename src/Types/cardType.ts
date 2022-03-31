import {
  ACTION_FETCH_TOGGLE,
  ACTION_FETCH_CARDS,
  ACTION_SET_LIKED_CARDS_DATA,
  ACTION_SORT_CARDS_PRICE_DECREASE,
  ACTION_SORT_CARDS_PRICE_INCREASE,
  ACTION_SORT_CARDS_AGE_DECREASE,
  ACTION_SORT_CARDS_AGE_INCREASE,
  ACTION_SET_FETCH_ERROR_MESSAGE,
  ACTION_SET_FETCH_ERROR_STATUS,
} from "../Redux/Actions/cardActions";

export interface CardStateTypes {
  cards: actualDataTypes[];
  likedCardsData: actualDataTypes[];
  sortButtons: any[];
  isFetching: boolean;
  isFetchError: boolean;
  fetchErrorMessage: string;
}

export interface actualDataTypes {
  id: string,
  image: string,
  name: string,
  location: string,
  paw: string,
  age: string,
  price: string,
  discount: string,
  discountStatus: boolean,
  cardStatus: boolean,
  isFavourite: boolean,
}


interface setFetchErrorStatus {
  type: typeof ACTION_SET_FETCH_ERROR_STATUS;
  payload: {
    value: boolean;
  };
}

interface setFetchErrorMessage {
  type: typeof ACTION_SET_FETCH_ERROR_MESSAGE;
  payload: {
    value: string;
  };
}

interface fetchToggle {
  type: typeof ACTION_FETCH_TOGGLE;
  payload: {
    value: boolean;
  };
}

interface fetchCards {
  type: typeof ACTION_FETCH_CARDS;
  payload: any[];
}

interface setLikedCardsData {
  type: typeof ACTION_SET_LIKED_CARDS_DATA;
  payload: {
    id: string;
    status: boolean;
  };
}

interface toggleSortCardsPriceDecrease {
  type: typeof ACTION_SORT_CARDS_PRICE_DECREASE;
  payload: {
    id: string;
    status: boolean;
  };
}

interface toggleSortCardsPriceIncrease {
  type: typeof ACTION_SORT_CARDS_PRICE_INCREASE;
  payload: {
    id: string;
    status: boolean;
  };
}

interface toggleSortCardsAgeDecrease {
  type: typeof ACTION_SORT_CARDS_AGE_DECREASE;
  payload: {
    id: string;
    status: boolean;
  };
}

interface toggleSortCardsAgeIncrease {
  type: typeof ACTION_SORT_CARDS_AGE_INCREASE;
  payload: {
    id: string;
    status: boolean;
  };
}

export type cardActionTypes =
  | setFetchErrorStatus
  | setFetchErrorMessage
  | fetchToggle
  | fetchCards
  | setLikedCardsData
  | toggleSortCardsPriceDecrease
  | toggleSortCardsPriceIncrease
  | toggleSortCardsAgeDecrease
  | toggleSortCardsAgeIncrease;
