var fs = require('fs');
var mkdirp = require('mkdirp')

module.exports = {

  node: fs,

  read: function(fn) {
    return fs.readFileSync(fn, 'utf8');
  },

  write: function(fn, data) {
    return fs.writeFileSync(fn, data);
  },

  mkdirp: function(dir, opts) {
    return mkdirp.sync(dir, opts);
  },

};
