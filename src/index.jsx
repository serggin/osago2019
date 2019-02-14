import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import '../public/css/style.css';




import appReducer from "./reducers";
import App from "./components/App.jsx";
//import {subscribeCalculator} from "./components/App.jsx";

let store = createStore(appReducer)
//subscribeCalculator(store)

store.subscribe(()=>{
    console.log('state changed:', store.getState())
})

//console.log('store  '+store.getState())
ReactDOM.render(<App store={store} />,
    document.getElementById('content')
)