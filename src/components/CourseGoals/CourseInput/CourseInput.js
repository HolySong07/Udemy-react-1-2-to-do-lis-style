import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [empty, setEmpty]= useState(true);

  const goalInputChangeHandler = event => {
	if (event.target.value.trim().length > 0) {
		setEmpty(true);
	}
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

	if (enteredValue.trim().length === 0) {
		setEmpty(false);
		return;
	} else {
		props.onAddGoal(enteredValue);
		setEnteredValue("");
	}
    
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!empty ? "invalid" : ""}` }>
        <label >Course Goal</label>
		{!empty ? <p>Please, add content </p> : ''}
        <input  type="text" value={enteredValue} onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
