const oBox = document.getElementById('box');
const staticBtn = document.getElementsByTagName('button')[0];
const moveBtn = document.getElementsByTagName('button')[1];
const numInput = document.getElementsByTagName('input')[0];
const allBtn = document.getElementsByTagName('button')[2];

class StaticNumBlock { // 静态数柱的类
    constructor() {
        this.init();
        this.move();
    }
    init() {
        staticBtn.onclick = () => {
            let val = numInput.value;
            if (val != '' && val != '0' && val <= 9) {
                if (val === '1') {
                    oBox.innerHTML += `<div class="numT">
                                        <span>${val}</span>
                                    </div>`
                } else {
                    oBox.innerHTML += `<div class="numT" style="height:${(val*10)+30}px">
                                        <span>${val}</span>
                                    </div>`
                }
            }
        }
    }
    move() { // 动态数柱的类
        moveBtn.onclick = () => {
            let val = numInput.value;
            if (val != '' && val != '0' && val <= 9) {
                if (val === '1') {
                    oBox.innerHTML += `<div class="jump">
                                        <span>${val}</span>
                                    </div>`
                } else {
                    oBox.innerHTML += `<div class="jump" style="height:${(val*10)+30}px">
                                        <span>${val}</span>
                                        </div>`
                }
                let allmoveBtn = [...document.querySelectorAll('.jump')];
                this.all(allmoveBtn);
            }
        }
    }
    all(allmoveBtn) { // 分别给按钮添加点击事件，实现所要求的的效果
        if (allmoveBtn.length > 0) {
            allBtn.onclick = () => {
                allmoveBtn.map((item) => {
                    //执行动画
                    console.log(allmoveBtn.length)
                })
            }
        }

    }
}