//JSX JavaScript XML

const app = {
  title: 'Indecision App',
  subtitle: 'Put Your Life In The Hands Of Computer',
  options: []
};

const formSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  };
};

const onRemoveAll = () => {
  app.options.length = 0;                      //app.options = [];
  render();
};

const onMakeDecision = () => {
  const rndNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[rndNum];
  alert(option);
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length===0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {app.options.map((option) => {
            return <li key={option}>{option}</li>
        })
        }
      </ol>
      <form onSubmit={formSubmit}>
        <input type="text" name="option" />
        <button>Add Options</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('App');

render();

//cahllenge--> 1

// const user = {
//   name: 'Tahera',
//   age: 25,
//   location: 'Bihar'

// };

// function getLocation(location) {
//   if (location) {
//     return <h3>location: {location}</h3>;
//   }
// }
// const template2 = (
//   <div>
//     <h1>{user.name ? user.name : 'notfound'}
//     </h1>
//     <h3>{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//     </h3>
//     {getLocation(user.location)}
//   </div>
// );

