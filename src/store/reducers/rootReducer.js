import {Component, useEffect, useState} from "react";
import React from "react";

const initState = {
  count: 10,
  type: 'Nothing'
}


const Data = () => {
  fetch('https://redux-simple-b7852-default-rtdb.asia-southeast1.firebasedatabase.app/state.json').then(response => response.json()).then(responseData => {
    console.log(responseData);
  });
}

Data();

const rootReducer = (state = initState, action) => {

  switch (action.type) {
    case 'PLUS': {
      return {
        count: state.count + 1,
        type: 'Plus'
      }
    }
    case 'MINUS': {
      return {
        count: state.count - 1,
        type: 'Minus'
      }
    }

    default: return state
  }


}

export default rootReducer;