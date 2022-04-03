import { actualDataTypes, gifDataTypes, cardActionTypes } from "../../Types/cardType";

export const ACTION_SET_FAVOURITE_STATUS = "ACTION_SET_FAVOURITE_STATUS";
export const ACTION_SET_LIKED_CARDS_DATA = "ACTION_SET_LIKED_CARDS_DATA";
export const ACTION_SET_GIF_DATA = "ACTION_SET_GIF_DATA";
export const ACTION_SET_NOTIFICATION_VISIBLE_STATUS = "ACTION_SET_NOTIFICATION_VISIBLE_STATUS";
export const ACTION_SORT_CARDS_PRICE_DECREASE =
  "ACTION_SORT_CARDS_PRICE_DECREASE";
export const ACTION_SORT_CARDS_PRICE_INCREASE =
  "ACTION_SORT_CARDS_PRICE_INCREASE";
export const ACTION_SORT_CARDS_AGE_DECREASE = "ACTION_SORT_CARDS_AGE_DECREASE";
export const ACTION_SORT_CARDS_AGE_INCREASE = "ACTION_SORT_CARDS_AGE_INCREASE";
export const ACTION_FETCH_CARDS = "ACTION_FETCH_CARDS";
export const ACTION_FETCH_CARDS_DATA_TOGGLE = "ACTION_FETCH_CARDS_DATA_TOGGLE";
export const ACTION_SET_FETCH_CARDS_DATA_ERROR_STATUS = "ACTION_SET_FETCH_CARDS_DATA_ERROR_STATUS";
export const ACTION_SET_FETCH_CARDS_DATA_ERROR_MESSAGE = "ACTION_SET_FETCH_CARDS_DATA_ERROR_MESSAGE";


export const setFetchCardsDataErrorMessage = (value: string): cardActionTypes => {
  return {
    type: ACTION_SET_FETCH_CARDS_DATA_ERROR_MESSAGE,
    payload: {
      value,
    },
  };
};

export const setNotificationVisibleStatus = (status: boolean): cardActionTypes => {
  return {
    type: ACTION_SET_NOTIFICATION_VISIBLE_STATUS,
    payload: {
      status
    },
  };
};

export const setFetchCardsDataErrorStatus = (value: boolean): cardActionTypes => {
  return {
    type: ACTION_SET_FETCH_CARDS_DATA_ERROR_STATUS,
    payload: {
      value,
    },
  };
};

export const fetchCardsDataToggle = (value: boolean): cardActionTypes => {
  return {
    type: ACTION_FETCH_CARDS_DATA_TOGGLE,
    payload: {
      value,
    },
  };
};

export const fetchCards = (data: actualDataTypes[]): cardActionTypes => {
  return {
    type: ACTION_FETCH_CARDS,
    payload: data,
  };
};

export const setLikedCardsData = (data: actualDataTypes[]): cardActionTypes => {
  return {
    type: ACTION_SET_LIKED_CARDS_DATA,
    payload: data,
  };
};

export const setGifData = (data: gifDataTypes[]): cardActionTypes => {
  return {
    type: ACTION_SET_GIF_DATA,
    payload: data,
  };
};

export const setFavouriteStatus = (
  id: string,
  status: boolean
): cardActionTypes => {
  return {
    type: ACTION_SET_FAVOURITE_STATUS,
    payload: { id, status },
  };
};

export const toggleSortCardsPriceDecrease = (
  id: string,
  status: boolean
): cardActionTypes => {
  return {
    type: ACTION_SORT_CARDS_PRICE_DECREASE,
    payload: { id, status },
  };
};

export const toggleSortCardsPriceIncrease = (
  id: string,
  status: boolean
): cardActionTypes => {
  return {
    type: ACTION_SORT_CARDS_PRICE_INCREASE,
    payload: { id, status },
  };
};

export const toggleSortCardsAgeDecrease = (
  id: string,
  status: boolean
): cardActionTypes => {
  return {
    type: ACTION_SORT_CARDS_AGE_DECREASE,
    payload: { id, status },
  };
};

export const toggleSortCardsAgeIncrease = (
  id: string,
  status: boolean
): cardActionTypes => {
  return {
    type: ACTION_SORT_CARDS_AGE_INCREASE,
    payload: { id, status },
  };
};


