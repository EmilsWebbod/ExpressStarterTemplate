'use strict';

const _ = require('ramda');

import {Files, Folders} from '../files';
const index = Files.getFileFromDist('index.html').unsafePerformIO();

export = app => {
  if (app.get('env') === 'production') {
    console.log('Initializing production html engine');
    app.engine('html', (_, options, callback) => {
      callback(null, index);
      console.log('Engine Done');
    });
  } else {
    console.log('Initializing development html engine');
    app.engine('html', (_, options, callback) => {
      callback(null, index);
      console.log('Engine Done');
    });
  }

  app.set('views', Folders.dist);
  app.set('view engine', 'html');
};
