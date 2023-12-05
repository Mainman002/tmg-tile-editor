export function init(main) {
    document.addEventListener("touchstart", touch2Mouse, true);
    document.addEventListener("touchmove", touch2Mouse, true);
    document.addEventListener("touchend", touch2Mouse, true);

    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    }, false);

    function touch2Mouse(e) {
        let theTouch = e.changedTouches[0];

        switch(e.type)
        {
            case "touchstart": 
                add_event( theTouch, "mousedown" );

                // if ( main.mouse.click && main.mouse.first_click ) {
                //     main.mouse.start_pos.x = main.mouse.pos.x;
                //     main.mouse.start_pos.y = main.mouse.pos.y;
                //     main.mouse.first_click = false;
                // }
                
                main.mouse.click = true; 
                break;  
            case "touchend":   
                add_event( theTouch, "mouseup" );
                break;  
            case "touchmove":  
                add_event( theTouch, "mousemove" );
                break;
            default: return;
        }
    }
}
  

function add_event( _touch, _event ) {
    const mouseEvent = document.createEvent("MouseEvent");
    mouseEvent.initMouseEvent(_event, true, true, window, 1, _touch.screenX, _touch.screenY, _touch.clientX, _touch.clientY, false, false, false, false, 0, null);
    _touch.target.dispatchEvent(mouseEvent);
}

