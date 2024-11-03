import { DndContext } from '@dnd-kit/core';
import { Wrapper } from '../styles/printPage.styles';
import Page from './page';
import { addIdsToImages } from '../utils/sortableUtils';
import { useState } from 'react';

export default function PrintPage({ data }: { data: PageData[] }) {
  const dataWithIds = addIdsToImages(data);

  const [items, setItems] = useState(dataWithIds);

  return (
    <Wrapper>
      <DndContext>
        {items.map((entry: SortablePageData, i: number) => {
          return <Page key={i} entry={entry} />;
        })}
      </DndContext>
    </Wrapper>
  );
}
