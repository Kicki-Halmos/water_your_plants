import jsonServer from '../api/jsonServer';
import createDataContext from './createDataContext';


const plantReducer = (state, action) => {
    switch (action.type) {
        case 'get_plants': 
            return action.payload;
        /*case 'add_plant': 
            return [...state, {
                id: Math.floor(Math.random() * 99999),
                name: action.payload.name,
                water: action.payload.water,
                fertilizer: action.payload.fertilizer,
                shower: action.payload.shower
            }]*/
        case 'edit_plant':
            return state.map((plant) => {
                return plant.id === action.payload.id ? action.payload : plant;
            })
        case 'delete_plant': 
            return state.filter((plant)=> plant.id !== action.payload);
        default: 
            return state;
    }
};

const getPlants = dispatch  => {
     return async () => {
         const response = await jsonServer.get('/plants');
         dispatch({type: "get_plants", payload: response.data})
     };
};

const addPlant = dispatch => {
    return async (name, water, fertilizer, shower, callback) => {
        await jsonServer.post('/plants', {name, water, fertilizer, shower});
        //dispatch({type: 'add_plant', payload: {name, water, fertilizer, shower}});
        if(callback) {callback()};
    }
}


const editPlant = dispatch => {
    return async (id, name, water, fertilizer, shower, callback) => {
        await jsonServer.put(`/plants/${id}`, {name, water, fertilizer, shower});
        dispatch({type: 'edit_plant', payload: {id, name, water, fertilizer, shower}})
        if(callback) {callback()};
    }
}


const deletePlant = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/plants/${id}`);
        dispatch({type: 'delete_plant', payload: id});
    };
};



export const {Context, Provider} = createDataContext(plantReducer, {getPlants, addPlant, editPlant, deletePlant}, []) ; 