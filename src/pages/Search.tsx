import { useState } from 'react';
import { Helmet } from 'react-helmet';
import PersonaCard from '../components/PersonaCard';
import { fetchBBD, validateSuccess } from '../util/api/etc';
import { useDeBounce } from '../util/hooks';
import { BBDPersona } from '../util/types';

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

  const list = searchResults.map((persona: BBDPersona)=>{
    return <PersonaCard
      key={persona._id}
      personaData={persona}
    />;
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
      <div>
        {list}
      </div>
    </div>
  );
};

export default Search;
