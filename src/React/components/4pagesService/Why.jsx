import React from 'react';


const Why = (props) => {
  return (
    <div>
    <img src={props.circle} alt='background cercle' />
    <div>
      <p>{props.content}</p>
    </div>
      
    </div>
  );
};

export default Why;