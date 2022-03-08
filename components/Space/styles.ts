import styled from '@emotion/styled';
import ISpace from './types';

const Spacing = styled.div<ISpace>`
  display: inline-flex;
  flex-direction: ${(props) =>
    props.direction === 'horizontal' ? 'row' : 'column'};
  gap: ${(props) => props.gap}px;
`;

export default {
  Spacing,
};
