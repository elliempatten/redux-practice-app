import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { increaseCount, decreaseCount, toggleSwitch, changeColour } from './actions/actions';
import store from './store';
import { COLOUR_OPTIONS } from "./actions/actions";


const App = ({ counter, toggleOn, colours }) =>(
        <div className={colours.colour.name}><h1>Counter: { counter.count }</h1>
        <h2>Switch: { String( toggleOn.isSwitchOn ) }</h2>
        <h2>Colour: {colours.colour.name}</h2>
        <button  onClick= {function(){store.dispatch(increaseCount());}}>Increment</button>
        <button onClick = {function(){store.dispatch(decreaseCount())}}>Decrement</button>
        <button onClick= {function(){store.dispatch(toggleSwitch())}}>ON/OFF</button>
        { COLOUR_OPTIONS.map((eachColour)=>{
          return(
          <button key={eachColour.name} onClick = {function(){store.dispatch(changeColour(eachColour))}} style={{background: eachColour.hex}}>{eachColour.name}</button>
          )
        })}
        </div>
    );
  
const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(App);
