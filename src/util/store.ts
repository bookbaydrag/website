import { configureStore, createSlice } from '@reduxjs/toolkit';
import { BBDSession } from './types';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    session: <BBDSession> null,
  },
  reducers: {
    setSession: (state, action) => {
      localStorage.setItem('session', JSON.stringify(action.payload));
      state.session = action.payload;
    },
  },
});

export const setSessionReducer = sessionSlice.actions.setSession;

const store = configureStore({
  reducer: {
    session: sessionSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export function getSession() {
  return store.getState().session.session;
}

export function setSession(session: BBDSession): void {
  store.dispatch(setSessionReducer(session));
}
