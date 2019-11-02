import React from 'react';

import SearchCard from './SearchCard';

const RepoList = (props) => {
    const lists = props.repositories.map((it) => {
        return <SearchCard key={it.id} list={it}/>
    })
    return (<div>
    <div>{lists}</div>
    </div>
    )
}
 
export default RepoList