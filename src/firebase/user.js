const user = { userData: null };

export const storeUserData = userData => {
    user.userData = userData;
};

export const accessUserData = () => user.userData;
