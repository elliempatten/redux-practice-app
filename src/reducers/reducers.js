import { combineReducers } from 'redux';
import { INCREASE_COUNT, DECREASE_COUNT, TOGGLE_SWITCH, CHANGE_COLOUR, COLOUR_OPTIONS }  from '../actions/actions';

const initialCounterState= { count: 1};
const initialToggleState = {isSwitchOn: false};
const initialColourState = {colour: COLOUR_OPTIONS[0]};

const counter = (state = initialCounterState, action) =>{
  switch(action.type){
    case INCREASE_COUNT:
      return Object.assign({}, state, { count: state.count + 1})
     case DECREASE_COUNT:
       return Object.assign({}, state, { count: state.count -1})
  default: 
  return state;
}
}

const toggleOn = (state = initialToggleState, action) =>{
  switch (action.type){
    case TOGGLE_SWITCH:
      return Object.assign({}, state, {isSwitchOn: !state.isSwitchOn})
    default:
    return state;
  }
  

}

const colours = (state = initialColourState, action)=>{
  switch (action.type){
    case CHANGE_COLOUR:
      return Object.assign({}, state, {colour: (action.colour)})
    default:
    return state;
  }
}

const countersAndToggle = combineReducers({counter, toggleOn, colours});


export default countersAndToggle;
