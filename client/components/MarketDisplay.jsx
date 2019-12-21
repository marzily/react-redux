/**
 * ************************************
 *
 * @module  MarketDisplay
 * @author
 * @date
 * @description presentation component that renders a single box for each market
 *
 * ************************************
 */

import React from 'react';

const MarketDisplay = (props) => (
  <div className="marketBox">
    <p>Market ID: {props.market.marketId}</p>
    <p>Location: {props.market.location}</p>
    <p>Cards: {props.market.cards}</p>
    <p>% of Total: {props.market.percentOfTotals}</p>
    <button onClick={() => props.addCard(props.market.marketId)}>Add Card</button>
    <button>Delete Card</button>
  </div>
);

export default MarketDisplay;
