import { createConsola } from "consola";

export const logger = createConsola({
  defaults: {
    tag: "adminlts",
  },
});

export const PATHS = {
  dist: "dist",
  lib: "dist/lib",
  htmlDist: "src/html/dist",
};

export const copyTasks = [
  {
    from: "node_modules/bootstrap",
    to: `${PATHS.lib}/bootstrap`,
    clean: [`${PATHS.lib}/bootstrap/**/*`, `!${PATHS.lib}/bootstrap/dist`],
  },

  {
    from: `node_modules/axios`,
    to: `${PATHS.lib}/axios`,
    clean: [`${PATHS.lib}/axios/**/*`, `!${PATHS.lib}/axios/dist`],
  },
  {
    from: `node_modules/bootstrap-icons`,
    to: `${PATHS.lib}/bootstrap-icons`,
    clean: [`${PATHS.lib}/bootstrap-icons/**/*`, `!${PATHS.lib}/bootstrap-icons/font`],
  },

  {
    from: `node_modules/overlayscrollbars`,
    to: `${PATHS.lib}/overlayscrollbars`,
    clean: [
      `${PATHS.lib}/overlayscrollbars/**/*`,
      `!${PATHS.lib}/overlayscrollbars/browser`,
      `!${PATHS.lib}/overlayscrollbars/styles`,
    ],
  },

  {
    from: `node_modules/quicktab`,
    to: `${PATHS.lib}/quicktab`,
    clean: [`${PATHS.lib}/quicktab/**/*`, `!${PATHS.lib}/quicktab/dist`],
  },
  {
    from: `node_modules/jquery`,
    to: `${PATHS.lib}/jquery`,
    clean: [`${PATHS.lib}/jquery/**/*`, `!${PATHS.lib}/jquery/dist`],
  },
];

export const geoJsonFile = "src/html/public/assets/areas.json";
