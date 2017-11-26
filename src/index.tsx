require("bootstrap/dist/css/bootstrap.css");
require("./style.css");
import * as React from 'react';
import * as Dom from 'react-dom';
import * as PIXI from 'pixi.js';
import {vec2} from 'gl-matrix';

class App extends React.Component<any, any>
{
    graphics:PIXI.Graphics;
    stage:PIXI.Container;
    canvas:HTMLCanvasElement;
    app:PIXI.Application;
    constructor(props:any)
    {
        super();
        document.addEventListener('contextmenu', e=> event.preventDefault());
        document.body.style.cursor = "crosshair";
    }

    componentDidMount()
    {
        this.stage = new PIXI.Container();
        let renderer = PIXI.autoDetectRenderer(640, 480, {view: this.canvas, antialias:false}); 
        let interaction = new PIXI.interaction.InteractionManager(renderer);
        this.graphics = new PIXI.Graphics();
        
        this.stage.addChild(this.graphics);

        this.canvas.addEventListener('mousedown', (e)=>
        {
        });

        document.addEventListener('mousemove', ()=>
        {
        });

        document.addEventListener('keypress', (e)=>
        {
        });

        document.addEventListener('mouseup', (e) =>
        {
        });

        let conquer = () =>
        {
            for (let u of this.state.units)
            {
                u.update(this.state);
            }
        }

        let f = () =>
        {
            renderer.render(this.stage);
            requestAnimationFrame(f);
        };

        f();
    }

    render() {
        return (
            <div style={{width:'100%'}}>
                <div style={{width:'640px', margin:'0 auto'}}>
                    <canvas width={640} height={480} ref={(ref)=>this.canvas = ref} />
                </div>
            </div>
        )
    }
}

var div = document.createElement("div");
document.body.appendChild(div);
Dom.render(<App />, div);