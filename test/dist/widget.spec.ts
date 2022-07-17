import { expect } from 'chai';
import { readFileSync } from 'fs';

// Enter the module name created by the IIFE here.
const moduleName = 'UkRiverData';

const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
const iife = readFileSync(pkg.browser, 'utf8');

const UkRiverData = eval(`(() => {${iife}; return ${moduleName}})()`);

describe('The browser bundle', function () {
  it('should expose the correct API', function () {
    const api = ['version', 'widget'];
    expect(Object.keys(UkRiverData).sort()).to.eql(api);
  });

  it('should have the same version as package.json', function () {
    expect(UkRiverData.version).to.equal(pkg.version);
  });
});
