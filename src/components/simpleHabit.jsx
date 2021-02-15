// React hook 사용 가이드
import React, { useCallback, useState, useRef, useEffect } from 'react'

const SimpleHabit = (props) => {
  const [count,setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() =>{
      setCount(count + 1);
    });
  useEffect(() =>{
    console.log(`mounted & updated! : ${count}`);
  }, [count]); 
  // 배열이 빈 경우 처음에만 호출되고, 
  //내용이 있으면 해당 값이 변경될 때도 업데이트 된다.
  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button 
        className="habit-button habit-increase" 
        onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
      
    </li>
  )
};

export default SimpleHabit;
