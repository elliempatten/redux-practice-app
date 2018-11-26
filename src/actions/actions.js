
export const INCREASE_COUNT = "INCREASE_COUNT";
export const DECREASE_COUNT = "DECREASE_COUNT";
export const TOGGLE_SWITCH = "TOGGLE_SWITCH";
export const CHANGE_COLOUR = "CHANGE_COLOUR";

export const COLOUR_OPTIONS = [{name: "pink", hex: "#FF85A1"}, {name: "purple", hex: "#8079E8"}, {name: "blue", hex: "#92FFE2"}, {name: "green", hex: "#D4E879"}, {name: "orange", hex: "#FFBF75"}];

export function increaseCount(){
  console.log("in actions");
  return {type: INCREASE_COUNT}
}

export function decreaseCount(){
  return {type: DECREASE_COUNT}
}

export function toggleSwitch(){
  return {type: TOGGLE_SWITCH}
}

export function changeColour(colour){
  return {type: CHANGE_COLOUR, colour}
}

