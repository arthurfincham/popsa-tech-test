import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  width: 600px;
  margin: auto;
  color: #585858;
`;

export const PrintWrapper = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

export const PageLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #2778a5;
  border-radius: 8px;
  padding: 20px;
  margin: 17px 0 42px;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
    max-width: 90vw;
    gap: 10px;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const PrintPhoto = styled.div`
  width: calc(50% - 10px);
  animation: ${fadeIn} 0.3s ease-in;
  @media (max-width: 768px) {
    width: 100%;
  }
  img {
    max-width: 100%;
  }
`;
