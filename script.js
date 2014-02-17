var Flappy = function() {
	_ = this;
	_.go = function() {
		t1 = new t();
		t1.x = 400;
		t2 = new t();
		t2.x = 650;
		clearInterval(_.interval)
		_.loop();
		_.events();
		vx = s = 0, vy = -8, gravity = 0.5, xp = 330, init = false, alive = true, t1, t2;
	}

	_.p = {
		w : 25,
		h : 25,
		x : 150,
		y : 250,
		draw : function() {
			a.rect(p.x,p.y,p.w,p.h);
			a.fillStyle = "#e38116";
			a.fill();
			a.stroke();
		}
	};

	_.t = function(I) {
		I = {} || I;
		I.w = 50;
		I.h = 400;
		I.x = 0;
		I.y = -200 + rndm();
		I.draw = function() {
				a.rect(I.x,I.y,I.w,I.h);
				a.rect(I.x,I.y+520,I.w,I.h);
				a.fillStyle = "#74bf2e";
				a.fill();
				// a.lineWidth = 7;
	      		a.strokeStyle = '#9ce759';
	      		a.stroke();
			}

		return I;
	};

	_.rndm = function(){
		if(Math.random()>0.5){
			f  = -Math.floor(Math.random()*13) * 5;
		} else {
			f = Math.floor(Math.random()*13) * 5;
		}
		return f;
	}

	_.collides = function(a,b) {
		var r = false;
			if (a.x < b.x + b.w && a.x + a.w > b.x && a.y + 520 < b.y + b.h && a.y + 520  + a.h > b.y) {
				r = true;
			}
			if (a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y) {
				r = true;
			}
			if (b.y > 385) {
				r = true;	
			}
		return r;
	};
	
	_.pts = function (t1,t2) {
		if(t1.x == 160 || t2.x == 160){
			s ++;
		}
	}

	_.txt = function() {
		a.fillStyle = "#fff";
		a.font = "bold 30px Arial";
		a.fillText(s, 160, 100);
	}

	_.collides = function(a, b) {
		var r = false;
			if (a.x < b.x + b.w && a.x + a.w > b.x && a.y + 520 < b.y + b.h && a.y + 520  + a.h > b.y) {
				r = true;
			}
			if (a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y) {
				r = true;
			}
			if (b.y > 385) {
				r = true;	
			}
		return r;
	}

	_.events = function() {
		c.onclick = function(){
			if (alive) {
				vy = -9;
				init = true;
			} else {
				alive = true;
				_.go();
			}
		}

		tw = function(){
			vy = -9;
		    init = true;
		}

		c.addEventListener("touchstart", tw);
	}

	_.loop = function() {
		_.interval = setInterval(function(){
			a.fillStyle = "#71c5cf";
			a.fillRect(0,0,320,500);
			a.beginPath();

			if (init) {
				if (alive) {
					vy += gravity;
					p.x += vx;
					p.y += vy;
					p.draw();

					if (t1.x > -50) {
						t1.x -= 2;
						t1.draw();
					} else {
						t1 = new t();
						t1.x = 400;
					}

					if (t2.x > -50) {
						t2.x -= 2;
						t2.draw();
					} else {
						t2 = new t();
						t2.x = 400;
					}
					pts(t1,t2);
					txt();
					if(collides(t1,p) || collides(t2,p)){
						alive = false;
					}

				} else {
					t1.draw();
					t2.draw();
					txt();
					a.fillStyle = "#fff";
					a.font = "bold 30px Arial";
					a.fillText("Your are dead!", 60, 100);
				}
			} else {
				a.fillStyle = "#fff";
				a.font = "bold 30px Arial";
				a.fillText("Touch!", 60, 100);
			}

			a.fillStyle = "#dcd994";
			a.fillRect(0,410,320,100);
		},20)
	};
	_.go();
}()