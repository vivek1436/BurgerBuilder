import React from 'react';

const Adder = ({ ingredients, cost }) => {
  return (
    <div style={{ paddingTop: '10%' }}>
      <h3 style={{ paddingLeft: '15%' }}>Cost :{cost}$</h3>
      <div
        style={{
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.2)',
          alignItems: 'center',
          justifyContent: 'center',
          width: 250,
          height: 25,
          backgroundColor: '#c0392b',
          borderRadius: 50,
          marginLeft: '5%',
          marginBottom: '2%',
        }}
      ></div>
      {ingredients.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              width: 200,
              height: 20,
              backgroundColor: item,
              marginLeft: '9%',
              marginTop: '2%',
            }}
          ></div>
        );
      })}
      <div
        style={{
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.2)',
          alignItems: 'center',
          justifyContent: 'center',
          width: 250,
          height: 25,
          backgroundColor: '#c0392b',
          borderRadius: 10,
          marginLeft: '5%',
          marginTop: '2%',
        }}
      ></div>
    </div>
  );
};

export default Adder;
