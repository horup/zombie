import * as PIXI from 'pixi.js';
import * as Data from '../data';

let titleStage = new PIXI.Container();
let gameStage = new PIXI.Container();
let stage = titleStage;

let title = new PIXI.Text("ZOMBIE++", {fill:'#FF0000'});
title.anchor.x = 0.5;
title.anchor.y = 0.5;
titleStage.addChild(title);

let timer = new PIXI.Text("00:00", {fill:'#FF0000'});
timer.anchor.x = 0.5;
timer.anchor.y = 0;
gameStage.addChild(timer);

let things = new PIXI.Container();
gameStage.addChild(things);


export function update(store:Data.Store, renderer:PIXI.SystemRenderer)
{
    let state = store.getState();
    switch (state.phase)
    {
        case Data.Phase.Game:
        {
            timer.x = renderer.width / 2;
            timer.y = 0;
            timer.text = "" + state.timer;
            stage = gameStage;

            for (let thingid in state.thing)
            {
                let thing = state.thing[thingid];
                let sprite = things.children.filter(c=>c.name == thingid.toString() == null)[0] as PIXI.Sprite;
                if (sprite == undefined)
                {
                    sprite = PIXI.Sprite.fromImage(require("../assets/player.png"));
                    sprite.anchor.x = 0.5;
                    sprite.anchor.y = 0.5;
                    things.addChild(sprite);
                }                

                sprite.x = thing.pos[0];
                sprite.y = thing.pos[1];
            }

            break;
        }
        default:
        {
            title.x = renderer.width / 2;
            title.y = renderer.height / 2;
            stage = titleStage;
        }
    }
}

export function getStage(store:Data.Store, renderer:PIXI.SystemRenderer)
{
    update(store, renderer);
    return stage;
}