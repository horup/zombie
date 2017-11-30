import {vec2} from 'gl-matrix';
import { State } from './index';

export class Entity
{
    id:number;
    constructor(state:State)
    {
        this.id = state.nextId++;
        state.entities.set(this.id, this);
    }
}

export class Thing
{
    entity:number;
    pos:vec2;
    radius:number;

    constructor(entity:number, state:State)
    {
        this.entity = entity;
        this.pos = vec2.create();
        this.radius = 1.0;
        state.things.set(entity, this);
    }
}

export class Player
{
    entity:number;
    dir:vec2 = vec2.create();
    trigger:boolean = false;

    constructor(entity:number, state:State)
    {
        this.entity = entity;
        state.players.set(this.entity, this);
    }
}

export class Enemy
{
    entity:number;

    constructor(entity:number, state:State)
    {
        this.entity = entity;
        state.enemies.set(this.entity, this);
    }
}