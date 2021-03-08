import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Cursor = () => {
  const [top, setTop] = useState(-40);
  const [left, setLeft] = useState(-40);
  const [opacity, setOpacity] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [timer, setTimer] = useState(null);
  const history = useHistory();

  const set = (x, y) => {
    setTop(y);
    setLeft(x);
  }
  const move = ({ clientX, clientY, targetTouches }) => {
    setOpacity(0.5);
    clearTimeout(timer);
    setTimer(setTimeout(() => setOpacity(0), 400));

    if (clientX && clientY)
      return set(clientX, clientY);
    else if (targetTouches)
      return set(targetTouches[0].clientX, targetTouches[0].clientY);
  }
  const expand = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 400);
  }

  useEffect(() => {
    document.addEventListener('mousemove', move);
    document.addEventListener('touchmove', move);
    document.addEventListener('click', expand);
  }, []);

  useEffect(() => history.listen(() => scrollTo(0, 0)), []);

  return (
    <div style={{ top, left, opacity }}
      className={`cursor ${clicked ? 'expand' : ''}`}
    >
      <div></div>
    </div>
  );
}

export default Cursor;
