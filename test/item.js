"use strict";

var Lab = require("lab");

var server = require("../");

var Item = require("../lib/item");

Lab.experiment("Item", function () {
  Lab.test("does something", function (done) {
    var item = new Item();
    Lab.expect(item.doSomething("bob")).to.equal("bob");
    done();
  });
  Lab.test("has a name", function (done) {
    var item = new Item();
    Lab.expect(item.name).to.exist;
    done();
  });
});
