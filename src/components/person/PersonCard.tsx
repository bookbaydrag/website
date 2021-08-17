import { Link } from 'react-router-dom';
import { BBDPerson } from '../../util/types';

export type PersonCardProps = {
  personData: BBDPerson
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
