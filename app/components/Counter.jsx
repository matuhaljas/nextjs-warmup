'use client'

import React, { useState } from 'react'

function Counter() {
    
    const [count, setCount] = useState(0);

    function onAdd () {
        const newCount = count + 1
        setCount(newCount);
    };

  return (
    <div>
        <div>The count is: {count} </div>
        <button onClick={() => onAdd()}>+</button>

    </div>
  )
};

export default Counter