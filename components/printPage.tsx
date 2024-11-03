import { DndContext } from '@dnd-kit/core';
import { Wrapper } from '../styles/printPage.styles';
import Page from './page';

export default function PrintPage({ data }: { data: PageData[] }) {
  return (
    <Wrapper>
      <DndContext>
        {Object.values(data).map((entry, i) => {
          return <Page key={i} entry={entry} />;
        })}
      </DndContext>
    </Wrapper>
  );
}
