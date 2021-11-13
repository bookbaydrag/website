import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router';
import PersonaCard from './PersonaCard';
import {
  Fieldset,
  Form,
  Label,
  // Submit,
  TextInput,
} from '../styles/form.styles';
import { SectionHeading } from '../styles/global.styles';
import { Page } from '../styles/pages.styles';
import { PersonaList } from '../styles/persona.styles';
import { fetchBBD, validateSuccess } from '../util/api/etc';
import { useDeBounce, useQuery, useTitle } from '../util/hooks';
import { BBDPersona } from '../util/types';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [runningSearch, setRunningSearch] = useState(false);
  const searchQuery = useQuery('search');
  const { replace } = useHistory();
  const title = useTitle('Search', searchTerm);

  useEffect(()=>{
    if (searchQuery && !searchTerm.length) {
      setSearchTerm(searchQuery);
    }
  }, [searchQuery]);

  useEffect(()=>{
    if (searchTerm.length) {
      replace(`/?search=${searchTerm}`);
      search();
    } else {
      replace('/');
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
    <Page>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Form onSubmit={()=>{}}>
        <Fieldset flexDirection='column'>
          <Label htmlFor="search">Search</Label>
          <TextInput
            type="text"
            name="search"
            onChange={searchTermChange}
            value={searchTerm}
          />
        </Fieldset>
      </Form>
      {searchTerm.length ?
        <div>
          <SectionHeading>Search Results</SectionHeading>
          {runningSearch ?
            'Running Search' :
            <PersonaList>
              {list}
            </PersonaList>
          }
        </div> :
        null
      }
    </Page>
  );
};

export default Search;
