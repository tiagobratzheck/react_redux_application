import React from 'react';
import { combineReducers, createStore } from 'redux';

function App() {


  console.clear();

  // Action creators
  const createPolicy = (name, amount) => {
    return { // action - send a form in our analogy
      type: 'CREATE_POLICY',
      payload: {
        name: name,
        amount: amount
      }
    };
  }

  const deletePolicy = (name) => {
    return {
      type: 'DELETE_POLICY',
      payload: {
        name: name
      }
    };
  }

  const createClaim = (name, amountOfMoneyToCollect) => {
    return {
      type: 'CREATE_CLAIM',
      payload: {
        name: name,
        amountOfMoneyToCollect: amountOfMoneyToCollect
      }
    }
  }



  // Reducers (Departments...)
  const claimsHistory = (oldListOfClaims = [], action) => {
    if (action.type === 'CREATE_CLAIM') {
      return [...oldListOfClaims, action.payload];
    }
    return oldListOfClaims;
  }

  const accounting = (bagOfMoney = 1000, action) => {
    if (action.type === 'CREATE_CLAIM') {
      return bagOfMoney - action.payload.amountOfMoneyToCollect;
    } else if (action.type === 'CREATE_POLICY') {
      return bagOfMoney + action.payload.amount;
    }
    return bagOfMoney;
  }

  const policies = (listOfPolicies = [], action) => {
    if (action.type === 'CREATE_POLICY') {
      return [...listOfPolicies, action.payload.name];
    } else if (action.type === 'DELETE_POLICY') {
      return listOfPolicies.filter(name => name !== action.payload.name);
    }
    return listOfPolicies;
  }


  //Create the store
  const ourDepartments = combineReducers({
    accounting: accounting,
    claimsHistory: claimsHistory,
    policies: policies
  });

  const store = createStore(ourDepartments);

  const action = createPolicy('Tiago', 200);
  const action2 = createPolicy('Bob', 300);
  const claim = createClaim('Junior', 500);
  const exclude = deletePolicy('Bob');

  store.dispatch(action);
  store.dispatch(action2);
  store.dispatch(claim);
  store.dispatch(exclude);
  console.log(store.getState());

  return (
    <div>
      <h1>Redux example</h1>
    </div>
  );
}

export default App;
