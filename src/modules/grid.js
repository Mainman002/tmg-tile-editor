// Collision Manager
import * as Collider from '../modules/collision_manager.js';

// Draw Manager
import * as Graphics from '../modules/draw_manager.js';

export class Grid {
    constructor(main, type, id, pos, size){
        this.main = main;
        this.id = id;
        this.type = type;
        this.pos = pos;
        this.size = size;
        this.image = button_sprites;
        this.sprite_size = {w:64, h:64};
        this.frame = {x:0, y:0};
        this.hovering = false;
    }

    init(){
        let temp_frame = {x:0, y:0};

        switch(this.type){
            case 0:
                temp_frame = 0;
                break;

            case 1:
                temp_frame = {x:128*2, y:0};
                break;

            case 2:
                temp_frame = {x:128, y:128};
                break;

            case 3:
                temp_frame = {x:128*2, y:128};
                break;

            case 4:
                temp_frame = {x:128*3, y:128};
                break;

            case 5:
                temp_frame = {x:128, y:128*2};
                break;

            case 6:
                temp_frame = {x:128*2, y:128*2};
                break;

            case 7:
                temp_frame = {x:128*3, y:128*2};
                break;

            case 8:
                temp_frame = {x:128, y:128*3};
                break;

            case 9:
                temp_frame = {x:128*2, y:128*3};
                break;

            case 10:
                temp_frame = {x:128*3, y:128*3};
                break;

            case 11:
                temp_frame = {x:128, y:128*4};
                break;

            case 12:
                temp_frame = {x:128*2, y:128*4};
                break;

            case 13:
                temp_frame = {x:128*3, y:128*4};
                break;

            case 14:
                temp_frame = {x:128, y:128*5};
                break;

            case 15:
                temp_frame = {x:128*2, y:128*5};
                break;

            case 16:
                temp_frame = {x:128*3, y:128*5};
                break;

            case 17:
                temp_frame = {x:128, y:128*6};
                break;

            case 18:
                temp_frame = {x:128*2, y:128*6};
                break;

            case 19:
                temp_frame = {x:128*3, y:128*6};
                break;

        }

        if (temp_frame !== 0){
            this.frame.x = temp_frame.x;
            this.frame.y = temp_frame.y;
        }
    }

    update(dt){

        // Self
        // if ( this.hovering !== Interact_Area_Origin(this.main.mouse, this, 32) ) this.hovering = Interact_Area_Origin(this.main.mouse, this, 32); 
        
        // Size
        // if ( this.hovering !== Collider.Size(this.main.mouse, this) ) {
        //     this.hovering = Collider.Size(this.main.mouse, this); 
        // }

        if ( this.main.mouse.start_pos.x < 764 && this.main.mouse.click ) {
            if ( this.hovering !== Collider.Line(this.main.mouse, this) ) {
                this.hovering = Collider.Line(this.main.mouse, this); 
            }
        }

        if (this.hovering && !this.main.mouse.click){
            this.type = this.main.mouse.activeTower;
            this.main.tiles[this.id] = this.type;

            if (this.frame === 0){
                return;
            } else {
                this.frame.x = this.main.mouse.activeFrame.x;
                this.frame.y = this.main.mouse.activeFrame.y;
            }

            this.hovering = false;
        }
    }

    draw(ctx){

        if ( this.type === 0 ){
            if ( this.main.show_grid ) {
                Graphics.Bevel_Outline(ctx, this.pos, {w:64, h:64}, 1, 'rgb(40,70,70)', 1);
            }
        } else {
            Graphics.Image(ctx, this.image, this.frame, {x:this.pos.x+this.size.w*0.5, y:this.pos.y+this.size.h*0.5}, this.size, 0, {w:128, h:128}, 1);
        }

        if ( Collider.Line(this.main.mouse, this) ) {
            if ( this.main.mouse.activeTower > 0 ) {
                Graphics.Bevel_Outline(ctx, this.pos, this.size, 3, 'Teal', 1);
            } else {
                Graphics.Bevel_Outline(ctx, this.pos, this.size, 3, 'Red', 1);
            }
        }

        // Hovering
        if ( this.hovering ) {
            if ( this.type > 0 ) {
                if ( this.main.mouse.activeTower > 0 ) {
                Graphics.Bevel_Outline(ctx, this.pos, this.size, 3, 'Gold', 1);
                } else {
                    Graphics.Bevel_Outline(ctx, this.pos, this.size, 3, 'Red', 1);
                }
            } else {
                if ( this.main.mouse.activeTower > 0 ) {
                    Graphics.Bevel_Outline(ctx, this.pos, this.size, 3, 'Teal', 1);
                } else {
                    Graphics.Bevel_Outline(ctx, this.pos, this.size, 3, 'Red', 1);
                }
            }
        }

    }
}