import React from 'react';
import * as S from './styles';

interface TextInputProps {
  title: string;
  onChange: (e: { target: { value: string }}) => void;
}
function TextInput({ title, onChange }: TextInputProps) {
  return (
    <S.StyledTextInput name="To Do" placeholder="해야할 일을 적어주세요" onChange={onChange} value={title} />
  );
}
export default TextInput;
