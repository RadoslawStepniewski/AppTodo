const ADD_TASK = 'ADD_TASK';
const FILTER_TASKS = 'FILTER_TASKS';
const  REMOVE_TASK = 'REMOVE_TASK';

export const addTask = (taskName) = (
    {
        type: ADD_TASK,
        task: taskName
    });

export const search = (value) => ({
    type: FILTER_TASKS,
    value: value
});

export const removeTask = (index) => ({
    type: REMOVE_TASK,
   taskIndex: index
});

const INITIAL_STATE = {
    query: '',
    tasks: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: state.tasks.concat(action.task)
            };
        case FILTER_TASKS:
            return {
                ...state,
                query: action.value
            };
        case REMOVE_TASK:
            return{
                ...state,
                tasks: state.tasks.filter((task, iterationIndex ) => action.textIndex !== iterationIndex)
            };
        default:
            return state
    }
}