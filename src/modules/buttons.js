import * as Collider from './collision_manager.js'
import * as Graphics from './draw_manager.js'

// Towers
export class TowerButton {
    constructor(main){
        this.main = main;
        this.ctx = main.ctx;

        this.type = 1;
        this.spriteSize = {w:128, h:128};
        this.frame = {x:0, y:256*3};
        this.pos = {x:256, y:512};
        this.size = {w:64, h:64};
        this.angle = 45 * Math.PI / 180.0;
        this.hovering = false;

        this.markedForDeletion = false;
        // print(this.main);
    }

    update(dt){

        // Self
        if ( this.hovering !== Collider.Origin(this.main.mouse, this) ) {
            this.hovering = Collider.Origin(this.main.mouse, this);
        }

        if ( this.hovering && this.main.mouse.click ){
            this.main.mouse.activeTower = this.type;
            this.main.mouse.activeFrame.x = this.frame.x * 128;
            this.main.mouse.activeFrame.y = this.frame.y * 128;
            this.main.mouse.click = false;
        }
    }

    draw(ctx){
        this.ctx.drawImage(this.image, 
            this.frameCurrent.x, this.frameCurrent.y, this.spriteSize.w, this.spriteSize.h, 
            this.pos.x, this.pos.y, this.size.w, this.size.h);

        if (this.main.mouse.activeTower === this.type) {
            Graphics.Bevel_Outline( this.ctx, this.pos, this.size, 2, 'Green', 1 )
        }

        if ( this.hovering ) {
                Graphics.Bevel_Outline( this.ctx, this.pos, this.size, 2, 'Red', 1 )
        }

    }
}


// Delete Tile
export class TowerDeleteButton extends TowerButton{
    constructor(main, pos){
        super(main);
        this.type = 0;
        this.animated = false;
        this.image = button_sprites;
        this.spriteSize = {w:128, h:128}
        this.frame = {x:1, y:0};
        this.frameCurrent = {x:this.spriteSize.w*this.frame.x, y:this.spriteSize.h*this.frame.y};
        this.pos = {x:pos.x, y:pos.y}
        this.scale = 0.5;
        this.size = {w:this.spriteSize.w*this.scale, h:this.spriteSize.h*this.scale};
    }
}



// Base Tile
export class TowerButton_0_UP0 extends TowerButton{
    constructor(main, pos){
        super(main);
        this.type = 1;
        this.animated = false;
        this.image = button_sprites;
        this.spriteSize = {w:128, h:128}
        this.frame = {x:2, y:0};
        this.frameCurrent = {x:128*2, y:0};
        this.pos = {x:pos.x, y:pos.y}
        this.scale = 0.5;
        this.size = {w:this.spriteSize.w*this.scale, h:this.spriteSize.h*this.scale};
    }
}


// Towers 1
export class TowerButton_1_UP1 extends TowerButton{
    constructor(main, pos){
        super(main);
        this.type = 2;
        this.animated = false;
        this.image = button_sprites;
        this.spriteSize = {w:128, h:128};
        this.frame = {x:1, y:1};
        this.frameCurrent = {x:this.spriteSize.w*this.frame.x, y:this.spriteSize.h*this.frame.y};
        this.scale = 0.5;
        this.size = {w:this.spriteSize.w*this.scale, h:this.spriteSize.h*this.scale};
        this.pos = {x:pos.x, y:pos.y}
        this.angle = 0 * Math.PI / 180.0;
        this.rotate = true;
    }
}


// Towers 1
export class TowerButton_1_UP2 extends TowerButton{
    constructor(main, pos){
        super(main);
        this.type = 3;
        this.animated = false;
        this.image = button_sprites;
        this.spriteSize = {w:128, h:128};
        this.frame = {x:2, y:1};
        this.frameCurrent = {x:this.spriteSize.w*this.frame.x, y:this.spriteSize.h*this.frame.y};
        this.scale = 0.5;
        this.size = {w:this.spriteSize.w*this.scale, h:this.spriteSize.h*this.scale};
        this.pos = {x:pos.x, y:pos.y}
        this.angle = 0 * Math.PI / 180.0;
        this.rotate = true;
    }
}


// Towers 1
export class TowerButton_1_UP3 extends TowerButton{
    constructor(main, pos){
        super(main);
        this.type = 4;
        this.animated = false;
        this.image = button_sprites;
        this.spriteSize = {w:128, h:128};
        this.frame = {x:3, y:1};
        this.frameCurrent = {x:this.spriteSize.w*this.frame.x, y:this.spriteSize.h*this.frame.y};
        this.scale = 0.5;
        this.size = {w:this.spriteSize.w*this.scale, h:this.spriteSize.h*this.scale};
        this.pos = {x:pos.x, y:pos.y}
        this.angle = 0 * Math.PI / 180.0;
        this.rotate = true;
    }
}


