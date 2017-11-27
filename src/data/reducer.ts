import { State, GOTOPHASE } from './index';
import { Phase } from './phase';
let defaultState:State =  {phase:Phase.Title, bullet:{}, enemy:{}, entity:{}, player:{}, thing:{}, timer:0};
export default (state:State = defaultState, action:any):State=>
{
    switch (action.type)
    {
        case GOTOPHASE:
        return {...state, ...{phase:action.phase}};

        default:
        return state;
    }
}