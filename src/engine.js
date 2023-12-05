import * as Screen from './modules/screen_manager.js';

// Collision Manager
import * as Collider from './modules/collision_manager.js';

import * as Graphics from './modules/draw_manager.js';

import * as Mouse from './modules/input_manager.js';
import * as Touch from './modules/touch.js';

// Tower Select Buttons
import * as Buttons from './objects/buttons.js';

import * as Image_Loader from './modules/image_loader.js';

const buttonTypes = [Buttons.TowerDeleteButton, Buttons.TowerButton_0_UP0,
    Buttons.TowerButton_1_UP1, Buttons.TowerButton_1_UP2, Buttons.TowerButton_1_UP3,
    Buttons.TowerButton_2_UP1, Buttons.TowerButton_2_UP2, Buttons.TowerButton_2_UP3,
    Buttons.TowerButton_3_UP1, Buttons.TowerButton_3_UP2, Buttons.TowerButton_3_UP3,
    Buttons.TowerButton_4_UP1, Buttons.TowerButton_4_UP2, Buttons.TowerButton_4_UP3,
    Buttons.TowerButton_5_UP1, Buttons.TowerButton_5_UP2, Buttons.TowerButton_5_UP3,
    Buttons.TowerButton_6_UP1, Buttons.TowerButton_6_UP2, Buttons.TowerButton_6_UP3,
];


import { Grid } from './objects/grid.js';


