class BananaBeat {
  constructor() {
    this.a = document.querySelector(".container__item--a");
    this.s = document.querySelector(".container__item--s");
    this.d = document.querySelector(".container__item--d");
    this.f = document.querySelector(".container__item--f");
    this.k = document.querySelector(".container__item--k");
    this.space = document.querySelector(".container__item--space");
    this.active;
    this.activeBit;
    this.aBit = document.getElementById("a");
    this.sBit = document.getElementById("s");
    this.dBit = document.getElementById("d");
    this.fBit = document.getElementById("f");
    this.kBit = document.getElementById("k");
    this.spaceBit = document.getElementById("space");
  }
  hittedkey(e) {
    switch (e.keyCode) {
      case 65: //a
        this.a.classList.toggle("active");
        this.active = this.a;
        this.activeBit = this.aBit;
        break;
      case 83: //s
        this.s.classList.toggle("active");
        this.active = this.s;
        this.activeBit = this.sBit;
        break;
      case 68: //d
        this.d.classList.toggle("active");
        this.active = this.d;
        this.activeBit = this.dBit;
        break;
      case 70: //f
        this.f.classList.toggle("active");
        this.active = this.f;
        this.activeBit = this.fBit;
        break;
      case 75: //k
        this.k.classList.toggle("active");
        this.active = this.k;
        this.activeBit = this.kBit;
        break;
      case 32: //k
        this.space.classList.toggle("active");
        this.active = this.space;
        this.activeBit = this.spaceBit;
        break;
      case 13: //k
        this.space.classList.toggle("active");
        
        this.active = this.space;
        this.activeBit = this.spaceBit;
        break;
        default:
            this.space.classList.toggle("active");
        this.active = this.space;
        this.activeBit = this.spaceBit;
        break
    }
    this.activeBit.currentTime = 0;
    this.activeBit.play();
    this.active.addEventListener("animationend", () => {
      this.active.classList.remove("active");
    });
  }
}

const beater = new BananaBeat();

window.addEventListener("keydown", function (e) {
  beater.hittedkey(e);
});
