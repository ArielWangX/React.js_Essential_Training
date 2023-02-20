import "./App.css";

const tahoe_peaks = [
  { name: "Freel", elevation: 10891},
  { name: "Monument", elevation: 10067},
  { name: "Pyramid", elevation: 9989},
  { name: "Tallac", elevation: 9735}
];

// if data does not exist, return renderEmpty
//else return <ul></ul>
function List({data, renderItem, renderEmpty}) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item) => (
        <li key={item.name}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <List
      data={tahoe_peaks}
      renderItem={item => (
        // <></> react fragment
        <>{item.name} - {item.elevation} ft.</>
      )}
      renderEmpty={<p>This list is empty</p>}
    />
  );
}

export default App;
