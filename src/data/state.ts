import {Phase} from './index';
import { Entity, Thing, Player, Enemy, Bullet } from './entities';

type List<T> = {[id:number]:T};

export interface State
{
    phase:Phase;
    entities:List<Entity>;
    things:List<Thing>;
    players:List<Player>;
    enemies:List<Enemy>;
    bullets:List<Bullet>;
    timer:number;
    width:number;
    height:number;
}