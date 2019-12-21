/**
 * ************************************
 *
 * @module  MarketsDisplay
 * @author
 * @date
 * @description presentation component that renders n MarketDisplay components
 *
 * ************************************
 */

import React from 'react';
import MarketDisplay from './MarketDisplay.jsx';


const MarketsDisplay = (props) => {

  const marketComponents = props.marketList.map((market, i) => {
    return <MarketDisplay key={i} market={market} addCard={props.addCard}/>;
  })

  return(
    <div className="displayBox">
      <h4>Markets</h4>
      {marketComponents}
    </div>
  );
};

export default MarketsDisplay;
