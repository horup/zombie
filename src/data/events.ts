import {vec2} from 'gl-matrix';
import {State} from './states';
const GOTOSTATE = "GOTOSTATE";
const SPAWNPLAYER = "SPAWNPLAYER";
const SPAWNZOMBIE = "SPAWNZOMBIE";

export function gotoState(state:State)
{
    return {type:GOTOSTATE, state:state};
}

export function spawnPlayer()
{
    return {type:SPAWNPLAYER};
}

export function spawnEnemey(pos:vec2)
{
    return {type:SPAWNZOMBIE, pos:pos};
}