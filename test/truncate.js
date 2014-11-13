'use strict';
/*global describe, beforeEach, it, describe, expect*/
/*global module, inject*/

describe('ngTruncate', function () {

  // load the filter's module
  beforeEach(module('ngTruncate'));

  // initialize a new instance of the filter before each test
  var truncate;
  beforeEach(inject(function ($filter) {
    truncate = $filter('truncate');
  }));

  it('should truncate ascii characters', function() {
    expect(truncate('test', 1, 'END')).toBe('tEND');
    expect(truncate('test', 8, 'END')).toBe('test');

    // wordWide truncate
    expect(truncate('test test', 5, 'END')).toBe('testEND');
    expect(truncate('test test', 6, 'END')).toBe('testEND');
  });

  it('should truncate Chinese words', function() {
    expect(truncate('中文测试', 2, 'END')).toBe('中END');
    expect(truncate('中文测试', 8, 'END')).toBe('中文测试');
    expect(truncate('中文测试', 9, 'END')).toBe('中文测试');
  });

});
