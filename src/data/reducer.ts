import { State, GOTOPHASE, KEYDOWN, TICK } from './index';
import { Phase } from './phase';
import { Player, Entity, Thing } from './entities';
import { vec2 } from 'gl-matrix';
let defaultState:State =  {phase:Phase.Title, bullet:{}, enemy:{}, entity:{}, player:{}, thing:{}, timer:0};

function count(obj:any)
{
    return Object.keys(obj).length;
}

export default (state:State = defaultState, action:any):State=>
{
    switch (action.type)
    {
        case GOTOPHASE:
        {
            return {...state, ...{phase:action.phase}};
        }
        case KEYDOWN:
        {
            if (state.phase == Phase.Title)
            {
                let e:Entity = {id:count(state.entity)};
                let t:Thing = {id:count(state.thing), entity:e.id, alive:true, pos:vec2.create(), radius:1.0};
                let p:Player = {id:count(state.player), entity:e.id};
                let newstate = {...state, ...{phase:Phase.Game}};
                newstate.entity[e.id] = e;
                newstate.thing[t.id] = t;
                newstate.player[p.id] = p;

                return newstate;
            }

            return state;
        }
        case TICK:
        {
            if (state.phase == Phase.Game)
            {
                return {...state, ...{timer:state.timer + 1}};
            }

            return state;
        }
        default:
        return state;
    }
}