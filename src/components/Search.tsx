import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import PersonaCard from './PersonaCard';
import { fetchBBD, validateSuccess } from '../util/api/etc';
import { useDeBounce, useQuery, useTitle } from '../util/hooks';
import { BBDPersona } from '../util/types';
import { Col, Container } from 'react-bootstrap';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [runningSearch, setRunningSearch] = useState(false);
  const searchQuery = useQuery('search');
  const navigate = useNavigate();
  const title = useTitle('Search', searchTerm);

  useEffect(()=>{
    if (searchQuery && !searchTerm.length) {
      setSearchTerm(searchQuery);
    }
  }, [searchQuery]);

  useEffect(()=>{
    if (searchTerm.length) {
      navigate(`/?search=${searchTerm}`, { replace: true });
      search();
    } else {
      navigate('/', { replace: true });
      setSearchResults([]);
    }
  }, [searchTerm]);

  const search = useDeBounce(async ()=>{
    try {
      setRunningSearch(true);
      const res = await fetchBBD('personas/search', 'GET', { searchTerm });
      setRunningSearch(false);
      validateSuccess(res);
      const list = await res.json();
      setSearchResults(list);
    } catch (error) {
      console.error(error);
    }
  }, 500);

  const searchTermChange = ({ target }: any)=>{
    setSearchTerm(target.value);
  };

  const list = searchResults.map((persona: BBDPersona)=>{
    return <PersonaCard
      key={persona._id}
      personaData={persona}
    />;
  });

  return (
    <Container>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <form onSubmit={()=>{}}>
        <fieldset>
          <label htmlFor="search">Search</label>
          <input
            type="text"
            name="search"
            onChange={searchTermChange}
            value={searchTerm}
          />
        </fieldset>
      </form>
      {searchTerm.length ?
        <div>
          <h1 className='heading'>Search Results</h1>
          {runningSearch ?
            'Running Search' :
            <Col>
              {list}
            </Col>
          }
        </div> :
        null
      }
    </Container>
  );
};

export default Search;
