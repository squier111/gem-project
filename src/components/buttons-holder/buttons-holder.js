import React from 'react';
import './buttons-holder.scss';

const ButtonsHolder = () => {
  return (
    <div className="btn-holder">
        <button className="api-key-btn">Get API Keys →</button>
        <span>or</span>
        <button className="view">view the docs»</button>
    </div>
    )
}

export default ButtonsHolder;