(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  Quicktab.LANGS['ru_RU'] = Quicktab.LANGS['ru'] = {
    formatTimeoutMessage() {
      return 'Время ожидания';
    },
    formatContextmenuClose() {
      return "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0438\u0439";
    },
    formatContextmenuCloseOthers() {
      return "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0435";
    },
    formatContextmenuClosePrev() {
      return "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0441\u043B\u0435\u0432\u0430";
    },
    formatContextmenuCloseNext() {
      return "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043F\u0440\u0430\u0432\u0443\u044E \u0441\u0442\u043E\u0440\u043E\u043D\u0443";
    },
    formatContextmenuCloseAll() {
      return "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0432\u0441\u0435";
    },
    formatContextmenuFullscreen() {
      return "\u041F\u043E\u043B\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D";
    },
    formatContextmenuRefresh() {
      return "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C";
    },
    formatContextmenuCenterActive() {
      return "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u0442\u0435\u043A\u0443\u0449\u0435\u043C\u0443";
    },
    formatContextmenuNewBlank() {
      return "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043D\u043E\u0432\u043E\u0435 \u043E\u043A\u043D\u043E";
    },
    formatSearchInputPlaceholder() {
      return "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0430\u043C";
    },
    formatOpenedTabs() {
      return "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432\u043A\u043B\u0430\u0434\u043A\u0443";
    },
    formatRecentlyClosedTabs() {
      return "\u041D\u0435\u0434\u0430\u0432\u043D\u043E \u0437\u0430\u043A\u0440\u044B\u0442\u044B\u0435 \u0432\u043A\u043B\u0430\u0434\u043A\u0438";
    },
    formatSearchNoResults() {
      return "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0432\u044B\u0448\u043B\u043E.";
    },
    formatTimeYear() {
      return "\u0413\u043E\u0434 \u043D\u0430\u0437\u0430\u0434";
    },
    formatTimeMonths() {
      return "\u041C\u0435\u0441\u044F\u0446 \u043D\u0430\u0437\u0430\u0434";
    },
    formatTimeDays() {
      return "\u0434\u043D\u044F \u043D\u0430\u0437\u0430\u0434";
    },
    formatTimeHours() {
      return "\u0447\u0430\u0441\u0430 \u043D\u0430\u0437\u0430\u0434";
    },
    formatTimeMinutes() {
      return "\u043C\u0438\u043D\u0443\u0442\u044B \u043D\u0430\u0437\u0430\u0434";
    },
    formatTimeSeconds() {
      return "\u0441\u0435\u043A\u0443\u043D\u0434\u044B \u043D\u0430\u0437\u0430\u0434";
    }
  };
  Object.assign(Quicktab.DEFAULTS, Quicktab.LANGS['ru_RU']);

}));
