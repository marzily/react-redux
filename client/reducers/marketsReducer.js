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
      marketList = deepCopy(state.marketList);
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
      marketList = deepCopy(state.marketList);

      let market = findMarket(marketList, action.payload);

      market.cards += 1
      let totalCards = state.totalCards + 1;

      marketList = recalculatePercentages(marketList, totalCards);

      return {
        ...state,
        totalCards,
        marketList
      }

    case types.DELETE_CARD:
      marketList = deepCopy(state.marketList);

      market = findMarket(marketList, action.payload);
      if (market.cards > 0) {
        market.cards -= 1
        totalCards = state.totalCards - 1;

        marketList = recalculatePercentages(marketList, totalCards);
      } else {
        totalCards = state.totalCards;
      }

      return {
        ...state,
        totalCards,
        marketList
      }

    default:
      return state;
  }
};

function deepCopy(marketList) {
  return marketList.map(market => {
    return {...market};
  });
}

function findMarket(marketList, marketId) {
  return marketList.filter(market => market.marketId === marketId)[0];
}

function recalculatePercentages(marketList, totalCards) {
  marketList.forEach(currentMarket => {
    if (totalCards === 0) {
      currentMarket.percentOfTotals = 0;
    } else {
      currentMarket.percentOfTotals = ((currentMarket.cards / totalCards) * 100).toFixed(2);
    }
  });

  return marketList;
}

export default marketsReducer;
