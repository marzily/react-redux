/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  totalMarkets: 0,
  totalCards: 0,
  marketList: [],
  lastMarketId: 10000,
  newLocation: '',
};

const marketsReducer = (state=initialState, action) => {
  let marketList;

  switch (action.type) {
    case types.ADD_MARKET:
      // increment lastMarketId and totalMarkets counters
      let lastMarketId = state.lastMarketId + 1;
      let totalMarkets = state.totalMarkets + 1;
      // create the new market object from provided data
      const newMarket = {
          // what goes in here?
          marketId: lastMarketId,
          location: state.newLocation,
          cards: 0,
          percentOfTotals: 0
      };

      // push the new market onto a copy of the market list
      marketList = state.marketList.slice();
      marketList.push(newMarket);

      // return updated state
      return {
        ...state,
        marketList,
        lastMarketId,
        totalMarkets,
        newLocation: '',
      };

    case types.SET_NEW_LOCATION:
      return {
        ...state,
        newLocation: action.payload
      }

    case types.ADD_CARD:
      function findMarket() {
        for (let i = 0; i < marketList.length; i++){
          let currentMarket = marketList[i];

          if (currentMarket.marketId === action.payload) {
            return currentMarket;
          }
        }
      }

      marketList = state.marketList.slice();
      console.log(marketList);
      const market = findMarket();
      market.cards += 1

      const totalCards = state.totalCards + 1;
      market.percentOfTotals = (market.cards / totalCards) * 100;

      return {
        ...state,
        totalCards: totalCards,
        marketList: marketList
      }

    case types.DELETE_CARD:


    default:
      return state;
  }
};

export default marketsReducer;
