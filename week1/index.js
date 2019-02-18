const oBox = document.getElementById('box');
const staticBtn = document.getElementsByTagName('button')[0];
const moveBtn = document.getElementsByTagName('button')[1];
const numInput = document.getElementsByTagName('input')[0];
const allBtn = document.getElementsByTagName('button')[2];
class StaticNumBlock { // 静态数柱的类
    constructor(opts) {
        this.redBlock();
    }
    redBlock() {
        staticBtn.onclick = () => {
            if (numInput.value) {
                oBox.innerHTML += `<p class="red">
                                        <span>${numInput.value}</span>
                                    </p>`;
                let height = 30;
                height = height + 5 * (numInput.value - 1);
                oBox.children[oBox.children.length - 1].style.height = height + 'px';
            }
        }
    }
}

class MoveNumBlock { // 动态数柱的类
    constructor(opts) {
        this.pinkBlock()
    }
    pinkBlock() {
        moveBtn.onclick = () => {
            if (numInput.value) {
                oBox.innerHTML += `<p class="pink">
                                        <span>${numInput.value}</span>
                                    </p>`;
                let height = 30;
                let aniList = [...oBox.children];
                height = height + 5 * (numInput.value - 1);
                oBox.children[oBox.children.length - 1].style.height = height + 'px';
                aniList.map((v) => {
                    if (v.classList.contains('pink')) {
                        aniList.map((item) => {
                            item.classList.remove('jump');
                        })
                        v.onclick = () => {
                            aniList.map((item) => {
                                item.classList.remove('jump');
                            })
                            v.classList.add('jump');
                        }
                    }
                })
            }
        }

        allBtn.onclick = () => {
            if (oBox.children.length > 0) {
                let allList = [...oBox.children];
                allList.map((item) => {
                    if (item.classList.contains('pink')) {
                        item.classList.remove('jump');
                    }
                })
                allList.map((v, i) => {
                    if (v.classList.contains('pink')) {
                        v.classList.add('jump');
                        v.style.animationDelay = i / 10 + 's';
                    }
                })
            }
        }
    }
}

// 分别给按钮添加点击事件，实现所要求的的效果
new StaticNumBlock()

new MoveNumBlock();