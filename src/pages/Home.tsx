import { SectionHeading } from '../styles/global.styles';
import { Page, Section } from '../styles/pages.styles';
import Search from '../components/Search';

function Home() {
  return (
    <Page>
      <Section>
        <SectionHeading>Welcome to Book Bay Drag</SectionHeading>
      </Section>
      <Section>
        <SectionHeading>Search</SectionHeading>
        <Search />
      </Section>
    </Page>
  );
}

export default Home;
