// Draw Manager
import * as Graphics from '../modules/draw_manager.js';

export function Init( game ){ 
    if ( game.debug ) console.log( "Screen Manager Loaded" );

    canvas.width = 1088;
    canvas.height = 640;

    bg.width = canvas.width;
    bg.height = canvas.height;

    weapon.width = canvas.width;
    weapon.height = canvas.height;

    interact.width = canvas.width;
    interact.height = canvas.height;

    Resize( game, game.ctx, canvas );
    Resize( game, game.bgCtx, bg );
    Resize( game, game.weaponCtx, weapon );
    Resize( game, game.interactCtx, interact );

    window.addEventListener( 'resize', function( e ) { 
        Resize( game, game.ctx, canvas );
        Resize( game, game.bgCtx, bg );
        Resize( game, game.weaponCtx, weapon );
        Resize( game, game.interactCtx, interact );
     } );


 }

export function Resize( game, _ctx, _canvas ){ 
    const border = 50;
    const aspect = { w : 6.5, h : 4 };
    const img_smooth = true;
    let w = window.innerWidth;
    let h = w * ( aspect.h / aspect.w );

    if ( h < window.innerHeight ){ 
        // Check window width
        w = window.innerWidth;
        h = w * ( aspect.h / aspect.w );
     } else { 
        // Check window height
        h = window.innerHeight;
        w = h * ( aspect.w / aspect.h );
     }

    if ( game.debug ) console.log( "Resized", "W", Math.floor( w ), "H", Math.floor( h ) );

    _canvas.style.width = `${ w - border }px`;
    _canvas.style.height = `${ h - border }px`;
    
    // Graphic sharpness
    _ctx.mozImageSmoothingEnabled = img_smooth;
    _ctx.msImageSmoothingEnabled = img_smooth;
    _ctx.imageSmoothingEnabled = img_smooth;
    
    // game.bgCtx.clearRect(0,0, bg.width, bg.height);
    Graphics.Image_Simple( game.bgCtx, bg_L_00, { x : 0, y : 0 }, { w : bg.width, h : bg.height }, 1 );
 }