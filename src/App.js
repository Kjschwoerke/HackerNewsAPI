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
    //if
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
//.then
//then
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
        <form>
        <input placeholder = 'search by title' onChange={(e) => this.onChange(e)}/>
        <button onClick = {this.onSubmitTitle}>Click to Search by Title</button>
        <input placeholder = 'search by author' onChange2={(e) => this.onChange2(e)}/>
        <button onClick = {this.onSubmitAuthor}>Click to Search by Author</button>
        
        {this.state.results.map(result => 
        <>
        <h1>{result.title}</h1>
        <h2>{result.author}</h2>
        <a href={result.url}>{result.url}</a>
        </>
        )}
        </form>
      </div>
    )}
}

export default App;

