import { useEffect, useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppDispatch, RootState } from './store';

export function useTitle(page: string, info?: string): string {
  return `Book Bay Drag - ${page}${info?` - ${info}`:''}`;
}

/**
 *
 * @param {string} query
 * @return {string | null | undefined }
 */
export function useQuery(query: string ): string | null | undefined {
  const [searchParams, setSearchParams] = useState<URLSearchParams>();

  const location = useLocation();

  useEffect(()=>{
    setSearchParams(new URLSearchParams(location.search));
  }, [location]);

  return searchParams?.get(query);
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
export function useNoIdRedirect(id?: string) {
  const navigate = useNavigate();

  useEffect(()=>{
    if (!id) {
      navigate('/search', { replace: true });
    }
  }, [id]);
}

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
