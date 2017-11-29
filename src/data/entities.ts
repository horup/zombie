import {vec2} from 'gl-matrix';

export interface Entity
{
    id:number;
}

export interface Thing
{
    id:number;
    entity:number;
    pos:vec2;
    radius:number;
    alive:boolean;
}

export interface Player
{
    id:number;
    entity:number;
    dir:vec2;
    trigger:boolean;
}

export interface Bullet
{
    id:number;
    entity:number;
}

export interface Enemy
{
    id:number;
    entity:number;
}