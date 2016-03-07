var fs = require('fs');

module.exports = {

  read: function(fn) {
    return fs.readFileSync(fn, 'utf8');
  },

  write: function(fn, data) {
    return fs.writeFileSync(fn, data);
  }

};
