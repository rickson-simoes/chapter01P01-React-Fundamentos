import { useState, useEffect } from 'react';
import '../styles/repositories.scss';

import { RepositoryItem } from "./RepositoryItem";

//https://api.github.com/users/rickson-simoes/repos

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const data = fetch("https://api.github.com/users/rickson-simoes/repos")
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);




  return (
    <section className="repository-list">
      <h1> Lista de repositórios </h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.id} repository={repository} />
        })}
        
      </ul>

    </section>
  );
}