import styled from 'styled-components';

export const StyledTodoList = styled.div`
  background-color: #F8F9FA;
  margin: 0 auto;
  border-radius: 5px;
  padding: 10px 20px;
  
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  
  width: 50%;
`;

export const StyledInputsContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin-top: 10px;
`;
