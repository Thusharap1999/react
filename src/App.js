import './App.css';
import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {add, remo} from './redux/action';

function App() {
  const dispatch = useDispatch();
  const product1 = ["Product1", "Product2", "Product3", "Product4"];
  const product2 = ["Product5", "Product6", "Product7", "Product8"];
  const aaaa = useSelector(state=>state);
  const aaa = aaaa.a;
  return (
    <div className="App">
      <div style={{ backgroundColor: "pink", width: '100%' }}>
        <div>
          {product1.map((item, index) => <button key={index} onClick={() => dispatch(add(item))} style={{ margin: 10 }}>{item}</button>)}
        </div>
        <div>
          {product2.map((item, index) => <button key={index} onClick={() => {
            dispatch(add(item));
            }} style={{ margin: 10 }}>{item}</button>)}
        </div>
        <h1>My Cart</h1>
        {aaa.map((item, index) => <div key={index}>{item} <a style={{color:"red", fontSize:10}} onClick={() => {
          aaa.splice(index,1);
          dispatch(remo(aaa));
        }}>delete</a></div>)}
      </div>

    </div>
  );
}

export default App;
