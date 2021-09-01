import { useEffect, useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { AppDispatch, RootState } from './store';

export function useQuery(query: string ): string | null {
  const searchParams = new URLSearchParams(useLocation().search);
  return searchParams.get(query);
};

export function useDeBounce(
    func: (...args: any[])=>void,
    timeout: number,
): ()=>void {
  const [timer, setTimer] = useState<number>();

  const trigger = ()=>{
    clearTimeout(timer);
    setTimer(window.setTimeout(func, timeout));
  };

  return trigger;
};

/**
 * If there is no id, redirect to search
 * @param {string} id
 */
export function useNoIdRedirect(id: string) {
  const { replace } = useHistory();

  useEffect(()=>{
    if (!id) {
      replace('/search');
    }
  }, [id]);
}

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
