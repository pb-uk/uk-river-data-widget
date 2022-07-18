import { expect } from 'chai';

import { JSDOM } from 'jsdom';

import { widget } from '../../src/widget.js';

describe('Create widget', function () {
  it('should insert an iframe in the document', function () {
    const document = new JSDOM('').window.document;

    widget({}, document);
    const iframe = document.getElementsByTagName('iframe')[0];
    expect(iframe).not.to.be.empty;
  });

  it('the iframe should have the correct styles applied', function () {
    const document = new JSDOM('').window.document;
    widget({}, document);

    const iframe = document.getElementsByTagName('iframe')[0];

    expect(iframe.style.border).to.equal('0px');
  });

  it('the iframe should have the correct height and width', function () {
    const document = new JSDOM('').window.document;
    widget({}, document);

    const iframe = document.getElementsByTagName('iframe')[0];

    expect(iframe.style.border).to.equal('0px');
  });

  it('should insert the widget HTML in the iframe', function () {
    const document = new JSDOM('').window.document;

    widget({}, document);

    const iframe = document.getElementsByTagName('iframe')[0];
    // eslint-disable-next-line
    // @ts-ignore
    expect(iframe.contentDocument.body.innerHTML).to.equal('Hello World');
  });
});
