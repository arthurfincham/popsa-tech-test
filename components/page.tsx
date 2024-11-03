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

export default function Page({ entry }: { entry: SortablePageData }) {
  return (
    <PrintWrapper>
      <Header>
        <Title>{entry.title}</Title>
        <Actions />
      </Header>
      <PageLayout>
        {entry.images.map((image: SortableItem) => {
          return (
            <PrintPhoto key={image.id}>
              <img src={image.url} alt="" />
            </PrintPhoto>
          );
        })}
      </PageLayout>
    </PrintWrapper>
  );
}