// Towers 2
export class TowerButton_2_UP1 extends TowerButton{
    constructor(main, pos){
        super(main);
        this.type = 5;
        this.animated = false;
        this.image = button_sprites;
        this.spriteSize = {w:128, h:128};
        this.frame = {x:1, y:2};
        this.frameCurrent = {x:this.spriteSize.w*this.frame.x, y:this.spriteSize.h*this.frame.y};
        this.scale = 0.5;
        this.size = {w:this.spriteSize.w*this.scale, h:this.spriteSize.h*this.scale};
        this.pos = {x:pos.x, y:pos.y}
        this.angle = 0 * Math.PI / 180.0;
        this.rotate = true;
    }
}


// Towers 2
export class TowerButton_2_UP2 extends TowerButton{
    constructor(main, pos){
        super(main);
        this.type = 6;
        this.animated = false;
        this.image = button_sprites;
        this.spriteSize = {w:128, h:128};
        this.frame = {x:2, y:2};
        this.frameCurrent = {x:this.spriteSize.w*this.frame.x, y:this.spriteSize.h*this.frame.y};
        this.scale = 0.5;
        this.size = {w:this.spriteSize.w*this.scale, h:this.spriteSize.h*this.scale};
        this.pos = {x:pos.x, y:pos.y}
        this.angle = 0 * Math.PI / 180.0;
        this.rotate = true;
    }
}


// Towers 2
export class TowerButton_2_UP3 extends TowerButton{
    constructor(main, pos){
        super(main);
        this.type = 7;
        this.animated = false;
        this.image = button_sprites;
        this.spriteSize = {w:128, h:128};
        this.frame = {x:3, y:2};
        this.frameCurrent = {x:this.spriteSize.w*this.frame.x, y:this.spriteSize.h*this.frame.y};
        this.scale = 0.5;
        this.size = {w:this.spriteSize.w*this.scale, h:this.spriteSize.h*this.scale};
        this.pos = {x:pos.x, y:pos.y}
        this.angle = 0 * Math.PI / 180.0;
        this.rotate = true;
    }
}


// Towers 3
export class TowerButton_3_UP1 extends TowerButton{
    constructor(main, pos){
        super(main);
        this.type = 8;
        this.animated = false;
        this.image = button_sprites;
        this.spriteSize = {w:128, h:128};
        this.frame = {x:1, y:3};
        this.frameCurrent = {x:this.spriteSize.w*this.frame.x, y:this.spriteSize.h*this.frame.y};
        this.scale = 0.5;
        this.size = {w:this.spriteSize.w*this.scale, h:this.spriteSize.h*this.scale};
        this.pos = {x:pos.x, y:pos.y}
        this.angle = 0 * Math.PI / 180.0;
        this.rotate = true;
    }
}


// Towers 3
export class TowerButton_3_UP2 extends TowerButton{
    constructor(main, pos){
        super(main);
        this.type = 9;
        this.animated = false;
        this.image = button_sprites;
        this.spriteSize = {w:128, h:128};
        this.frame = {x:2, y:3};
        this.frameCurrent = {x:this.spriteSize.w*this.frame.x, y:this.spriteSize.h*this.frame.y};
        this.scale = 0.5;
        this.size = {w:this.spriteSize.w*this.scale, h:this.spriteSize.h*this.scale};
        this.pos = {x:pos.x, y:pos.y}
        this.angle = 0 * Math.PI / 180.0;
        this.rotate = true;
    }
}


// Towers 3
export class TowerButton_3_UP3 extends TowerButton{
    constructor(main, pos){
        super(main);
        this.type = 10;
        this.animated = false;
        this.image = button_sprites;
        this.spriteSize = {w:128, h:128};
        this.frame = {x:3, y:3};
        this.frameCurrent = {x:this.spriteSize.w*this.frame.x, y:this.spriteSize.h*this.frame.y};
        this.scale = 0.5;
        this.size = {w:this.spriteSize.w*this.scale, h:this.spriteSize.h*this.scale};
        this.pos = {x:pos.x, y:pos.y}
        this.angle = 0 * Math.PI / 180.0;
        this.rotate = true;
    }
}


// Towers 4
export class TowerButton_4_UP1 extends TowerButton{
    constructor(main, pos){
        super(main);
        this.type = 11;
        this.animated = false;
        this.image = button_sprites;
        this.spriteSize = {w:128, h:128};
        this.frame = {x:1, y:4};
        this.frameCurrent = {x:this.spriteSize.w*this.frame.x, y:this.spriteSize.h*this.frame.y};
        this.scale = 0.5;
        this.size = {w:this.spriteSize.w*this.scale, h:this.spriteSize.h*this.scale};
        this.pos = {x:pos.x, y:pos.y}
        this.angle = 0 * Math.PI / 180.0;
        this.rotate = true;
    }
}


// Towers 4
export class TowerButton_4_UP2 extends TowerButton{
    constructor(main, pos){
        super(main);
        this.type = 12;
        this.animated = false;
        this.image = button_sprites;
        this.spriteSize = {w:128, h:128};
        this.frame = {x:2, y:4};
        this.frameCurrent = {x:this.spriteSize.w*this.frame.x, y:this.spriteSize.h*this.frame.y};
        this.scale = 0.5;
        this.size = {w:this.spriteSize.w*this.scale, h:this.spriteSize.h*this.scale};
        this.pos = {x:pos.x, y:pos.y}
        this.angle = 0 * Math.PI / 180.0;
        this.rotate = true;
    }
}


