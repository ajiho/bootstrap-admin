declare module "postcss-prefix-custom-properties" {
  import { PluginCreator } from "postcss";

  interface Options {
    prefix?: string;
    ignore?: (string | RegExp)[];
  }

  const plugin: PluginCreator<Options>;

  export default plugin;
}
