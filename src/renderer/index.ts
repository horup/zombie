import * as PIXI from 'pixi.js';
import * as Data from '../data';

let titleStage = new PIXI.Container();
let stage = titleStage;

let title = new PIXI.Text("ZOMBIE++", {fill:'#FF0000'});
title.anchor.x = 0.5;
title.anchor.y = 0.5;
titleStage.addChild(title);


export function update(store:Data.Store, renderer:PIXI.SystemRenderer)
{
    let state = store.getState();
    switch (state.phase)
    {
        default:
        title.x = renderer.width / 2;
        title.y = renderer.height / 2;
        stage = titleStage;
    }
}

export function getStage(store:Data.Store, renderer:PIXI.SystemRenderer)
{
    update(store, renderer);
    return stage;
}