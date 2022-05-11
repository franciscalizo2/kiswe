import React from 'react';

function useOnClickOutside(
  ref: React.MutableRefObject<any>,
  handler: (event: any) => void,
  noCloseOutsideClick?: boolean
) {
  React.useEffect(() => {
    const listener = (event: any) => {
      // Do nothing if clicking ref's element or descendent elements
      if (
        !ref.current ||
        ref.current.contains(event.target) ||
        noCloseOutsideClick
      ) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, noCloseOutsideClick]);
}

export default useOnClickOutside;
