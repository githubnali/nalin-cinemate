import { useEffect } from 'react';

export const usePageTitle = (title) => {
  //update the page title
  useEffect(() => {
    document.title = `${title} || Nalin Cinemate`;
  });
  return null;
};
