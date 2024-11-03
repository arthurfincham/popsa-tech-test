import styled from 'styled-components';
import Actions from './actions';
import {
  Wrapper,
  PrintWrapper,
  Header,
  Title,
  PageLayout,
  PrintPhoto,
} from '../styles/printPage.styles';

export default function Page({ entry }: { entry: PageData }) {
  return (
    <PrintWrapper>
      <Header>
        <Title>{entry.title}</Title>
        <Actions />
      </Header>
      <PageLayout>
        {entry.images.map((image) => {
          return (
            <PrintPhoto key={image}>
              <img src={image} alt="" />
            </PrintPhoto>
          );
        })}
      </PageLayout>
    </PrintWrapper>
  );
}
