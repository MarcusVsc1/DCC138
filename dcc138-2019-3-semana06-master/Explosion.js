function Explosion(params ={}) {
    exemplo = {
        x: 0,
        y: 0,
        frame: 0,
        w: 64,
        h: 64,
        props: {
            tipo: "boom"
        },
    }
    Object.assign(this, exemplo, params);
}

Explosion.prototype.mover = function(dt){
    this.frame += 26*dt;
    if(Math.floor(this.frame) > 16){
        //this.frame = 0;
        this.morto = true;
    }
}

Explosion.prototype.desenhar = function(){
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.a + Math.PI/2);
    var F = Math.floor(this.frame);
    ctx.drawImage(
        this.scene.assets.img("explosion"),
        (F%4)*64,
        Math.floor(F/4)*64,
        64,
        64,
        -this.w/2,
        -this.h/2,
        this.w,
        this.h 
    );
    ctx.restore();
}

Explosion.prototype.comportar = function(){

}

Explosion.prototype.colidiuCom = function(){
    return false;
}