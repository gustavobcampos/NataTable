// Import the React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'
import Table from './tableRow'
import tableData from './data.json'


// Create a react component
const App = () => {


  return (
    <Table data={tableData}></Table>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
