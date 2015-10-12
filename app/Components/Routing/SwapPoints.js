var React = require('react');
var Actions = require('../../actions');
var store = require('../../reducer');


var SwapPoints = React.createClass({
  swapPoints: function(){
    var tempPoint = this.props.startPoint;
    store.dispatch(this.props.updateStartPointAction(this.props.destPoint));
    store.dispatch(this.props.updateDestPointAction(tempPoint));
  },
  render: function(){
    return (
    <div className = "swapPoints"
          onClick= {this.swapPoints} />
    );
  }
})

module.exports = SwapPoints;