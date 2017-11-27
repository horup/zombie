import {Phase} from './index';
import { Entity, Thing, Player, Enemy, Bullet } from './entities';

type List<T> = {[id:number]:T};

export interface State
{
    phase:Phase;
    entity:List<Entity>;
    thing:List<Thing>;
    player:List<Player>;
    enemy:List<Enemy>;
    bullet:List<Bullet>;
    timer:number;
}