window.addEventListener('load', e => {
    const bgCtx = bg.getContext("2d");
    const ctx = canvas.getContext("2d");
    const interactCtx = interact.getContext("2d");
    const weaponCtx = weapon.getContext("2d");

    window.addEventListener('keydown', e => {
        !e.repeat
        switch(e.key){
            case "e":
                for (let i = 0; i < main.grid.length; ++i){
                    main.grid[i].type = 0;
                    main.tiles[i] = 0;
                }
                main.return_map();
                break;
            case "g":
                main.show_grid = !main.show_grid;
                break;
            case "Shift":
                let item = "Shift" in main.mod_keys;
                if ( !item ) {
                    item = true;
                    if (item === false) main.mod_keys.push("Shift");
                    
                    console.log(item, main.mod_keys, main.mod_keys.length);
                    break;
                }
                break;
        }
    });

    window.addEventListener('keyup', e => {
        switch(e.key){
            case "Shift":
                main.mod_keys.splice("Shift");
                console.log(main.mod_keys);
                break;
        }
    });


    class Main {
        constructor(){
            this.debug = false;
            this.resolution = {w: 1080, h: 800};

            this.canvas_list = [
                {cx: bgCtx, ca: bg}, 
                {cx: ctx, ca: canvas}, 
                {cx: interactCtx, ca: interact}, 
                {cx: weaponCtx, ca: weapon}, 
            ];

            this.images = {
                // Logos
                gear : Image_Loader.load( 'src/images/gear.png' ),

                // Backgrounds
                bg_00 : Image_Loader.load( 'src/images/backgrounds/circuitBoard1.png' ),
                bg_01 : Image_Loader.load( 'src/images/backgrounds/level1.png' ), 
                bg_02 : Image_Loader.load( 'src/images/backgrounds/level2.png' ),

                // Entities
                enemies : Image_Loader.load( 'src/images/Enemies_01.png' ),
                towers : Image_Loader.load( 'src/images/buttons/towers.png' ), 
                buttons : Image_Loader.load( 'src/images/buttons/buttons.png' )
            };

            this.show_grid = false;
            this.grid = [];
            
            this.buttons = [];
            this.buttonArr = [   
                [1,2,3],
                [4,5,6],
                [7,8,9],
                [10,11,12],
                [13,14,15],
                [16,17,18],
                [19,20,21], ];

            // Nothing
            this.tiles = [];

            this.mouse = {
                start_pos: {x: 0, y: 0},
                pos: {x:0, y:0},
                size: {w:2, h:2},
                activeTower: 0,
                activeFrame: {x:0,y:0},
                first_click: true,
                click: false,
            }

            this.mod_keys = [];

        }

        return_map(){
            setTimeout(function() {
                let text = main.tiles.join(",");
                console.log("Map: ", text);
                navigator.clipboard.writeText(text);
            }, 100);
        }

        init(){
            console.log("Game Started");

            if (this.tiles && this.tiles.length === 0){
                for (let i = 0; i < 144; ++i){
                    this.tiles.push(0);
                    this.grid.push(new Grid(this, this.tiles[i], i, {x:(i % 12) * 64, y:Math.floor(i/12) * 64}, {w:64, h:64}));
                    this.grid[i].init();
                }
            } else {
                for (let i = 0; i < this.tiles.length; ++i){
                    console.log(i);
                    this.grid.push(new Grid(this, this.tiles[i], i, {x:(i % 12) * 64, y:Math.floor(i/12) * 64}, {w:64, h:64}));
                    this.grid[i].init();
                }
            }

            // Tower Buttons
            const start_x = 825;
            const offset_x = 70;
            const start_y = 110;
            const offset_y = 70;

            this.buttons.push(new buttonTypes[0](this, {x:start_x+offset_x*1, y:start_y+offset_y*0}));
            this.buttons.push(new buttonTypes[1](this, {x:start_x+offset_x*2, y:start_y+offset_y*0}));

            for(let x = 0; x < this.buttonArr[x].length; ++x) {    
                if (this.buttonArr[x]){
                    this.buttons.push(new buttonTypes[x+2](this, {x:start_x+offset_x*x, y:start_y+offset_y*1}));
                    this.buttons.push(new buttonTypes[x+5](this, {x:start_x+offset_x*x, y:start_y+offset_y*2}));
                    this.buttons.push(new buttonTypes[x+3*2+2](this, {x:start_x+offset_x*x, y:start_y+offset_y*3}));
                    this.buttons.push(new buttonTypes[x+3*3+2](this, {x:start_x+offset_x*x, y:start_y+offset_y*4}));
                    this.buttons.push(new buttonTypes[x+3*4+2](this, {x:start_x+offset_x*x, y:start_y+offset_y*5}));
                    this.buttons.push(new buttonTypes[x+3*5+2](this, {x:start_x+offset_x*x, y:start_y+offset_y*6}));
                }
            }

        }

        update(dt){
            this.grid.forEach(ob => ob.update(dt));
            this.buttons.forEach(ob => ob.update(dt));

            this.draw(ctx);
        }

        draw(ctx){

            ctx.globalAlpha = 0.2;
            ctx.drawImage(this.images.bg_00, 0,0,canvas.width, canvas.height);

            ctx.globalAlpha = 1.0;
            this.grid.forEach(ob => ob.draw(ctx));
            this.buttons.forEach(ob => ob.draw(ctx));

            // Shows mouse cursor
            if ( main.mouse.pos.x < 64 * 12 - main.mouse.size.w ) {
                Graphics.Bevel_Outline(ctx, main.mouse.pos, main.mouse.size, 2, 'Green', 1);
            }


            if ( this.mouse.click ) {
                Graphics.Line_Box(ctx, this.mouse.start_pos, this.mouse.pos, this.mouse.size, 5, 'LimeGreen');

                // Graphics.Line(ctx, this.mouse.start_pos, this.mouse.pos, this.mouse.size, 3, 'Red');

            }

        }
    } 

    const main = new Main();
    Screen.init(main);
    main.init();

    Mouse.move(main, canvas);
    Mouse.leave(main);
    Mouse.down(main, canvas);
    Mouse.up(main);
    Touch.init(main);


    function process(dt){
        for (let i = 0; i < main.canvas_list.length; ++i) main.canvas_list[i].cx.clearRect(0,0,main.canvas_list[i].ca.width, main.canvas_list[i].ca.height);
        main.update(dt);
        main.draw(ctx);
        requestAnimationFrame(process);
    } 
    process();
});










