import CryptoStorage from "lib/utils/cryptoStorage";
import { create } from "zustand";

export type UserInfo = {
  username?: string;
  password?: string;
};

interface AuthStore {
  isAuthenticated: boolean;
  data?: UserInfo;
  login: (data: UserInfo) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: CryptoStorage.getItem("isAuth") ? true : false,
  data: CryptoStorage.getItem("authData") || {},
  login: async (data: UserInfo) => {
    await CryptoStorage.setItem("isAuth", true);
    await CryptoStorage.setItem("authData", data);
    set({ data, isAuthenticated: true });
  },
  logout: async () => {
    await CryptoStorage.removeItem("isAuth");
    await CryptoStorage.removeItem("authData");
    set({
      data: {
        username: "",
        password: "",
      },
      isAuthenticated: false,
    });
  },
}));

export default useAuthStore;
