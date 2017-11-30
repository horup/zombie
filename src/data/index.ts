import { Entity, Enemy, Player } from "./entities";
import { Thing } from "./entities";

export enum Phase
{
    Title,
    Game,
    Dead,
    Highscore
}

export class State
{
    nextId:number;
    timer = 0;
    phase = Phase.Title;
    entities = new Map<number, Entity>();
    things = new Map<number, Thing>();
    players = new Map<number, Player>();
    enemies = new Map<number, Enemy>();
}