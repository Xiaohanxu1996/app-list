import React, { useCallback, useRef } from 'react';

const useVisibility = (
  callback: (isVisible: boolean) => void,
  deps: React.DependencyList
) => {
  const intersectionObserver = useRef<IntersectionObserver | null>(null);
  return useCallback((node) => {
    if (intersectionObserver.current) {
      intersectionObserver.current.disconnect();
    }

    intersectionObserver.current = new IntersectionObserver(([entry]) => {
      callback(entry.isIntersecting);
    });

    if (node) intersectionObserver.current.observe(node);
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
};

export { useVisibility };
