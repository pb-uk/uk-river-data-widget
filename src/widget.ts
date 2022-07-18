
interface WidgetOptions {
  height?: number | string;
  width?: number | string;
}

const numberToPx = (cand: unknown) => {
  const type = typeof (cand);
  if (type === 'number') {
    return cand + 'px';
  }
  return cand;
};

export const widget = (options: WidgetOptions = {}, document: Document = window.document) => {
  const { height, width } = options;
  const h = numberToPx(height) || '400px';
  const w = numberToPx(width) || '200px';
  document.write(`<iframe style="border:0;padding:0;margin:0;width:${w};height:${h}"></iframe>`);
  const css = 'html,body,div,span,a{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}';
  const fontFamily = 'html{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}'
  const html = '<!DOCTYPE html><head><style>' + css + fontFamily + '</style></head><body>Hello World</body>';
  const iframes = document.getElementsByTagName('iframe');
  const iframe = iframes[iframes.length - 1];
  const doc = iframe.contentDocument;
  if (!doc) return;
  doc.open();
  doc.write(html);
  doc.close();
};
