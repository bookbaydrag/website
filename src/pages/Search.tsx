import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import PersonaCard from '../components/PersonaCard';
import { Field, Fieldset, Form, Label, TextInput } from '../styles/form.styles';
import { SectionHeading } from '../styles/global.styles';
import { PersonaList } from '../styles/persona.styles';
import { fetchBBD, validateSuccess } from '../util/api/etc';
import { useDeBounce, useQuery } from '../util/hooks';
import { BBDPersona } from '../util/types';

const SearchPage = styled.div`
  padding: 5px;
  margin: 0 5px 0 5px;
`;

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [runningSearch, setRunningSearch] = useState(false);
  const searchQuery = useQuery('search');
  const { replace } = useHistory();

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

  function renderTitle() {
    return (
      // eslint-disable-next-line max-len
      <title>Book Bay Drag - Search{searchTerm ? ` - ${searchTerm}` : ''}</title>
    );
  }

  return (
    <SearchPage>
      <Helmet>
        {renderTitle()}
      </Helmet>
      <Form>
        <Fieldset flexDirection='column'>
          <Field>
            <Label
              htmlFor="search"
            >
              Search
            </Label>
            <TextInput
              type="text"
              name="search"
              onChange={searchTermChange}
              value={searchTerm}
            />
          </Field>
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
    </SearchPage>
  );
};

export default Search;
