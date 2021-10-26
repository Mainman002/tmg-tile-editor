
// Checks if ob_a (Mouse) Origin is inside in ob_b (Button, Tower, Enemy, etc)
export function Origin(ob_a, ob_b) {

    const inAreaZone = ( ob_a.pos.x + ob_a.size.w * 0.5 ) > 
                        ob_b.pos.x + ob_b.size.w - ob_b.size.w &&

                        ( ob_a.pos.x + ob_a.size.w * 0.5 ) < 
                        ob_b.pos.x + ob_b.size.w &&

                        ( ob_a.pos.y + ob_a.size.h * 0.5 ) > 
                        ob_b.pos.y + ob_b.size.h - ob_b.size.h &&

                        ( ob_a.pos.y + ob_a.size.h * 0.5 ) < 
                        ob_b.pos.y + ob_b.size.h

    return inAreaZone;
} 

// Checks if ob_a (Mouse) + Size is inside in ob_b (Button, Tower, Enemy, etc)
export function Size(ob_a, ob_b) {

    const inAreaZone = ( ob_a.pos.x + ob_a.size.w * 0.5) > 
                        ( ob_b.pos.x + ob_b.size.w - ob_b.size.w ) - ( ob_a.size.w * 0.5 ) &&

                        ( ob_a.pos.x + -ob_a.size.w * 0.5 ) < 
                        ( ob_b.pos.x + ob_b.size.w ) - ( ob_a.size.w * 0.5 ) &&

                        ( ob_a.pos.y + ob_a.size.h * 0.5) > 
                        ( ob_b.pos.y + ob_b.size.h - ob_b.size.h ) - ( ob_a.size.h * 0.5 ) &&

                        ( ob_a.pos.y + -ob_a.size.h * 0.5 ) < 
                        ( ob_b.pos.y + ob_b.size.h ) - ( ob_a.size.h * 0.5 )

    return inAreaZone;
} 

// Checks if ob_a (Mouse) + Size Start / End is inside in ob_b (Button, Tower, Enemy, etc)
export function Line(ob_a, ob_b) {
    const inZoneStart = ( ob_a.start_pos.x + ob_a.size.w * 0.5 ) > 
                        ob_b.pos.x + ob_b.size.w - ob_b.size.w &&

                        ( ob_a.start_pos.x + ob_a.size.w * 0.5 ) < 
                        ob_b.pos.x + ob_b.size.w 

    const inZoneStartX = ( ob_a.start_pos.x + ob_a.size.w * 0.5 ) > 
                    ob_b.pos.x + ob_b.size.w - ob_b.size.w &&

                    ( ob_a.pos.x + ob_a.size.w * 0.5 ) < 
                    ob_b.pos.x + ob_b.size.w

    const inZoneX = ( ob_a.pos.x + ob_a.size.w * 0.5 ) > 
                    ob_b.pos.x + ob_b.size.w - ob_b.size.w &&

                    ( ob_a.start_pos.x + ob_a.size.w * 0.5 ) < 
                    ob_b.pos.x + ob_b.size.w


    const inZoneStartY = ( ob_a.start_pos.y + ob_a.size.h * 0.5 ) > 
                    ob_b.pos.y + ob_b.size.h - ob_b.size.h &&

                    ( ob_a.pos.y + ob_a.size.h * 0.5 ) < 
                    ob_b.pos.y + ob_b.size.h

    const inZoneY = ( ob_a.pos.y + ob_a.size.h * 0.5 ) > 
                    ob_b.pos.y + ob_b.size.h - ob_b.size.h &&

                    ( ob_a.start_pos.y + ob_a.size.h * 0.5 ) < 
                    ob_b.pos.y + ob_b.size.h

    const inAreaZone =  inZoneStartX && inZoneStartY || inZoneX && inZoneY || inZoneStartX && inZoneY || inZoneX && inZoneStartY             
    return inAreaZone;
} 


// Checks if ob_a (Mouse) + Size Start / End is inside in ob_b (Button, Tower, Enemy, etc)
export function Box(ob_a, ob_b) {
    const inZoneStart = ( ob_a.start_pos.x + ob_a.size.w * 0.5 ) > 
                        ob_b.pos.x + ob_b.size.w - ob_b.size.w &&

                        ( ob_a.start_pos.x + ob_a.size.w * 0.5 ) < 
                        ob_b.pos.x + ob_b.size.w 

    const inZoneStartX = ( ob_a.start_pos.x + ob_a.size.w * 0.5 ) > 
                    ob_b.pos.x + ob_b.size.w - ob_b.size.w &&

                    ( ob_a.pos.x + ob_a.size.w * 0.5 ) < 
                    ob_b.pos.x + ob_b.size.w

    const inZoneX = ( ob_a.pos.x + ob_a.size.w * 0.5 ) > 
                    ob_b.pos.x + ob_b.size.w - ob_b.size.w &&

                    ( ob_a.start_pos.x + ob_a.size.w * 0.5 ) < 
                    ob_b.pos.x + ob_b.size.w


    const inZoneStartY = ( ob_a.start_pos.y + ob_a.size.h * 0.5 ) > 
                    ob_b.pos.y + ob_b.size.h - ob_b.size.h &&

                    ( ob_a.pos.y + ob_a.size.h * 0.5 ) < 
                    ob_b.pos.y + ob_b.size.h

    const inZoneY = ( ob_a.pos.y + ob_a.size.h * 0.5 ) > 
                    ob_b.pos.y + ob_b.size.h - ob_b.size.h &&

                    ( ob_a.start_pos.y + ob_a.size.h * 0.5 ) < 
                    ob_b.pos.y + ob_b.size.h

    const inAreaZone =  inZoneStartX && inZoneStartY || inZoneX && inZoneY || inZoneStartX && inZoneY || inZoneX && inZoneStartY             
    return inAreaZone;
} 













