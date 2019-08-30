function Sprite(params = {}) {
    var exemplo = {
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        h: 10,
        w: 10,
        va: 0,
        vm: 0,
        color: "blue",
        imune: 0,
        atirando: 0,
        angle: 0,
        cooldown: 0,
        comportar: undefined,
        scene: undefined
    }
    Object.assign(this, exemplo, params);
}
Sprite.prototype = new Sprite();
Sprite.prototype.constructor = Sprite;

Sprite.prototype.desenhar = function(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    
    ctx.rotate(this.angle);
    ctx.fillStyle = this.color;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(-this.w/2, -this.h/2);
    ctx.lineTo(-this.w/2, +this.h/2);
    ctx.lineTo(+this.w/2, 0);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    
    ctx.restore();
};



Sprite.prototype.mover = function (dt) {
    this.angle = this.angle + this.va*dt;
    this.vx = this.vm*Math.cos(this.angle);
    this.vy = this.vm*Math.sin(this.angle);
    this.x = this.x + this.vx*dt;
    this.y = this.y + this.vy*dt;
    this.cooldown = this.cooldown-dt;
}
