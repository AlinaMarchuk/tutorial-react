import styled from '@emotion/styled';

export const WrapperStyled = styled.div`
  //box-sizing: border-box;
  //padding: 12px;
  background-color: rgba(86, 86, 107, 0.5);
  width: 213px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  //height: 220px;
`;

export const TextStyled = styled.p`
  //box-sizing: border-box;
  margin-top: 0;
  margin-bottom: 0;
  padding: 12px 0;
  width: 213px;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  /* display: flex;
  align-items: center; */
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #f6f7fb;
  //background-color: rgba(86, 86, 107, 0.5);
  //border-bottom: 4px solid #56566b;
`;

export const DivStyled = styled.div`
  //padding: 12px;
  //background-color: rgba(86, 86, 107, 0.5);
  //display: flex;
  //flex-direction: column;
  //gap: 3px;
  width: 213px;
  height: 220px;
  //& > div {
  overflow: hidden auto;
  &::-webkit-scrollbar {
    display: block;
    height: 82px;
    width: 6px;
    -webkit-appearance: none;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    //height: 20px;
    //border: 2px solid #60c470;
    // borderColor: theme.palette.mode === 'dark' ? '' : '#E7EBF0',
    /* border-color: #dc3d3d; */
    background-color: #60c470;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-track-piece:end {
    background-color: transparent;
    margin-bottom: 2px;
  }
  &::-webkit-scrollbar-track-piece:start {
    background-color: transparent;
    margin-top: 2px;
  }
  //}
`;

export const ListStyled = styled.ul`
  height: 280px;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  line-height: 1.16;
  //align-items: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #c7ccdc;
  border-bottom: 2px solid #56566b;

  &:first-child {
    border-top: 4px solid #56566b;
  }
`;

export const MonthStyled = styled.span`
  padding-left: 12px;
`;

export const SumStyled = styled.span`
  padding-right: 12px;
`;