// Towers 4
export class TowerButton_4_UP3 extends TowerButton{
    constructor(main, pos){
        super(main);
        this.type = 13;
        this.animated = false;
        this.image = button_sprites;
        this.spriteSize = {w:128, h:128};
        this.frame = {x:3, y:4};
        this.frameCurrent = {x:this.spriteSize.w*this.frame.x, y:this.spriteSize.h*this.frame.y};
        this.scale = 0.5;
        this.size = {w:this.spriteSize.w*this.scale, h:this.spriteSize.h*this.scale};
        this.pos = {x:pos.x, y:pos.y}
        this.angle = 0 * Math.PI / 180.0;
        this.rotate = true;
    }
}


// Towers 5
export class TowerButton_5_UP1 extends TowerButton{
    constructor(main, pos){
        super(main);
        this.type = 14;
        this.animated = false;
        this.image = button_sprites;
        this.spriteSize = {w:128, h:128};
        this.frame = {x:1, y:5};
        this.frameCurrent = {x:this.spriteSize.w*this.frame.x, y:this.spriteSize.h*this.frame.y};
        this.scale = 0.5;
        this.size = {w:this.spriteSize.w*this.scale, h:this.spriteSize.h*this.scale};
        this.pos = {x:pos.x, y:pos.y}
        this.angle = 0 * Math.PI / 180.0;
        this.rotate = true;
    }
}


// Towers 5
export class TowerButton_5_UP2 extends TowerButton{
    constructor(main, pos){
        super(main);
        this.type = 15;
        this.animated = false;
        this.image = button_sprites;
        this.spriteSize = {w:128, h:128};
        this.frame = {x:2, y:5};
        this.frameCurrent = {x:this.spriteSize.w*this.frame.x, y:this.spriteSize.h*this.frame.y};
        this.scale = 0.5;
        this.size = {w:this.spriteSize.w*this.scale, h:this.spriteSize.h*this.scale};
        this.pos = {x:pos.x, y:pos.y}
        this.angle = 0 * Math.PI / 180.0;
        this.rotate = true;
    }
}


// Towers 5
export class TowerButton_5_UP3 extends TowerButton{
    constructor(main, pos){
        super(main);
        this.type = 16;
        this.animated = false;
        this.image = button_sprites;
        this.spriteSize = {w:128, h:128};
        this.frame = {x:3, y:5};
        this.frameCurrent = {x:this.spriteSize.w*this.frame.x, y:this.spriteSize.h*this.frame.y};
        this.scale = 0.5;
        this.size = {w:this.spriteSize.w*this.scale, h:this.spriteSize.h*this.scale};
        this.pos = {x:pos.x, y:pos.y}
        this.angle = 0 * Math.PI / 180.0;
        this.rotate = true;
    }
}


// Towers 6
export class TowerButton_6_UP1 extends TowerButton{
    constructor(main, pos){
        super(main);
        this.type = 17;
        this.animated = false;
        this.image = button_sprites;
        this.spriteSize = {w:128, h:128};
        this.frame = {x:1, y:6};
        this.frameCurrent = {x:this.spriteSize.w*this.frame.x, y:this.spriteSize.h*this.frame.y};
        this.scale = 0.5;
        this.size = {w:this.spriteSize.w*this.scale, h:this.spriteSize.h*this.scale};
        this.pos = {x:pos.x, y:pos.y}
        this.angle = 0 * Math.PI / 180.0;
        this.rotate = true;
    }
}


// Towers 6
export class TowerButton_6_UP2 extends TowerButton{
    constructor(game, pos){
        super(game);
        this.type = 18;
        this.animated = false;
        this.image = button_sprites;
        this.spriteSize = {w:128, h:128};
        this.frame = {x:2, y:6};
        this.frameCurrent = {x:this.spriteSize.w*this.frame.x, y:this.spriteSize.h*this.frame.y};
        this.scale = 0.5;
        this.size = {w:this.spriteSize.w*this.scale, h:this.spriteSize.h*this.scale};
        this.pos = {x:pos.x, y:pos.y}
        this.angle = 0 * Math.PI / 180.0;
        this.rotate = true;
    }
}


// Towers 6
export class TowerButton_6_UP3 extends TowerButton{
    constructor(game, pos){
        super(game);
        this.type = 19;
        this.animated = false;
        this.image = button_sprites;
        this.spriteSize = {w:128, h:128};
        this.frame = {x:3, y:6};
        this.frameCurrent = {x:this.spriteSize.w*this.frame.x, y:this.spriteSize.h*this.frame.y};
        this.scale = 0.5;
        this.size = {w:this.spriteSize.w*this.scale, h:this.spriteSize.h*this.scale};
        this.pos = {x:pos.x, y:pos.y}
        this.angle = 0 * Math.PI / 180.0;
        this.rotate = true;
    }
}

















