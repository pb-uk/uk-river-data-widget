import { expect } from 'chai';

import * as Widget from '../../src/index.js';

describe('The widget entry point', function () {
  it('should have the correct version', function () {
    expect(Widget.version).to.equal('1.0.0');
  });
});
