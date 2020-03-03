import React from 'react';
import '../index.scss';

function Checkbox(props) {
  const { title, num } = props;
  return (
    <>
      <input className="input" name={title} id={`input${num}`} type="checkbox" />
      <label className="input" htmlFor={`input${num}`}>{title}</label>
      <br />
    </>
  );
}

export default Checkbox;
