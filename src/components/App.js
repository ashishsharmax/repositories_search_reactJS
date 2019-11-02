import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/githubapi';
import RepoList from "./RepoList"



class App extends React.Component{

    state = { repositories: []}

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/repositories',{
            params: { q: term }
            
        });

        this.setState({ repositories: response.data.items})
        
    };

    render(){
        console.log(this.state.repositories)
    return (
        <div className="ui container" style = {{ marginTop: '10px'}}>  
            <SearchBar onSubmit={this.onSearchSubmit} />
            
            <RepoList repositories={this.state.repositories}/>
        </div>
        )
    }
}

export default App