---
to: src/pages/<%= h.changeCase.pascalCase(name) %>.tsx
---
import React from 'react';

function <%= h.changeCase.pascalCase(name) %>() {
  return (
    <div>
      <%= h.changeCase.pascalCase(name) %>
    </div>
  );
}
export default <%= h.changeCase.pascalCase(name) %>;
