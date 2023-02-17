import "./App.css";

const [firstCity, secondCity] = ["Tokyo", "Tahoe City", "Bend"]

console.log(firstCity)

function App({ library }) {
  return (
    <div className="App">
      <h1>Hello from {library}</h1>
    </div>
  );
}

export default App;
