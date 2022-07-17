import { expect } from 'chai';

import { JSDOM } from 'jsdom';

import { widget } from '../../src/widget.js';

describe('Create widget', function () {
  it('should insert the widget HTML in the document', function () {
    const document = new JSDOM('').window.document;

    widget(document);

    expect(document.body.innerHTML).to.equal('<div>Hello World</div>');
  });
});
