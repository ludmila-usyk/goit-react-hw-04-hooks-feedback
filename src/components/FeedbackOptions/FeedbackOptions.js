import React from 'react';
import style from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
      <ul className={style.item}>
        {options.map(el => (
          <li key={el}>
            <button type="button" name={el} onClick={onLeaveFeedback}  className={style.list}>
              {el}
            </button>
          </li>
        ))}
      </ul>
  );
}

export default FeedbackOptions;