import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  search (term) {
    var name = term
    console.log(`${term} was searched`);
    // TODO
    // Axios.post('/repos', {name})
    $.post({
      url: 'http://localhost:1128/repos',
      data: {term: term},
      success: (response)=> {
        console.log(response)
      },
      datatype: 'string'
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));