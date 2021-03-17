let count = 0;


const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};


const renderCounterApp = () => {
  const template3 = (
    <div>
      <h1>count: {count}</h1>
      <button id="my-id" className="" onClick={addOne} >+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  const appRoot = document.getElementById('App');
  ReactDOM.render(template3, appRoot);

};

renderCounterApp();