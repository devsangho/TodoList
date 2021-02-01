import React, { useState } from 'react';
import * as S from './styles';
import TextInput from '../../foundations/TextInput';
import Button from '../../foundations/Button';

function TodoListContainer() {
  const [inputs, setInputs] = useState({
    title: '',
  });
  const { title } = inputs;
  function onChange(e: { target: { value: string }}): void {
    setInputs({
      title: e.target.value,
    });
  }
  const [tasks, setTasks] = useState([{
    id: 0,
    title: '추가해주세요',
    isCompleted: false,
  }]);
  function addTask(newTitle: string): void {
    setTasks((prevState) => prevState.concat({
      id: prevState.length,
      title: newTitle,
      isCompleted: false,
    }));
  }
  function updateCompleteStateTask(index: number): void {
    setTasks(tasks
      .map((task) => (task.id === index ? { ...task, isCompleted: !task.isCompleted } : task)));
  }
  return (
    <S.StyledTodoList>
      TODO LIST
      <S.StyledInputsContainer>
        <TextInput title={title} onChange={onChange} />
        <Button text="생성" onClick={() => addTask(title)} />
      </S.StyledInputsContainer>
      <div>
        {
              tasks.map((task, index) => {
                return (
                  <S.Row>
                    {task.isCompleted ? <p><del>{task.title}</del></p> : <p>{task.title}</p>}
                    <Button text="완료" onClick={() => updateCompleteStateTask(index)} />
                  </S.Row>
                );
              })
          }
      </div>
    </S.StyledTodoList>
  );
}
export default TodoListContainer;
