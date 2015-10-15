module.exports = function(jQuery,underscore) {
  var Meteor = require("meteor-core")(underscore);
  require("meteor-base64")(Meteor);
  require("meteor-ejson-safe")(Meteor);
  require("meteor-random-window-crypto")(Meteor);
  require("meteor-id-map")(Meteor);
  require("meteor-ordered-dict")(Meteor);
  require("meteor-tracker")(Meteor);
  require("meteor-observe-sequence")(Meteor);
  require("meteor-htmljs")(Meteor);
  require("meteor-html-tools")(Meteor);
  require("meteor-reactive-var")(Meteor);
  require("meteor-reactive-object-map")(Meteor);
  require("meteor-templating")(Meteor);
  require("meteor-spacebars")(Meteor);
  require("meteor-spacebars-compiler")(Meteor);
  return Meteor;
};
