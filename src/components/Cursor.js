import { useEffect, useState } from 'react';

const Cursor = () => {
  const [top, setTop] = useState(-40);
  const [left, setLeft] = useState(-40);

  const set = (x, y) => {
    const height = scrollY + innerHeight - 5;
    setTop(height < y ? height - y : y);
    setLeft(innerWidth < x ? innerWidth - x : x);
  }
  const moveCursor = ({ pageX, pageY, targetTouches }) => {
    if (pageX && pageY)
      set(pageX, pageY);
    else if (targetTouches)
      set(targetTouches[0].pageX, targetTouches[0].pageY);
  }

  useEffect(() => {
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('touchmove', moveCursor);
    document.addEventListener('scroll', () => setTop(-40));
  }, []);

  return (
    <div className="cursor" style={{ top, left }}>
      <div></div>
    </div>
  );
}

export default Cursor;
