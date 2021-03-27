class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    const json = localStorage.getItem('count');
    const count = parseInt(json, 10);
    if (!NaN) {
      this.setState(() => ({ count }))
    }
  }
  componentDidUpdate(prevState) {
    if (prevState !== this.setState.count) {
      localStorage.setItem('count', this.state.count);
    }

  }
  handleAddOne() {
    this.setState({ count: this.state.count + 1 })
    //  this.setState((prevState) => {
    //    return {
    //      Count: prevState.Count + 1
    //    };
    //  });
  }

  handleMinusOne() {
    this.setState({ count: this.state.count - 1 });
    // this.setState((prevState) => {
    //   return {
    //     Count: prevState.Count - 1
    //   };
    // });
  }
  handleReset() {
    // this.state.count = 0;
    // console.log(this.state.count);
    this.setState({ count: 0 });
    // this.setState(() => {
    //   return {
    //     Count: 0
    //   };
    // });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }

}
ReactDOM.render(<Counter />, document.getElementById('App'));
// let count = 0;


// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };


// const renderCounterApp = () => {
//   const template3 = (
//     <div>
//       <h1>count: {count}</h1>
//       <button id="my-id" className="" onClick={addOne} >+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );
//   const appRoot = document.getElementById('App');
//   ReactDOM.render(template3, appRoot);

// };

// renderCounterApp();