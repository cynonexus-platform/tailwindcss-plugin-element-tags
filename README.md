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

function MyDirectChildComponent() {
  return (
    <div className="bg-red-900 text-white span:font-bold">
      {/* \/ here tag style that override ^^^^^^^^^^^^^^ */}
      <span>MyDirectChildComponent</span>
    </div>
  );
}

export default MyDirectChildComponent;
```

```tsx
import React from "react";

function MyDirectDescendantComponent() {
  return (
    <div className="bg-red-900 text-white _span:font-bold">
      {/* V here tag style that override  ^^^^^^^^^^^^^^ */}
      <span>MyDirectDescendantComponent</span>
      <div>
        {/* V also here */}
        <span>Also Here</span>
      </div>
    </div>
  );
}

export default MyDirectDescendantComponent;
```
