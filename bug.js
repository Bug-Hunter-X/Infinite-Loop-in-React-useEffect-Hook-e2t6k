useEffect(() => {
  //Incorrect logic causing infinite loop
  setCount(count + 1);
}, [count]);