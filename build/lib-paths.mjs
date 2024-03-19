const dist = `dist/lib/`

let copyPaths = [
  {
    form: `node_modules/bootstrap`,
    to: `${dist}bootstrap`,
    get del() {
      return [
        `${this.to}/*`,
        `!${this.to}/dist`
      ];
    }
  },
  {
    form: `node_modules/bootstrap-table`,
    to: `${dist}bootstrap-table`,
    get del() {
      return [
        `${this.to}/*`,
        `!${this.to}/dist`
      ];
    }
  },
  {
    form: `node_modules/overlayscrollbars`,
    to: `${dist}overlayscrollbars`,
    get del() {
      return [
        `${this.to}/*`,
        `!${this.to}/browser`,
        `!${this.to}/styles`
      ];
    }
  },
  {
    form: `node_modules/bootstrap-icons`,
    to: `${dist}bootstrap-icons`,
    get del() {
      return [
        `${this.to}/*`,
        `!${this.to}/font`,
        `!${this.to}/font/bootstrap-icons.scss`
      ];
    }
  },
  {
    form: `node_modules/jquery`,
    to: `${dist}jquery`,
    get del() {
      return [
        `${this.to}/*`,
        `!${this.to}/dist`,
      ];
    }
  },
  {
    form: `src/lib/formvalidation`,
    to: `${dist}formvalidation`,
    get del() {
      return [
        `${this.to}/*`,
        `!${this.to}/css`,
        `!${this.to}/js`,
      ];
    }
  },
  {
    form: `src/lib/layer`,
    to: `${dist}layer`,
    get del() {
      return [
        `${this.to}/*`,
        `!${this.to}/dist`,
      ];
    }
  },
  {
    form: `node_modules/quicktab`,
    to: `${dist}quicktab`,
    get del() {
      return [
        `${this.to}/*`,
        `!${this.to}/dist`,
      ];
    }
  },
  {
    form: `node_modules/mockjs`,
    to: `${dist}mockjs`,
    get del() {
      return [
        `${this.to}/*`,
        `!${this.to}/dist`,
      ];
    }
  },
  {
    form: `node_modules/chart.js`,
    to: `${dist}chart.js`,
    get del() {
      return [
        `${this.to}/*`,
        `!${this.to}/dist`,
      ];
    }
  },
  {
    form: `node_modules/countup.js`,
    to: `${dist}countup.js`,
    get del() {
      return [
        `${this.to}/*`,
        `!${this.to}/dist`,
      ];
    }
  },
  {
    form: `node_modules/echarts`,
    to: `${dist}echarts`,
    get del() {
      return [
        `${this.to}/*`,
        `!${this.to}/dist`,
      ];
    }
  },
  {
    form: `node_modules/@eonasdan/tempus-dominus`,
    to: `${dist}@eonasdan/tempus-dominus`,
    get del() {
      return [
        `${this.to}/*`,
        `!${this.to}/dist`,
      ];
    }
  },
  {
    form: `node_modules/@popperjs/core`,
    to: `${dist}@popperjs/core`,
    get del() {
      return [
        `${this.to}/*`,
        `!${this.to}/dist`,
      ];
    }
  },
  {
    form: `node_modules/nprogress`,
    to: `${dist}nprogress`,
    get del() {
      return [
        `${this.to}/*`,
        `!${this.to}/nprogress.css`,
        `!${this.to}/nprogress.js`,
      ];
    }
  },
  {
    form: 'node_modules/jquery-treegrid',
    to: `${dist}jquery-treegrid`,
    get del() {
      return [
        `${this.to}/*`,
        `!${this.to}/css`,
        `!${this.to}/js`,
        `!${this.to}/img`,
      ];
    }
  },
  {
    form: 'node_modules/jquery.cookie',
    to: `${dist}jquery.cookie`,
    get del() {
      return [
        `${this.to}/*`,
        `!${this.to}/jquery.cookie.js`,
      ];
    }
  },
  {
    form: 'node_modules/@fonticonpicker/fonticonpicker',
    to: `${dist}@fonticonpicker/fonticonpicker`,
    get del() {
      return [
        `${this.to}/*`,
        `!${this.to}/dist`,
      ];
    }
  },
];

console.log(copyPaths)

export default copyPaths;
