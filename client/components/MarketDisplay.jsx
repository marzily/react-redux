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
    <p><label>Market ID:</label> {props.market.marketId}</p>
    <p><label>Location:</label> {props.market.location}</p>
    <p><label>Cards:</label> {props.market.cards}</p>
    <p><label>% of Total:</label> {props.market.percentOfTotals}</p>
    <button onClick={() => props.addCard(props.market.marketId)}>Add Card</button>
    <button onClick={() => props.deleteCard(props.market.marketId)}>Delete Card</button>
  </div>
);

export default MarketDisplay;
