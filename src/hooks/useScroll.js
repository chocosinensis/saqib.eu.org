import { useEffect, useState } from 'react';

const useScroll = (initial, afterscroll) => {
  const [top, setTop] = useState(initial);
  const [prevScrollPos, setPrevScrollPos] = useState(pageYOffset);

  useEffect(() => document.addEventListener('scroll', () => {
    const currentScrollPos = pageYOffset;
    setTop(prevScrollPos > currentScrollPos ? initial : afterscroll);
    setPrevScrollPos(currentScrollPos);
  }), [prevScrollPos]);

  return [top];
}

export default useScroll;
