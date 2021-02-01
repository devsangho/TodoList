import React from 'react';
import Button from './index';

export default {
  title: 'foundations/Button',
};

export const Default = () => <Button text="button text" onClick={(e) => console.log(e)} />;
