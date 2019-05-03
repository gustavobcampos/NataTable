import React from "react";
import "./stylesheet.css";

function sortByColumn(a, colIndex, reverse) {
  if (reverse === true) {
    a.sort(sortFunction).reverse();
  } else {
    a.sort(sortFunction);
  }

  function sortFunction(a, b) {
    if (a[colIndex] === b[colIndex]) {
      return 0;
    } else {
      return a[colIndex] < b[colIndex] ? -1 : 1;
    }
  }
  return a;
}

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCol: null,
      sortDirection: null,
      tableData: this.props.data,
      headerColor: "darkBlue",
      rowColor: "lightblue"
    };
  }

  handleClick(title, key) {
    if (this.state.activeColumn === key) {
      let toggle = !this.state.sortDirection;
      this.setState({
        sortDirection: toggle,
        activeColumn: key,
        rows: sortByColumn(this.state.tableData, title, toggle)
      });
    } else {
      this.setState({
        activeColumn: key,
        rows: sortByColumn(this.state.tableData, title, false)
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
      <h1>Bem vindo à melhor tabela ordenável e customizável do planeta!</h1>
      <div className="restyleDiv">
        <strong>Personalize o estilo da tabela!</strong>
        <h2>Cores para o cabeçalho: </h2>
        <button style={{color: 'white' ,backgroundColor:  'darkblue'      }}  onClick={()=> this.setState({headerColor: 'darkblue'})}>Darkblue</button>
        <button style={{color: 'white' ,backgroundColor:  'darkcyan'      }}  onClick={()=> this.setState({headerColor: 'darkcyan'})}>Darkcyan</button>
        <button style={{color: 'white' ,backgroundColor:  'darkred'      }}  onClick={()=> this.setState({headerColor: 'darkred'})}>DarkRed</button>
        <button style={{color: 'white' ,backgroundColor:  'darkgreen'      }}  onClick={()=> this.setState({headerColor: 'darkgreen'})}>Darkgreen</button>
        <button style={{color: 'white' ,backgroundColor:  'darkmagenta'      }}  onClick={()=> this.setState({headerColor: 'darkmagenta'})}>Darkmagenta</button>
        <button style={{color: 'white' ,backgroundColor:  'darkorange'      }}  onClick={()=> this.setState({headerColor: 'darkorange'})}>Darkorange</button>
        <button style={{color: 'white' ,backgroundColor:  'darkorchid'      }}  onClick={()=> this.setState({headerColor: 'darkorchid'})}>Darkorchid</button>
        <button style={{color: 'white' ,backgroundColor:  'darkred'      }}  onClick={()=> this.setState({headerColor: 'darkred'})}>DarkRed</button>
        

        <h2>Cores para corpo da tabela:</h2>      
        <button style={{color: 'black' ,backgroundColor:  'lightcyan '      }}  onClick={()=> this.setState({ rowColor: 'lightcyan'})}>Lightcyan</button>
        <button style={{color: 'black' ,backgroundColor:  'lightgray '      }}  onClick={()=> this.setState({ rowColor: 'lightgray'})}>Lightgray</button>
        <button style={{color: 'black' ,backgroundColor:  'lightblue '      }}  onClick={()=> this.setState({ rowColor: 'lightblue'})}>Lightblue</button>
        <button style={{color: 'black' ,backgroundColor:  'lightgreen'      }}  onClick={()=> this.setState({ rowColor: 'lightgreen'})}>Lightgreen</button>
        <button style={{color: 'black' ,backgroundColor:  'lightsalmon'      }}  onClick={()=> this.setState({rowColor: 'lightsalmon'})}>Lightsalmon</button>
        <button style={{color: 'black' ,backgroundColor:  'lightyellow'      }}  onClick={()=> this.setState({rowColor: 'lightyellow'})}>Lightyellow</button>

        

        </div>
        <div>
          <table className="Tabela" cellspacing="0">
            <thead>
              <tr>
                {Object.keys(this.state.tableData[0]).map((title, key) => {
                  return (
                    <th style={{backgroundColor: this.state.headerColor}}  key={key} onClick={() => this.handleClick(title, key)}>
                      {title.charAt(0).toUpperCase() + title.slice(1)}
                      {this.state.activeColumn === key
                        ? this.state.sortDirection
                          ? " ↓"
                          : " ↑"
                        : ""}
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody style={{backgroundColor: this.state.rowColor}}>
              {this.state.tableData.map(function(row, key) {
                return (
                  <tr key={key} >
                    {Object.keys(row).map(function(entry, key) {
                      return <td key={key}>{row[entry]}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
      </div>
    );
  }
}

export default Table;
