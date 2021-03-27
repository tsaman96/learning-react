class VisibilityToggle extends React.Component{
  constructor(props){
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      visibility: false
    }
  }
  handleToggle(){
    this.setState(() => {
      return {
        visibility: !(this.state.visibility)
      };
  
    });
    console.log(visibility);
  }
  render(){
    return (
      <div>
      <h1>Visibility Toggle</h1>
      <button onClick={this.handleToggle}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
      {this.state.visibility && <p>Now you can see the details!</p>}
      </div>
    )
  }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('App'));


// let visibility = false;
// const buttonState = () => {
//   visibility = !visibility;
//   visible();
// };

// const visible = () => {
//   const JSX = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={buttonState}>{visibility ? 'Hide Details': 'Show Details'}</button>
//       {visibility && <p>Hey. These things you only can see when click 'Show Details'</p>}
//     </div>
//   );
//   ReactDOM.render(JSX, document.getElementById('App'));
// };
// visible();