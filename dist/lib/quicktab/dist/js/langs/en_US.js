(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  Quicktab.LANGS['en-US'] = Quicktab.LANGS['en'] = {
    formatTimeoutMessage() {
      return 'request timeout';
    },
    formatContextmenuClose() {
      return "Close current";
    },
    formatContextmenuCloseOthers() {
      return "Close Other";
    },
    formatContextmenuClosePrev() {
      return "Close left side";
    },
    formatContextmenuCloseNext() {
      return "Close right side";
    },
    formatContextmenuCloseAll() {
      return "Close all";
    },
    formatContextmenuFullscreen() {
      return "full screen";
    },
    formatContextmenuRefresh() {
      return "Refresh";
    },
    formatContextmenuCenterActive() {
      return "Go back to the current";
    },
    formatContextmenuNewBlank() {
      return "Open a new window";
    },
    formatSearchInputPlaceholder() {
      return "Search tabs";
    },
    formatOpenedTabs() {
      return "Open tabs";
    },
    formatRecentlyClosedTabs() {
      return "Recently Closed";
    },
    formatSearchNoResults() {
      return "No results found";
    },
    formatTimeYear() {
      return "years ago";
    },
    formatTimeMonths() {
      return "months ago";
    },
    formatTimeDays() {
      return "days ago";
    },
    formatTimeHours() {
      return "hours ago";
    },
    formatTimeMinutes() {
      return "minutes ago";
    },
    formatTimeSeconds() {
      return "seconds ago";
    }
  };
  Object.assign(Quicktab.DEFAULTS, Quicktab.LANGS['en-US']);

}));
