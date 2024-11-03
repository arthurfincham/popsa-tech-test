import Image from 'next/image';
import styled from 'styled-components';

const Circle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 5px solid white;

  img {
    height: 100%;
    object-fit: contain;
  }
`;

export default function DragOverlayComponent({ imgUrl }: { imgUrl: string }) {
  return (
    <Circle>
      <Image
        width={120}
        height={120}
        src={imgUrl}
        objectFit="cover"
        alt="drag-overlay"
      />
    </Circle>
  );
}
