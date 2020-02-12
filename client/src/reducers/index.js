import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import auth from "./auth";
import page from "./page";
import api from "./api";

export default combineReducers({
    auth,
    api,
    page,
    form
})
