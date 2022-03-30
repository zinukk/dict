//dict.js
import {db} from "../../firebase"
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc} from 'firebase/firestore'
import { async } from "@firebase/util";

// Actions
const LOAD = 'dict/LOAD';
const CREATE = 'dict/CREATE';
const UPDATE = 'dict/UPDATE';
const REMOVE = 'dict/REMOVE';
const COMPLETE = 'dict/COMPLETE'

const initialState = { list: []};

// Reducer
export default function reducer(state = initialState, action = {}) {
switch (action.type) {
    case "dict/LOAD":{
        return {list: action.dict_list}
    }
    case "dict/CREATE":{
        const newData = {list : [...state.list, action.dictData]}

        return newData; 
    }
    case "dict/COMPLETE":{
        const newData = {list : [...state.list, action.isCompleted, action._idx]}

        return newData
    }
default: return state;
}
}


// Action Creators
export function loadDict(dict_list) {

return { type: LOAD, dict_list };
}

export function createDict(dictData) {
return { type: CREATE, dictData };
}

export function completeDict(isCompleted, _idx) {
    console.log(isCompleted, _idx);
    return { type: COMPLETE, isCompleted, _idx };
    }


export const addDictFB = (dicts) => {
 return async function(dispatch){
    const docRef = await addDoc(collection(db, "sparta-week2"), dicts)
    const _dict = await getDoc(docRef)
    const dict = {id: _dict, ..._dict.data()}
    console.log((await getDoc(docRef)).data());

    console.log(_dict.data());

    dispatch(createDict(dict))
 }
}

// export function createDict(widget) {
// return { type: UPDATE, widget };
// }

// export function createDict(widget) {
// return { type: REMOVE, widget };
// }

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget () {
// return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }

//midelwares
export const loadDictFB = () => {
    return async function(dispatch){
    const dict_data = await getDocs(collection(db, "sparta-week2"));
    console.log(dict_data);

    let dict_list = [];

    dict_data.forEach((b)=>{
        
        dict_list.push({id: b.id, ...b.data()});
    });
    console.log(dict_list);

    dispatch(loadDict(dict_list))
    }
}