import {vec2} from 'gl-matrix';
import { Phase } from './index';
export const GOTOPHASE = "GOTOPHASE";
export const SPAWNPLAYER = "SPAWNPLAYER";
export const SPAWNZOMBIE = "SPAWNZOMBIE";
export const KEYPRESS = "KEYPRESS";

export function setPhase(phase:Phase)
{
    return {type:GOTOPHASE, state:phase};
}

export function spawnPlayer()
{
    return {type:SPAWNPLAYER};
}

export function spawnEnemey(pos:vec2)
{
    return {type:SPAWNZOMBIE, pos:pos};
}

export function keyPress(code:number)
{
    return {type:KEYPRESS, code:code};
}