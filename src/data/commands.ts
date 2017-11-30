import { State, Phase } from "./index";
import { Entity } from "./entities";

export interface Command
{
    execute(state:State):State;
}

export class GotoPhase implements Command
{
    phase:Phase;
    constructor(phase:Phase)
    {
        this.phase = phase;
    }

    execute(state: State) 
    {
        let newState = {...state};
        newState.phase = this.phase;
        return newState;
    }
}

export class Keydown implements Command
{
    keycode:number;
    constructor(keycode:number)
    {
        this.keycode = keycode;
    }

    execute(state:State)
    {
        state = {...state};

        if (state.phase == Phase.Title)
        {
            state.phase = Phase.Game;
            let e = new Entity(state);
            
        }

        return state;
    }
}

export class Keyup extends Keydown
{
    execute(state:State)
    {
        state = {...state};
        
        return state;
    }
}

export class Tick implements Command
{
    executeGame(state:State)
    {
        state = {...state};
        return state;
    }

    execute(state:State)
    {
        if (state.phase == Phase.Title)
            return state;

        if (state.phase == Phase.Game)
            return this.executeGame(state);
    }
}



