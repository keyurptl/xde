'use strict';

var _get = require('babel-runtime/helpers/get').default;

var _inherits = require('babel-runtime/helpers/inherits').default;

var _createClass = require('babel-runtime/helpers/create-class').default;

var _classCallCheck = require('babel-runtime/helpers/class-call-check').default;

let React = require('react');

let ProcessInfo = (function (_React$Component) {
  _inherits(ProcessInfo, _React$Component);

  function ProcessInfo() {
    _classCallCheck(this, ProcessInfo);

    _get(Object.getPrototypeOf(ProcessInfo.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ProcessInfo, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'span',
          null,
          'We are using Node.js ',
          process.version,
          ' and Electron ',
          process.versions['electron']
        )
      );
    }
  }]);

  return ProcessInfo;
})(React.Component);

;

module.exports = ProcessInfo;
//# sourceMappingURL=../__sourcemaps__/ui/ProcessInfo.js.map
