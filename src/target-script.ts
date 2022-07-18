
export const createTargetScript = ({ message }: { message: string }) => {
  return (document: Document = window.document) => {
    document.addEventListener('DOMContentLoaded', () => {
      document.getElementsByTagName('body')[0].append(`<div>${message}</div>`);
    });
  };
};
