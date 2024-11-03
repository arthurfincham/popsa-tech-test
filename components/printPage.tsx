import { DndContext, DragOverlay } from '@dnd-kit/core';
import { Wrapper } from '../styles/printPage.styles';
import Page from './page';
import { addIdsToImages } from '../utils/sortableUtils';
import { useState } from 'react';
import { snapCenterToCursor } from '@dnd-kit/modifiers';
import DragOverlayComponent from './dragOverlayComponent';

export default function PrintPage({ data }: { data: PageData[] }) {
  const dataWithIds = addIdsToImages(data);

  const [items, setItems] = useState(dataWithIds);

  const [dragUrl, setDragUrl] = useState<string | null>(null);

  const handleDragStart = (event: any) => {
    const { active } = event;

    if (active.id) {
      const [pageIndex, imageIndex] = active.id.split('_');
      const url = items[pageIndex].images[imageIndex].url;

      setDragUrl(url);
    }
  };

  return (
    <Wrapper>
      <DndContext onDragStart={handleDragStart}>
        {items.map((entry: SortablePageData, i: number) => {
          return <Page key={i} entry={entry} />;
        })}
        <DragOverlay modifiers={[snapCenterToCursor]}>
          {dragUrl ? <DragOverlayComponent imgUrl={dragUrl} /> : null}
        </DragOverlay>
      </DndContext>
    </Wrapper>
  );
}
