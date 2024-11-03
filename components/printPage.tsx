import { Wrapper } from '../styles/printPage.styles';
import Page from './page';

export default function PrintPage({ data }: { data: PageData[] }) {
  return (
    <>
      <Wrapper>
        {Object.values(data).map((entry, i) => {
          return <Page key={i} entry={entry} />;
        })}
      </Wrapper>
    </>
  );
}
