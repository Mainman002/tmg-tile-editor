export function Move(game) {
    window.addEventListener('mousemove', function(e) {
        let bounds = canvas.getBoundingClientRect();

        // get the mouse coordinates, subtract the canvas top left and any scrolling
        game.mouse.pos.x = e.pageX - bounds.left - scrollX;
        game.mouse.pos.y = e.pageY - bounds.top - scrollY;

        // first normalize the mouse coordinates from 0 to 1 (0,0) top left
        // off canvas and (1,1) bottom right by dividing by the bounds width and height
        game.mouse.pos.x /= bounds.width; 
        game.mouse.pos.y /= bounds.height; 

        // then scale to canvas coordinates by multiplying the normalized coords with the canvas resolution
        game.mouse.pos.x *= canvas.width;
        game.mouse.pos.y *= canvas.height;

        // Center Mouse Bounds
        game.mouse.pos.x = game.mouse.pos.x - game.mouse.size.w * 0.5;
        game.mouse.pos.y = game.mouse.pos.y - game.mouse.size.h * 0.5;

        if ( !game.mouse.click ) {
            game.mouse.start_pos.x = game.mouse.pos.x;
            game.mouse.start_pos.y = game.mouse.pos.y;
        }

    });


}


export function Leave(game) {
    window.addEventListener('mouseleave', function(e) {
        game.mouse.pos.x = null;
        game.mouse.pos.y = null;

        game.mouse.start_pos.x = null;
        game.mouse.start_pos.y = null;

        game.mouse.click = false;
    });
}


export function Down(game) {
    window.addEventListener( 'mousedown', function( e ) { 
        game.mouse.start_pos.x = game.mouse.pos.x;
        game.mouse.start_pos.y = game.mouse.pos.y;
        game.mouse.click = true;
    } );
}


export function Up(game) {
    window.addEventListener('mouseup', function(e) {
        game.mouse.click = false;
        game.return_map();
    });
}

