---
to: src/foundations/<%= h.changeCase.pascalCase(name) %>/index.stories.tsx
---
import React from 'react';
import <%= h.changeCase.pascalCase(name) %> from './index';

export default {
  title: 'foundations/<%= h.changeCase.pascalCase(name) %>',
};

export const Default = () => <<%= h.changeCase.pascalCase(name) %> />;
