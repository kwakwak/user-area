'use strict';

describe('Service: dicti', function () {

  // load the service's module
  beforeEach(module('userAreaApp'));

  // instantiate service
  var dicti;
  beforeEach(inject(function (_dicti_) {
    dicti = _dicti_;
  }));

  it('should do something', function () {
    expect(!!dicti).toBe(true);
  });

});
