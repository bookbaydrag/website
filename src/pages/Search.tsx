import { useState } from 'react';
import { Helmet } from 'react-helmet';
import PersonCard from '../components/person/PersonCard';
import { fetchBBD } from '../util/api/etc';
import { useDeBounce } from '../util/hooks';
import { BBDPerson } from '../util/types';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any>([]);

  const search = useDeBounce(async ()=>{
    const res = await fetchBBD('persons', 'GET');
    const list = await res.json();
    setSearchResults(list);
  }, 500);

  const searchTermChange = ({ target }: any)=>{
    setSearchTerm(target.value);
    search();
  };

  const list = searchResults.map((person: BBDPerson)=>{
    return <PersonCard key={person._id} personData={person} />;
  });

  return (
    <div>
      <Helmet>
        <title>Book Bay Drag - Search</title>
      </Helmet>
      <form>
        <input
          type="text"
          name="search"
          onChange={searchTermChange}
          value={searchTerm}
        />
      </form>
      <ul>
        {list}
      </ul>
      {/* {JSON.stringify(searchResults, null, 2)} */}
    </div>
  );
};

export default Search;
