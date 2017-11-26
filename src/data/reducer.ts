import { Phase, State, GOTOPHASE } from './index';

export default (state:State = {phase:Phase.Title}, action:any):State=>
{
    switch (action.type)
    {
        case GOTOPHASE:
        return {...state, ...{phase:action.phase}};

        default:
        return state;
    }
}