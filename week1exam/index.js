const oBox = document.getElementById('box');
const staticBtn = document.getElementsByTagName('button')[0];
const moveBtn = document.getElementsByTagName('button')[1];
const numInput = document.getElementsByTagName('input')[0];
const allBtn = document.getElementsByTagName('button')[2];
const width = 30;
const height = 30;


class StaticNumBlock { // 静态数柱的类
    constructor(obj) {
        this.oBox = obj.oBox;
        this.numInput = obj.numInput;
        this.staticBtn = obj.staticBtn;
        this.moveBtn = obj.moveBtn;
        this.allBtn = obj.allBtn;
        this.width = obj.width;
        this.height = obj.height;

        this.static();
    }
    static() {
        let num = 0;
        this.staticBtn.onclick = () => {
            num++;
            console.log(num)
            this.staticDiv = document.createElement('div');
            this.staticDiv.className = 'staticBox';
            this.value = this.numInput.value;
            console.log(this.value)
            console.log(this.staticDiv)
            this.height = 30;
            this.height = this.value * this.height;
            console.log(this.height)
            this.html = `
            <div class="staticBox" style="width:${this.width+'px'};height:${this.height+'px'};background:red;">
            ${num}
            </div>
            `
            this.staticDiv.innerHTML = this.html
            this.oBox.append(this.staticDiv);
        }

    }
}

class MoveNumBlock extends StaticNumBlock { // 动态数柱的类
    constructor(obj) {
        super(obj);
        this.move();
        this.all();
    }
    move() {
        let num = 0;
        this.moveBtn.onclick = () => {
            num++;
            this.moveDiv = document.createElement('div');
            this.moveDiv.className = 'movebox';
            this.value = this.numInput.value;
            console.log(this.value)
            console.log(this.moveDiv)
            this.height = 30;
            this.height = this.value * this.height;
            console.log(this.height)
            this.html = `
            <div class="movebox jump" style="width:${this.width+'px'};height:${this.height+'px'};background:pink;">
            ${num}
            </div>
            `
            this.moveDiv.innerHTML = this.html
            this.oBox.append(this.moveDiv);
        }
    }
    all() {
        this.allBtn.onclick = () => {
            let arrdiv = [...this.oBox.children];
            arrdiv.map((item) => {
                console.log(item)
                if (item.className == 'movebox') {
                    item.classList.add('jump')
                }
            })
        }
    }
}