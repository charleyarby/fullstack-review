import React from 'react';

const RepoList = (props) => {
  console.log(props.repos)
  return(
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <div>
      {props.repos.map((oneRepo) => (
        <li>{`${oneRepo.reponame} by ${oneRepo.login} Number of Start = ${oneRepo.stars}`}</li>
      ))}
    </div>
  </div>
  )
}

export default RepoList;