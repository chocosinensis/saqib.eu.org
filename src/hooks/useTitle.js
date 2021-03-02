import { useEffect } from 'react';

const useTitle = (...titles) => {
  useEffect(() => {
    const title = `Nazmus Saqib « ${titles.join(' « ')}`;
    if (document.title == title) return;

    document.title = title;
  }, [titles]);
}

export default useTitle;
