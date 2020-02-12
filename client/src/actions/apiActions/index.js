import { LOAD_USER, UPDATE_JOURNEY, TEST_USER } from "./types";
import axios from "axios";

export const loadUser = () => async dispatch => {
    try {
        let userToken = localStorage.getItem('token');
        if (userToken) {
            try {
                const validUser = await axios.get("/api/loaduser", {  
                    headers: { authorization: localStorage.getItem('token') }
                });
                dispatch({ type: LOAD_USER, payload: validUser });
            } catch (e) {return};
        } else {return};
    } catch (e) {return};
}

export const createJourney = refDoc => async dispatch => {
    try {
        const res = await axios.post("/api/createjourney", refDoc);
        const updatedJourney = res.data;
        dispatch({ type: UPDATE_JOURNEY, payload: updatedJourney });
    } catch (e) {
        dispatch({ type: TEST_USER, payload: e });
    }
}

export const addGoal = refDoc => async dispatch => {
    try {
        const res = await axios.post("/api/addgoal", refDoc);
        const updatedJourney = res.data;
        dispatch({ type: UPDATE_JOURNEY, payload: updatedJourney });
    } catch (e) {
        dispatch({ type: TEST_USER, payload: e });
    }
}

export const addMilestone = refDoc => async dispatch => {
    try {
        const res = await axios.post("/api/addmilestone", refDoc);
        const updatedJourney = res.data;
        dispatch({ type: UPDATE_JOURNEY, payload: updatedJourney });
    } catch (e) {
        dispatch({ type: TEST_USER, payload: e });
    }
}

export const addTask = refDoc => async dispatch => {
    try {
        const res = await axios.post("/api/addtask", refDoc);
        const updatedJourney = res.data;
        dispatch({ type: UPDATE_JOURNEY, payload: updatedJourney });
    } catch (e) {
        dispatch({ type: TEST_USER, payload: e });
    }
}

export const addComment = refDoc => async dispatch => {
    try {
        const res = await axios.post("/api/addcomment", refDoc);
        const updatedJourney = res.data;
        dispatch({ type: UPDATE_JOURNEY, payload: updatedJourney });
    } catch (e) {
        dispatch({ type: TEST_USER, payload: e });
    }
}

export const removeGoal = refDoc => async dispatch => {
    try {
        const res = await axios.post("/api/removegoal", refDoc);
        const updatedJourney = res.data;
        dispatch({ type: UPDATE_JOURNEY, payload: updatedJourney });
    } catch (e) {
        dispatch({ type: TEST_USER, payload: e });
    }
}

export const removeMilestone = refDoc => async dispatch => {
    try {
        const res = await axios.post("/api/removemilestone", refDoc);
        const updatedJourney = res.data;
        dispatch({ type: UPDATE_JOURNEY, payload: updatedJourney });
    } catch (e) {
        dispatch({ type: TEST_USER, payload: e });
    }
}

export const removeTask = refDoc => async dispatch => {
    try {
        const res = await axios.post("/api/removetask", refDoc);
        const updatedJourney = res.data;
        dispatch({ type: UPDATE_JOURNEY, payload: updatedJourney });
    } catch (e) {
        dispatch({ type: TEST_USER, payload: e });
    }
}

export const removeComment = refDoc => async dispatch => {
    try {
        const res = await axios.post("/api/removecomment", refDoc);
        const updatedJourney = res.data;
        dispatch({ type: UPDATE_JOURNEY, payload: updatedJourney });
    } catch (e) {
        dispatch({ type: TEST_USER, payload: e });
    }
}


