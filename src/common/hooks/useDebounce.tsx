import React, {useRef} from 'react';

export function useDebounceValue<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export function useCreateDebounce(wait = 400, leading = false) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // eslint-disable-next-line @typescript-eslint/ban-types
  const func = useRef<Function | null>(null);

  const _clearTimer = () => {
    timer.current && clearTimeout(timer.current);
    timer.current = null;
  };
  // eslint-disable-next-line @typescript-eslint/ban-types
  return (newFunction: Function, scope?: Function, args?: Array<object>) => {
    // Leading (Call on first)
    if (leading === true) {
      func.current = newFunction;

      // If timer not active, call.
      if (timer.current === null) {
        func.current && func.current.apply(scope, args);
      }

      _clearTimer();
      timer.current = setTimeout(() => _clearTimer(), wait);
    }
    // Default (Call on last)
    else {
      _clearTimer();

      func.current = newFunction;

      timer.current = setTimeout(() => {
        func.current && func.current.apply(scope, args);
        _clearTimer();
      }, wait);
    }
  };
}

export function useDebounceFunc(
  func: () => void,
  delay = 300,
  leading = false,
) {
  const debounce = useCreateDebounce(delay, leading);
  return React.useCallback(() => debounce(func), [debounce, func]);
}
