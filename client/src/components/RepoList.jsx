import React from 'react';
import Repo from './Repo.jsx';

const RepoList = (props) => (
  <div id="repoList">
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    {
      props.repos.map((repo, i) => 
        <Repo forks={repo.forks_count} owner={repo.full_name.split('/')[0]} 
              repoName={repo.full_name.split('/')[1]} url={repo.html_url} key={i}/>
      )
    }
  </div>
)

export default RepoList;
