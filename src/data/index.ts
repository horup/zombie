import { State } from './state';
import Reducer from './reducer';
import { TICK } from './actions';

export * from './phase';
export * from './actions';
export * from "./state";

export class Store
{
    state:State = undefined;
    constructor()
    {
        this.dispatch({type:undefined});
    }

    getState()
    {
        return this.state;
    }
    
    dispatch(action:any)
    {
        this.state = Reducer(this.state, action);
        if (action.type != TICK)
        {
            console.log(JSON.stringify(action));
            console.log(JSON.stringify(this.state));
        }
    }
}