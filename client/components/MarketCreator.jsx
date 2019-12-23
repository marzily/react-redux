/**
 * ************************************
 *
 * @module  MarketCreator
 * @author
 * @date
 * @description presentation component that takes user input for new market creation
 *
 * ************************************
 */

import React from 'react';

const MarketCreator = props => (
  // how do we create the circuit between the store and an input field?
  // how do we update the store from a presentation component?
  <div>
    <h3>Create New Market</h3>
    <div>
      <form>
        <label>Location:</label> <input type="text" value={props.newLocation} onChange={props.setNewLocation}/>
        <input type="submit" value="Add Market" onClick={props.addMarket}/>
      </form>
    </div>
  </div>
);

export default MarketCreator;
