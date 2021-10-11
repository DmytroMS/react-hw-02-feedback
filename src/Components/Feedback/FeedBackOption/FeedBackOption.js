import React from 'react';
import s from './FeedBackOption.module.css';

const FeedBackOption = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option, inx) => (
        <button
          className={s.feedback__btn}
          key={inx}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </>
  );
};

export default FeedBackOption;
