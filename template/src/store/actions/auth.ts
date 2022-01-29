import { SET_USER_DATA } from "../types";
import Axios from "../../services/Axios";
import { AppDispatch, AuthData } from "../../types";

export const authenticate = () => async (dispatch: AppDispatch) => {
  try {
    const { data } = await Axios.get('/authenticate');
    if (data?.data) {
      dispatch({
        type: SET_USER_DATA,
        data: data?.data,
      });
    }
  } catch {}
};

export const login = (payload: AuthData) => async (dispatch: AppDispatch) => {
  try {
    const { data } = await Axios.post('login',payload);
    if (data?.data?.user) {
      dispatch({
        type: SET_USER_DATA,
        data: data?.data?.user,
      });
    }
  } catch (error) {
    throw error;
  }
};

export const logOut = () => async (dispatch: AppDispatch) => {
  try {
    await Axios.get('/logout');
    dispatch({
      type: SET_USER_DATA,
      data: null,
    });
  } catch (error) {
    throw error;
  }
};
