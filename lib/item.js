"use strict";

function Item() {
  this.name = "An Item";
}

Item.prototype.doSomething = function(aThing) {
  return aThing;
};

module.exports = Item;
