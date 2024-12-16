# Tailwindcss Plugin Element Tags

> an tailwindcss plugin for easily select html, svg and mathml tag easily

### installation

```bash

npm i -D @cynonexus-platform/tailwindcss-plugin-element-tags

```

then

```tsx
import elementTags from "@cynonexus-platform/tailwindcss-plugin-element-tags";

export default {
  // .....
  plugins: [
    // ...your plugins,
    elementTags(),
  ],
};
```

### API

> not yet defined

### Usage

```tsx
import React from "react";

function MyComponent() {
  return (
    <div className="bg-red-900 text-white span:font-bold">
      {/* \/ here tag style that override ^^^^^^^^^^^^^^ */}
      <span>MyComponent</span>
    </div>
  );
}

export default MyComponent;
```
