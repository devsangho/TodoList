import {
  atom,
} from 'recoil';

// eslint-disable-next-line import/prefer-default-export
export const todoListState = atom({
  key: 'todoListState',
  default: [{
    id: 0,
    title: '추가해주세요',
    isCompleted: false,
  }],
});
