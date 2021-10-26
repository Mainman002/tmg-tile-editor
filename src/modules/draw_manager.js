export function Text(_ctx, _text, _font, _size, _align, _color, _a, _pos){
    _ctx.globalAlpha = _a;
    _ctx.textAlign = _align;
    _ctx.fillStyle = _color;

    if (_font){
        _ctx.font = `${_size}px ${_font}`;
    } else {
        _ctx.font = `${_size}px ${"Noto Sans"}`;
    }

    _ctx.fillText(`${_text}`, _pos.x, _pos.y);
    _ctx.globalAlpha = 1;
}


export function Box_Simple(_ctx, _pos, _size, _color, _a){
    _ctx.globalAlpha = _a;
    _ctx.fillStyle = _color;
    _ctx.fillRect(_pos.x, _pos.y, _size.w, _size.h);
    _ctx.globalAlpha = 1;
}


export function Box(_ctx, _pos, _size, _rot, _color, _a){
    _ctx.globalAlpha = _a;
    _ctx.fillStyle = _color;

    _ctx.save();
    // _ctx.translate(_pos.x - _pos.x, _pos.y - _pos.y);
    _ctx.rotate(_rot);

    _ctx.fillRect(_pos.x - _size.w, _pos.y - _size.h, _size.w, _size.h);

    _ctx.restore();
    _ctx.globalAlpha = 1;
}


export function Line_Box(_ctx, _start_pos, _end_pos, _size, _r, _color){
    this.Line(_ctx, {x: _start_pos.x, y: _start_pos.y}, {x: _end_pos.x, y: _start_pos.y}, _size, _r, _color);
    this.Line(_ctx, {x: _start_pos.x, y: _start_pos.y}, {x: _start_pos.x, y: _end_pos.y}, _size, _r, _color);
    this.Line(_ctx, {x: _start_pos.x, y: _end_pos.y}, {x: _end_pos.x, y: _end_pos.y}, _size, _r, _color);
    this.Line(_ctx, {x: _end_pos.x, y: _start_pos.y}, {x: _end_pos.x, y: _end_pos.y}, _size, _r, _color);
}


export function Bevel_Outline(_ctx, _pos, _size, _r, _color, _a){
    _ctx.beginPath();

    _ctx.strokeStyle = _color;
    _ctx.globalAlpha = _a;

    // Set faux rounded corners
    _ctx.lineJoin = "round";
    _ctx.lineWidth = _r;

    // Stroke Outline
    _ctx.strokeRect(_pos.x+(_r/2), _pos.y+(_r/2), _size.w-_r, _size.h-_r);
    
    _ctx.closePath();
    _ctx.globalAlpha = 1.0;
  }


  export function Circle(_ctx, pos, size, radius, thickness, color){
    let X = pos.x + size.w * 0.5;
    let Y = pos.y + size.h * 0.5;
    let R = radius;

    if (radius > 0) {
        _ctx.beginPath();
        _ctx.arc(X, Y, R, 0, 2  *  Math.PI, false);
        _ctx.lineWidth = thickness;
        _ctx.strokeStyle = color;
        _ctx.stroke();
    }
}

// export function Line(_ctx, _ob, thickness, color){
//     _ctx.strokeStyle = color;
//     _ctx.lineWidth = thickness;

//     // draw a red line
//     _ctx.beginPath();
//     _ctx.moveTo(this.pos.x + this.size.w * 0.5, this.pos.y + this.size.h * 0.5);
//     _ctx.lineTo(_ob.pos.x + _ob.size.w * 0.5, _ob.pos.y + _ob.size.h * 0.5);
//     _ctx.stroke();
// }


export function Line(_ctx, pos_start, pos_end, size, thickness, color){
    _ctx.strokeStyle = color;
    _ctx.lineWidth = thickness;

    // draw a red line
    _ctx.beginPath();
    _ctx.moveTo(pos_end.x+size.w*0.5, pos_end.y+size.h*0.5);
    _ctx.lineTo(pos_start.x+size.w*0.5, pos_start.y+size.h*0.5);
    _ctx.stroke();
}


export function Image(_ctx, _image, _frame, _pos, _size, _rot, _spriteSize, _a){
    _ctx.globalAlpha = _a;

    _ctx.save();
    _ctx.translate(_pos.x, _pos.y);
    _ctx.rotate(_rot);

    _ctx.drawImage(_image, 
    _frame.x, _frame.y, _spriteSize.w, _spriteSize.h, 
    _pos.x-_pos.x-_size.w * 0.5, _pos.y-_pos.y-_size.h * 0.5, 
    _size.w, _size.h);

    _ctx.restore();
    _ctx.globalAlpha = 1.0;
}


export function Image_Simple(_ctx, _image, _pos, _size, _a){
    _ctx.globalAlpha = _a;

    // _ctx.save();
    // _ctx.translate(_pos.x, _pos.y);
    // _ctx.rotate(_rot);

    _ctx.drawImage(_image, 
    _pos.x, _pos.y, _size.w, _size.h);

    // _ctx.restore();
    _ctx.globalAlpha = 1.0;
}

