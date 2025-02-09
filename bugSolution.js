useEffect(() => {
  //Correct logic, updating only when necessary
  setCount(prevCount => prevCount + 1);
}, []);