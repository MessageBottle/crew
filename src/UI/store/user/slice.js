import { createSlice } from '@reduxjs/toolkit';

// https://firebase.google.com/docs/reference/js/firebase.User

const slice = createSlice({
    name: 'user',
    initialState: {
        isUserSignedIn: false,
        userProfile: null,
        userPreferences: null,
        anonymousUserProfile: {
            role: undefined,
            settings: { darkMode: false },
        },
        userCrewOfflineData: {},
    },
    reducers: {
        userSignedIn: (state, { payload }) => {
            state.userProfile = payload;
            state.isUserSignedIn = true;
        },
        userSignedOut: state => {
            state.userProfile = null;
            state.userPreferences = null;
            state.isUserSignedIn = false;
        },
        userPreferencesUpdated: (state, { payload }) => {
            state.userProfile.userPreferences = {
                ...state.userProfile.userPreferences,
                ...payload,
            };
        },
        userReadCrew: (state, { payload: crewId }) => {
            state.userCrewOfflineData[crewId] = { ...state.userCrewOfflineData[crewId], read: true };
        },
    },
});

export function selectIsUserSignedIn(userState) {
    return userState.isUserSignedIn;
}

export function selectUserProfile(userState) {
    return userState.userProfile;
}

export function selectUserPreferences(userState) {
    return userState.userProfile.userPreferences;
}

export const { userSignedIn, userSignedOut, userPreferencesUpdated } = slice.actions;

export default slice.reducer;
