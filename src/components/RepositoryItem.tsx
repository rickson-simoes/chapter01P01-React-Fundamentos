interface RepositoryItemsProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: RepositoryItemsProps){
  return (
    <li>
      <strong> {props.repository.name} </strong>
      <p>{props.repository.description ?? `Description of ${props.repository.name}`}</p>

      <a href={props.repository.html_url} target="_blank">
      Acessar repositório
      </a>
    </li>
  );
}