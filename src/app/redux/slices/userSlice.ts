import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    user: any | null;
    isAuthenticated: boolean;
    loading: boolean;
}

const initialState: UserState = {
    user: null,
    isAuthenticated: false,
    loading: true,
};

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<any>) => {
            state.user = action.payload;
        },
        setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
            state.isAuthenticated = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        logoutUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
});

export default userSlice.reducer;

export const { setUser, setIsAuthenticated, setLoading, logoutUser } = userSlice.actions;
