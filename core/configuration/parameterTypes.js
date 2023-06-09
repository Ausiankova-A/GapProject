const {
    defineParameterType,
  } = require('@cucumber/cucumber');
  const {
    Utils,
  } = require('./utils');
  const {
    PageFactory,
  } = require('../app/ui/pageobjects/pageFactory');

  const pageFactory = new PageFactory();
  
  defineParameterType({
    regexp: /"([^"\\]*(\\.[^"\\]*)*)"/,
    name: 'locator',
    transformer: (string) => {
      if (string.indexOf(' > ') !== -1) {
        const array = string.split(' > ');
        return Utils.poParser(array, pageFactory);
      }
  
      return string;
    },
    useForSnippets: false,
  });
  
  defineParameterType({
    regexp: /[eE]ach |[eE]very |[aA]ll |[0-9]*-[th|st|nd|rd]* |[0-9]* |[Ll]ast |/,
    name: 'locator options',
    transformer: (position) => {
      if (position) {
        switch (position.toLowerCase()) {
          case 'each ':
            return {
              array: true,
            };
          case 'every ':
            return {
              array: true,
            };
          case 'all ':
            return {
              array: true,
            };
  
          default:
            if (parseInt(position, 10)) {
              return {
                array: true,
                position: parseInt(position, 10) - 1,
              };
            }
        }
      }
  
      return {
        array: false,
      };
    },
    useForSnippets: false,
  });
  
  defineParameterType({
    regexp: /[0-9]*-[th|st|nd|rd]* |[0-9]* |last |/,
    name: 'locator position',
    transformer: (position) => {
      if (position) {
        if (parseInt(position, 10)) {
          return {
            array: true,
            position: parseInt(position, 10) - 1,
          };
        }
        if (position === 'last ') {
          return {
            array: true,
            position: 'last',
          };
        }
      }
  
      return {
        array: false,
      };
    },
    useForSnippets: false,
  });
  
  defineParameterType({
    regexp: /not |/,
    transformer(negation) {
      return !!negation;
    },
    name: 'negation',
    useForSnippets: false,
  });
  
  defineParameterType({
    regexp: /exist|be enabled|be displayed|be clickable|be focused|be displayed in viewport/,
    transformer(condition) {
      const CONDITIONS = {
        exist: 'waitForExist',
        'be enabled': 'waitForEnabled',
        'be displayed': 'waitForDisplayed',
        'be clickable': 'waitForClickable',
        'be focused': 'waitForElementFocused',
        'be displayed in viewport': 'waitForElementDisplayedInViewport',
      };
      return CONDITIONS[condition];
    },
    name: 'wait condition',
    useForSnippets: false,
  });
  
  defineParameterType({
    regexp: /be displayed|be clickable|be focused|exist|be displayed in viewport/,
    transformer(condition) {
      const CONDITIONS = {
        'be displayed': 'isDisplayed',
        'be clickable': 'isClickable',
        exist: 'isExisting',
        'be focused': 'isFocused',
        'be displayed in viewport': 'isDisplayedInViewport',
      };
      return CONDITIONS[condition];
    },
    name: 'expect condition',
    useForSnippets: false,
  });
  
  defineParameterType({
    regexp: /[0-9]+|\$[a-zA-Z]+/,
    transformer(number) {
      const world = this;
  
      if (number.startsWith('$')) {
        return world[number.slice(1)];
      }
  
      return parseInt(number, 10);
    },
    name: 'number',
    useForSnippets: false,
  });
  
  defineParameterType({
    regexp: /"([^"\\]*(\\.[^"\\]*)*)"/,
    name: 'text',
    useForSnippets: false,
    async transformer(textString) {
      return textString.toString();
    },
  });