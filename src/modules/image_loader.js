export function Load_Image(src){
    const image = new Image;
    image.src = src;
    return image;
  }

  export class Image_Init {
      constructor() {
        this.image_list = {

            // Logos
            gear : Load_Image( 'img/icon/logo.png' ),

            // Backgrounds
            bg_00 : Load_Image( 'img/backgrounds/circuitBoard1.png' ),
            bg_01 : Load_Image( 'img/backgrounds/level1.png' ), 
            bg_02 : Load_Image( 'img/backgrounds/level2.png' ),

            // Entities
            enemies : Load_Image( 'img/enemies_01.png' ),
            towers : Load_Image( 'img/towers.png' ), 
            buttons : Load_Image( 'img/buttons.png' )
        }
    }
}

