import React from 'react';
import StyledButton from './StyledButton';
import './FlagChoices.css';

const FlagChoices = props => {
  let options = props.options || [];
  const { handleChange, handleSubmit } = props;
  let inputs = options.map(option => (
    <lable key={option.id}>
      <input type="radio"
             value={ option.id }
             checked={ option.checked }
             onChange={ handleChange }
             name='flag-choice' />
      { option.name }
    </lable>
  ));

  return (
    <form className="flag-form" onSubmit={ handleSubmit }>
      { inputs }
      <StyledButton text="GUESS" type="submit" />
    </form>
  );
}

export default FlagChoices;