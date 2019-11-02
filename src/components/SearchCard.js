import React from 'react';
import './RepoList.css'
class ResultCard extends React.Component{

    render(){
        const {full_name, html_url, owner} = this.props.list;
        return(
            <div className="carda">
            <h2> Full Name: {full_name}  </h2><h3>Owner's URL = <a href={html_url}>Link</a></h3> <h3> Owner's Login: {owner.login} </h3>
            </div>
            )
    }
}

export default ResultCard