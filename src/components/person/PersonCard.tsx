import { Link } from 'react-router-dom';
import { PersonType } from '../../util/types';

export type PersonCardProps = {
  personData: PersonType
}

const PersonCard = ({ personData }: PersonCardProps): JSX.Element =>{
  const { _id, dragName, pronouns } = personData;
  return (
    <li>
      <div>
        <Link to={`/persons/${_id}`}>
          {dragName}
        </Link>
      </div>
      <div>
        {pronouns}
      </div>
    </li>
  );
};

export default PersonCard;
