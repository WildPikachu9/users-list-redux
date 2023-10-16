import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import usersListReducer from "../features/UsersList/usersListSlice"
import setUsersReducer from "../features/UsersList/usersListSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    usersList: usersListReducer,
    setUsers: setUsersReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
