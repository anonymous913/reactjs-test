import './App.css';

function App() {
  const nayoks = ['Rubel', 'BappaRaz', 'Kuber', 'করিম', 'Raihan', 'Rony', 'Razin']
  const friends = ['Ratul', 'Karim', 'Rasim', 'Talin', 'Selim', 'Rabil', 'Rahim', 'Rubel']
  return (
    <div className="App">
      {
        <h2> This is A Dynamic Web Template <br /> Designed & Developed By: <br /> Md. Mahfuzur Rahman </h2>
      }
      {
      <h2> List of Nayoks </h2>
      }
      {
        nayoks.map(nayoks => <Person name={nayoks}> </Person> ) 
      }
      {
      <h2> List of Friends </h2>
      }
      {
        friends.map(friends => <Friend name={friends}> </Friend> ) 
      }
      {
      <h2> List of Nayoks </h2>
      }
      {
        nayoks.map(nayoks => <li> Name: {nayoks} </li>  )
      }
    </div>
  );
}


function Person(props) {
  console.log('props');
  return (
    <div className="person">
      <h1> Name: {props.name} </h1>
      </div>
  )
}

function Friend(props) {
  console.log(props);
  return (
    <div className="friends"> 
      <h1> Name: {props.name} </h1>
    </div>
  )
}

export default App;
