import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
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
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';

export default function PrintPage({ data }: { data: PageData[] }) {
  const dataWithIds = addIdsToImages(data);

  const [items, setItems] = useState<SortablePageData[]>(dataWithIds);

  const [dragUrl, setDragUrl] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(TouchSensor),
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event: any) => {
    const { active } = event;

    if (active.id) {
      const allImages = items.flatMap((page) => page.images);
      const { url } = allImages.find((img) => img.id === active.id) || {};
      setDragUrl(url || null);
    }
  };

  const handleDragEnd = (event: any) => {
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

    setDragUrl(null);
  };

  return (
    <Wrapper>
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
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
