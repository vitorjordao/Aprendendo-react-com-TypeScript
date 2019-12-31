import { RepositoriesState, RepositoriesTypes } from './types';
import { Reducer } from 'redux';

const INITIAL_STATE: RepositoriesState = {
    data: [
        { id: 1, name: 'Roketseat'}
    ],
    error: false,
    loading: false,
}

const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RepositoriesTypes.LOAD_REQUESTS:
            return { ...state, loading: true };
        case RepositoriesTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data };
        case RepositoriesTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: false, data: [] };
        default: 
            return state;
    }
};

export default reducer;