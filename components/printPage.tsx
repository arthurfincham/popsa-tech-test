import { DndContext, DragOverlay } from '@dnd-kit/core';
import { Wrapper } from '../styles/printPage.styles';
import Page from './page';
import {
  addIdsToImages,
  findItemIndexes,
  swapItems,
} from '../utils/sortableUtils';
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

  const handleDragEnd = (event: any) => {
    setDragUrl(null);
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      setItems((prevItems) => {
        const newItems = [...prevItems];
        const { activeItemIndex, overItemIndex } = findItemIndexes(
          newItems,
          active.id,
          over.id
        );

        if (activeItemIndex && overItemIndex) {
          swapItems(newItems, activeItemIndex, overItemIndex);
        }

        return newItems;
      });
    }
  };

  return (
    <Wrapper>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
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
