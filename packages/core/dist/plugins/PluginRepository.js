'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _promise=require('babel-runtime/core-js/promise'),_promise2=_interopRequireDefault(_promise),_asyncToGenerator2=require('babel-runtime/helpers/asyncToGenerator'),_asyncToGenerator3=_interopRequireDefault(_asyncToGenerator2),_PluginTypes=require('./PluginTypes'),PluginTypes=_interopRequireWildcard(_PluginTypes);function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b.default=a,b}function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}class PluginRepositorySingleton{constructor(){this.plugins=[]}loadPlugin(a){this.plugin(a.name)||this.plugins.push(a)}signatureProviders(){return this.plugins.filter(a=>a.type===PluginTypes.BLOCKCHAIN_SUPPORT)}supportedBlockchains(){return this.signatureProviders().map(()=>name)}plugin(a){return this.plugins.find(b=>b.name===a)}endorsedNetworks(){var a=this;return(0,_asyncToGenerator3.default)(function*(){return yield _promise2.default.all(a.signatureProviders().map((()=>{var a=(0,_asyncToGenerator3.default)(function*(a){return yield a.getEndorsedNetwork()});return function(){return a.apply(this,arguments)}})()))})()}}const PluginRepository=new PluginRepositorySingleton;exports.default=PluginRepository;