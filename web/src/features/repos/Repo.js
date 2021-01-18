import React from 'react';
import { Link } from 'react-router-dom';
import { saveState } from '../../helpers/localStorage';
import { selectRepoById } from './repoSlice';
import { useSelector } from 'react-redux';

const Repo = ({ name, description, language, forks_count, created_at, id }) => {

  let repoId;
  const SetCookie = (id) => {
    // console.log("id in cookie fn:", id);
    repoId = id
    saveState(id)
  }

  const repo = useSelector((state) => selectRepoById(state, repoId));
  saveState(repo)

   return (
  <article key={id}>
  <h3>Name: {name}</h3>
  {description !== null ? (
    <p className="repo-content">
      Description: {description.substring(0, 100)}
    </p>
  ) : (
    <p>no description</p>
  )}
  {language !== undefined ? (
    <p>Language:{language}</p>
  ) : (
    <p>No languages</p>
  )}
  <p>Forks: {forks_count}</p>
  <Link onClick={() => SetCookie(id)} to={`/repos/${id}`} className="button muted-button" state={{id: id}}>
    View Repo
  </Link>
</article>
)}

// Repo.propTypes = {
//   language: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   forks_count: PropTypes.number.isRequired,
// }

export default Repo;
