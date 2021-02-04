import { useEffect, useState } from 'react';

const Cursor = () => {
  const [top, setTop] = useState(-20);
  const [left, setLeft] = useState(-20);

  useEffect(() => {
    document.addEventListener('mousemove', ({ pageX, pageY }) => {
      const height = scrollY + innerHeight - 5;
      setTop(height < pageY ? height - pageY : pageY);
      setLeft(innerWidth < pageX ? innerWidth - pageX : pageX);
    });
    document.addEventListener('scroll', () => setTop(-20));
  }, []);

  return (
    <div className="cursor" style={{ top, left }}>
      <div></div>
    </div>
  );
}

export default Cursor;
