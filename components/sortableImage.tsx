import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { PrintPhoto } from '../styles/printPage.styles';
import Image from 'next/image';

interface Props {
  image: SortableItem;
}

export default function SortableItem(props: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.image.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <PrintPhoto ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {props.image.url && (
        <Image
          src={props.image.url}
          alt="sortable-item"
          width={270}
          height={180}
          loading="lazy"
          objectFit="cover"
        />
      )}
    </PrintPhoto>
  );
}
