/**
 * ************************************
 *
 * @module  TotalsDisplay
 * @author
 * @date
 * @description presentation component that displays the total cards and total markets
 *
 * ************************************
 */

import React from 'react';

const TotalsDisplay = props => (
  <div className="innerbox" id="totals">
    <p>
      <label htmlFor="totalCards">Total Cards: </label>
      <span id="totalCards">{props.totalCards}</span>
    </p>
    <p>
      <label htmlFor="totalMarkets">Total Markets: </label>
      <span id="totalCards">{props.totalMarkets}</span>
    </p>
  </div>
);
export default TotalsDisplay;
