/**
 * ************************************
 *
 * @module  MarketsContainer
 * @author
 * @date
 * @description stateful component that renders MarketCreator and MarketDisplay
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';
// import child components...
import MarketCreator from '../components/MarketCreator.jsx'
import MarketsDisplay from '../components/MarketsDisplay.jsx'

const mapStateToProps = store => ({
  // provide pertinent state here
  // new location
  // marketList
  newLocation: store.markets.newLocation,
  marketList: store.markets.marketList
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  addMarket: (e) => {
    e.preventDefault();
    dispatch(actions.addMarket());
  },
  setNewLocation: (e) => {
    dispatch(actions.setNewLocation(e.target.value));
  },
  addCard: (marketId) => {
    dispatch(actions.addCard(marketId));
  },
  deleteCard: (marketId) => {
    dispatch(actions.deleteCard(marketId));
  }
});

class MarketsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="innerbox">
        { /* add components here... */ }
        <MarketCreator
          addMarket={this.props.addMarket}
          setNewLocation={this.props.setNewLocation}
          newLocation={this.props.newLocation}
        />
        <MarketsDisplay
          marketList={this.props.marketList}
          addCard={this.props.addCard}
          deleteCard={this.props.deleteCard}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketsContainer);
