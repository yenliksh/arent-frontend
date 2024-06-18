import throttle from 'lodash/throttle';
import { useLayoutEffect } from 'react';

const use100vhHeight = () => {
  const updateHeight = throttle(() => {
    document.documentElement.style.setProperty('--100vh', `${window.innerHeight}px`);
  }, 200);

  useLayoutEffect(() => {
    updateHeight();

    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);
};

export default use100vhHeight;
