/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import TotalsDisplay from '../components/TotalsDisplay.jsx'
import MarketsContainer from '../containers/MarketsContainer.jsx'
// import from child components...


const mapStateToProps = store => ({
  // add pertinent state here
  totalCards: store.markets.totalCards,
  totalMarkets: store.markets.totalMarkets
});

const mapDispatchToProps = dispatch => ({

});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        <div className="outerBox">
          <h1 id="header">MegaMarket Loyalty Cards</h1>
          { /* Start adding components here... */ }
        </div>
        <div>
          <TotalsDisplay totalMarkets={this.props.totalMarkets} totalCards={this.props.totalCards}/>
          <MarketsContainer />
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
