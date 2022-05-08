import { useEffect, useState } from "react";

const useDeviceSize = () => {
  const [size, setSize] = useState({ height: window.innerHeight, width: window.innerWidth })

  useEffect(() => {
    const onResize = () => {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }

    window.addEventListener('resize', onResize);

    return function() {
      window.removeEventListener('resize', onResize);
    }
  }, [])

  return size;
}

export default useDeviceSize
