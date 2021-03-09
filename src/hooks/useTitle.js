import { useEffect } from 'react';

const useTitle = (...titles) => {
  useEffect(() => {
    const title = `${titles.join(' « ')} » Nazmus Saqib`;
    if (document.title == title) return;

    document.title = title;
  }, [titles]);
}

export default useTitle;
