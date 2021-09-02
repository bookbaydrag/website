import { useState } from 'react';
import { Helmet } from 'react-helmet';
import PersonCard from '../components/person/PersonCard';
import { fetchBBD, validateSuccess } from '../util/api/etc';
import { useDeBounce } from '../util/hooks';
import { BBDPerson } from '../util/types';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any>([]);

  const search = useDeBounce(async ()=>{
    try {
      const res = await fetchBBD('personas/search', 'GET', { searchTerm });
      validateSuccess(res);
      const list = await res.json();
      setSearchResults(list);
    } catch (error) {
      console.error(error);
    }
  }, 500);

  const searchTermChange = ({ target }: any)=>{
    setSearchTerm(target.value);
    search();
  };

  const list = searchResults.map((persona: BBDPerson)=>{
    return <PersonCard key={persona._id} personData={persona} />;
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
