import {vec2} from 'gl-matrix';

export interface Entity
{
    id:number;
}

export interface Thing
{
    entity:number;
    pos:vec2;
    radius:number;
    alive:boolean;
}

export interface Player
{
    entity:number;
}

export interface Bullet
{
    entity:number;
}

export interface Enemy
{
    entity:number;
}