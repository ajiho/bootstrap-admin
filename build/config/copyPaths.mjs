const copyPaths = [
  {
    form: 'node_modules/bootstrap',
    to: 'dist/lib/bootstrap',
    get del() {
      return [
        `${this.to}/*`,
        `!${this.to}/dist`
      ];
    }
  },
  {
    form: 'node_modules/bootstrap-table',
    to: 'dist/lib/bootstrap-table',
    get del() {
      return [
        `${this.to}/*`,
        `!${this.to}/dist`
      ];
    }
  },
  {
    form: 'node_modules/overlayscrollbars',
    to: 'dist/lib/overlayscrollbars',
    get del() {
      return [
        `${this.to}/*`,
        `!${this.to}/browser`,
        `!${this.to}/styles`
      ];
    }
  },
  {
    form: 'node_modules/bootstrap-icons',
    to: 'dist/lib/bootstrap-icons',
    get del() {
      return [
        `${this.to}/*`,
        `!${this.to}/font`,
        `!${this.to}/font/bootstrap-icons.scss`
      ];
    }
  },
  {
    form: 'node_modules/jquery',
    to: 'dist/lib/jquery',
    get del() {
      return [
        `${this.to}/*`,
        `!${this.to}/dist`,
      ];
    }
  },
  {
    form: 'src/lib/formvalidation',
    to: 'dist/lib/formvalidation',
    get del() {
      return [];
    }
  },
  {
    form: 'node_modules/mockjs',
    to: 'dist/lib/mockjs',
    get del() {
      return [
        `${this.to}/*`,
        `!${this.to}/dist`,
      ];
    }
  }
];

export default copyPaths;
