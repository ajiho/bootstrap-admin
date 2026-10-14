// .vitepress/theme/index.js

import mediumZoom from "medium-zoom";
import { useRoute } from "vitepress";
import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client";
import DefaultTheme from "vitepress/theme";
import { nextTick, onMounted, watch } from "vue";

import "./custom.scss";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    enhanceAppWithTabs(app);
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      //   mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });
      mediumZoom(".main img", { background: "var(--vp-c-bg)" });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom()),
    );
  },
};
