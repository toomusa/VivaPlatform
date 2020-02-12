import { AUTH_USER, AUTH_ERROR } from "./types";
import axios from "axios";
import { LOAD_USER, LOGOUT_USER } from "../apiActions/types";

export const signup = (formProps, callback) => async dispatch => {
    try {
        const res = await axios.post("/auth/signup", formProps);
        dispatch({ type: AUTH_USER, payload: res.data.token });
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userId);

        const validUser = await axios.get("/api/loaduser", {  
            headers: { authorization: res.data.token }
        });
        dispatch({ type: LOAD_USER, payload: validUser })

        callback();
    } catch (e) {
        dispatch({ type: AUTH_ERROR, payload: "Email in use" });
    }
}

export const login = (formProps, callback) => async dispatch => {
    try {
        const res = await axios.post("/auth/login", formProps);
        dispatch({ type: AUTH_USER, payload: res.data.token });
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userId);
        
        const validUser = await axios.get("/api/loaduser", {  
            headers: { authorization: res.data.token }
        });
        dispatch({ type: LOAD_USER, payload: validUser })
        
        callback();
    } catch (e) {
        dispatch({ type: AUTH_ERROR, payload: "Invalid login credentials" });
    }
}

export const signout = () => async dispatch => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    dispatch({ type: LOGOUT_USER, payload: {} })
    dispatch({ type: AUTH_USER, payload: "" })
    return;
}

