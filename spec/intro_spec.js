'use strict';
var jasmine = require('jasmine-node');
var jsdom = require('jsdom');
var path = require('path');
describe("Jasmine Walkthrough", function(){
  var sayHey, sayHeyFriend;
  beforeEach(function(done) {
    var codeJs = path.resolve(__dirname, '..', 'code.js');
    jsdom.env({
      html: '<div></div>',
      scripts: [codeJs],
      onload: function(window) {
        sayHey = window.sayHey;
        sayHeyFriend = window.sayHeyFriend;
        done();
      }
    });
  });
  describe('#sayHey', function() {
    it('should returns the string "hey friends"', function() {
      expect(sayHey()).toBe("hey friends!");
    });
    it('should return a string', function() {
      expect(sayHey()).toEqual(jasmine.any(String));
    });
  });
  describe('#sayHeyFriend', function(){
    it("should return the string 'hey friends _name_'", function (){
      expect(sayHeyFriend("kristin")).toBe("hey kristin!!")
    });
    it("should return a string'", function (){
      expect(sayHeyFriend("kristin")).toEqual(jasmine.any(String))
    });
  });
});
