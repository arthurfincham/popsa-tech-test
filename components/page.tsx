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
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import SortableItem from './sortableImage';

export default function Page({ entry }: { entry: SortablePageData }) {
  const imageIds = entry.images.map((image) => image.id);
  return (
    <PrintWrapper>
      <Header>
        <Title>{entry.title}</Title>
        <Actions />
      </Header>
      <PageLayout>
        <SortableContext
          items={imageIds}
          strategy={verticalListSortingStrategy}
        >
          {entry.images.map((image: SortableItem) => {
            return <SortableItem key={image.id} image={image} />;
          })}
        </SortableContext>
      </PageLayout>
    </PrintWrapper>
  );
}
