import { State, GOTOPHASE, KEYDOWN, TICK } from './index';
import { Phase } from './phase';
import { Player, Entity, Thing } from './entities';
import { vec2 } from 'gl-matrix';
let defaultState:State =  {phase:Phase.Title, bullets:{}, enemies:{}, entities:{}, players:{}, things:{}, timer:0, width:640, height:480};

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
                let e:Entity = {id:count(state.entities)};
                let t:Thing = {id:count(state.things), entity:e.id, alive:true, pos:vec2.fromValues(state.width /2, state.height / 2), radius:1.0};
                let p:Player = {id:count(state.players), entity:e.id, dir:vec2.create(), trigger:false};
                let newstate = {...state, ...{phase:Phase.Game}};
                newstate.entities[e.id] = e;
                newstate.things[t.id] = t;
                newstate.players[p.id] = p;

                return newstate;
            }
            else if (state.phase == Phase.Game)
            {
                
            }

            return state;
        }
        case TICK:
        {
            if (state.phase == Phase.Game)
            {
                let players = state.players;
                let things = state.things;
                let timer = state.timer + 1;
                if (count(state.players) > 0)
                {
                    let player = {...state.players[0]};
                }

                return {...state, ...{timer:timer}, ...{things:things}, ...{players:players}};
            }

            return state;
        }
        default:
        return state;
    }
}