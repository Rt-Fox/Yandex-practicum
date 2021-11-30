import {
  DELETE_ITEM,
  CANCEL_PROMO,
  DECREASE_ITEM,
  INCREASE_ITEM,
  GET_ITEMS_FAILED,
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_RECOMMENDED_ITEMS_FAILED,
  GET_RECOMMENDED_ITEMS_REQUEST,
  GET_RECOMMENDED_ITEMS_SUCCESS,
  APPLY_PROMO_REQUEST,
  APPLY_PROMO_SUCCESS,
  APPLY_PROMO_FAILED,
  TAB_SWITCH
} from '../actions/cart';

const initialState = {
  items: [],
  itemsRequest: false,
  itemsFailed: false,

  recommendedItems: [],
  recommendedItemsRequest: false,
  recommendedItemsFailed: false,

  promoCode: 'PROMOCODE',
  promoDiscount: 50,
  promoRequest: false,
  promoFailed: false,
  currentTab: 'items'
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS_REQUEST: {
      return {
        ...state,
        itemsRequest: true
      };
    }
    case GET_ITEMS_SUCCESS: {
      return { ...state, itemsFailed: false, items: action.items, itemsRequest: false };
    }
    case GET_ITEMS_FAILED: {
      return { ...state, itemsFailed: true, itemsRequest: false };
    }
    case GET_RECOMMENDED_ITEMS_REQUEST: {
      return {
        ...state,
        recommendedItemsRequest: true
      };
    }
    case GET_RECOMMENDED_ITEMS_SUCCESS: {
      return { ...state, recommendedItemsFailed: false, recommendedItems: action.items, recommendedItemsRequest: false };
    }
    case GET_RECOMMENDED_ITEMS_FAILED: {
      return { ...state, recommendedItemsFailed: true, recommendedItemsRequest: false };
    }
    case APPLY_PROMO_REQUEST: {
      return {
        ...state,
        promoRequest: true
      };
    }
    case APPLY_PROMO_SUCCESS: {
      return { ...state,
        promoCode: action.value.code,
        promoDiscount: action.value.discount,
        promoRequest: false };
    }
    case APPLY_PROMO_FAILED: {
      return { ...state, promoCode: '', promoDiscount: null, promoFailed: true, promoRequest: false };
    }
    case TAB_SWITCH: {
      return {
        ...state,
        currentTab: state.currentTab === 'items' ? 'postponed' : 'items'
      };
    }
    case INCREASE_ITEM: {
      return {
        ...state,
        items: [...state.items].map(item =>
          item.id === action.id ? { ...item, qty: ++item.qty } : item
        )
      };
    }
    case DECREASE_ITEM: {
      return {
        ...state,
        items: [...state.items].map(item =>
          item.id === action.id ? { ...item, qty: --item.qty } : item
        )
      };
    }
    case DELETE_ITEM: {
      return { ...state, items: [...state.items].filter(item => item.id !== action.id) };
    }
    case CANCEL_PROMO: {
      return {
        ...state,
        promoCode: '',
        promoDiscount: null
      };
    }
    default: {
      return state;
    }
  }
};
