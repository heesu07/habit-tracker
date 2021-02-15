import React, { memo }  from 'react';
// 'rsi'를 이용한 function component 만들기.

const HabitAddForm = memo(
  (props) => {
    const inputRef = React.createRef();
    const onSubmit = (event) =>{
      event.preventDefault();    
      const name =inputRef.current.value;
      console.log(name);
      name && props.onAdd(name);
      inputRef.current.value = '';
      
    }
    return (
      <div>
        <form  action="" className="add-form" onSubmit = {onSubmit}>
          <input 
            ref={inputRef} 
            type="text" 
            className="add-input" 
            placeholder="new" 
          />
          <button className="add-button">Add</button>
        </form>
      </div>
    );
  }
);


export default HabitAddForm;

