'use strict';

describe('Service: Sessionservice', function () {

  // load the service's module
  beforeEach(module('userAreaApp'));

  // instantiate service
  var Sessionservice;
  beforeEach(inject(function (_Sessionservice_) {
    Sessionservice = _Sessionservice_;
  }));

  it('should do something', function () {
    expect(!!Sessionservice).toBe(true);
  });

});
