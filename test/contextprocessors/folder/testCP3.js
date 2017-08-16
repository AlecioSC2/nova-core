'use strict';

const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);
const contextProcessor = require('../../../index').contextProcessor;


module.exports = contextProcessor.extend({
  categories: ['test'],
  priority: 60,
  name: 'Text ContextProcessor 3',
  process (contentModel) {
    console.log('Wait a sec');
    return setTimeoutPromise(100, 'foobar').then((value) => {
      contentModel.test = 'Test Property! 3 First';
      console.log('Waited!');
    });
  }
});