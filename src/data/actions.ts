import {vec2} from 'gl-matrix';
import { Phase } from './index';
export const GOTOPHASE = "GOTOPHASE";
export const SPAWNPLAYER = "SPAWNPLAYER";
export const SPAWNZOMBIE = "SPAWNZOMBIE";
export const KEYDOWN = "KEYDOWN";
export const TICK = "TICK";

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

export function keyDown(code:number)
{
    return {type:KEYDOWN, code:code};
}

export function tick()
{
    return {type:TICK};
}