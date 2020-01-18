import React from 'react';
import './App.css';



class App extends React.Component {

  state ={
    queryText: "",
    results: [],
    isLoading: false,
    
  }

  componentDidMount() {
    this.setState({
      results: ['type your search in the box above'],
    })
    
  }

//Search By Title
  onSubmitTitle = (e) => {
    let queryText = this.state.queryText
    let queryString = queryText.toString()
    let url = "http://hn.algolia.com/api/v1/search?query="+ queryString +"&tags=story"
    
    console.log(url)

    e.preventDefault();
    if (this.state.queryText.length > 0) {
      this.setState({isLoading: true})
      fetch(url)
      .then(res => res.json())
      //.then
      .then(parsedJSON =>parsedJSON.hits.map(result => ({
        resultId: result.id,
        createdDate: result.created_at,
        title: result.title,
        url: result.url,
        author: result.author
      })))
      .then(posts => {
        this.setState({
          results: posts,
          isLoading: false
        })
      })
//then
    }
  }

     onChange = (e) => {
      this.setState({
        queryText: e.target.value
      })
      
    }

    onChange2 = (e) => {
      this.setState({
        queryText: e.target.value
      })
      
    }
    
render(){
  
     return (
      <div className = "App">
        <heading>
        <h1>Hacker News App!</h1>
        <form>
        <input placeholder = 'Search News Articles by Title' onChange={(e) => this.onChange(e)}/>
        <button onClick = {this.onSubmitTitle}>Click to Search Hacker News!</button>
        </form>
        </heading>
        {this.state.results.map(result => 
          <div id='articleList'>
          <h2>{result.title}</h2>
          <h3>{result.author}</h3>
          <a href={result.url} target="_blank">{result.url}</a>
          </div>
        )}
      </div>
    )}
}

export default App;

