import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface FormData {
  username: string;
  email: string;
  usertype: string;
}

interface UsersData {
  username: string;
  email: string;
  usertype: string;
}

export interface UsersListState {
  formData: FormData;
  users: UsersData[];
}

const initialState: UsersListState = {
  formData: {
    username: "",
    email: "",
    usertype: "",
  },
  users: [],
};

export const usersListSlice = createSlice({
  name: "usersList",
  initialState,
  reducers: {
    updateForm: (state: UsersListState, action: PayloadAction<FormData>) => {
      state.formData = action.payload;
    },
    setUsers: (state: UsersListState, action: PayloadAction<UsersData>) => {
      state.users.push(action.payload);
    },
  },
});

export const { updateForm, setUsers } = usersListSlice.actions;

export const selectFormData = (state: RootState) => state.usersList.formData;
export const selectUsers = (state: RootState) => state.usersList.users;

export default usersListSlice.reducer;
