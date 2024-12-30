declare module "@cynonexus-platform/tailwindcss-plugin-element-tags" {
  import { PluginCreator } from "postcss/lib/postcss";
  import { Config } from "tailwindcss";

  const elementTags: {
    handler: PluginCreator<any>;
    config?: Partial<Config>;
  };

  export default elementTags;
}
