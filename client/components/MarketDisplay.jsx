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
    <ul>
      <li><label>Market ID:</label> {props.market.marketId}</li>
      <li><label>Location:</label> {props.market.location}</li>
      <li><label>Cards:</label> {props.market.cards}</li>
      <li><label>% of Total:</label> {props.market.percentOfTotals}</li>

      <li>
        <button onClick={() => props.addCard(props.market.marketId)}>Add Card</button>
        <button onClick={() => props.deleteCard(props.market.marketId)}>Delete Card</button>
      </li>
    </ul>
  </div>
);

export default MarketDisplay;
