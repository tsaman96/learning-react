let visibility = false;
const buttonState = () => {
  visibility = !visibility;
  visible();
};

const visible = () => {
  const JSX = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={buttonState}>{visibility ? 'Hide Details': 'Show Details'}</button>
      {visibility && <p>Hey. These things you only can see when click 'Show Details'</p>}
    </div>
  );
  ReactDOM.render(JSX, document.getElementById('App'));
};
visible();