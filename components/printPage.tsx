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

export default function PrintPage({ data }: { data: PageData[] }) {
  return (
    <>
      <Wrapper>
        {Object.values(data).map((entry, i) => {
          return (
            <PrintWrapper key={i}>
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
        })}
      </Wrapper>
    </>
  );
}
