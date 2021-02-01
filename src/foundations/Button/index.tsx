import React from 'react';
import * as S from './styles';

type ButtonProps = {
  text: string;
  onClick: (e: object) => void;
};
function Button({ text, onClick }: ButtonProps) {
  return (
    <S.StyledButton
      onClick={onClick}
    >
      {text}
    </S.StyledButton>
  );
}
export default Button;
