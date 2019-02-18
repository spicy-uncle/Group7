const oBox = document.getElementById('box');
const staticBtn = document.getElementsByTagName('button')[0];
const moveBtn = document.getElementsByTagName('button')[1];
const numInput = document.getElementsByTagName('input')[0];
const allBtn = document.getElementsByTagName('button')[2];

// 1.按照要求补全剩余代码，实现所示效果（10分）
// 3.正确编写静态数柱的类 （10分）
// 4.静态数柱的类，能够根据数字和背景色创建出不同高度的数柱 （10分）
// 5.正确编写动态数组的类，该类继承自静态数柱的类（10分）
// 6.动态数柱的类能够实现点击元素，数柱有动画效果。（动画效果参考视频）（10分）
// 7.点击代码中的静态数柱的按钮，可以创建静态数柱，要求静态数组的颜色为红色，数字为输入框中输入的数字（10分）
// 8.点击代码中的动态数柱的按钮，可以创建动态数组，要求动态数柱的元素为粉色，数组为输入框中输入的数字（10分）
// 9.要求输入的数字大小限定在 1 – 9的整数（10分）
// 10.点击依次运动按钮，实现所有会动的数柱依次运动的效果 （10分）

class StaticNumBlock { // 静态数柱的类

}

class MoveNumBlock extends StaticNumBlock { // 动态数柱的类

}

// 分别给按钮添加点击事件，实现所要求的的效果
staticBtn.onclick = () => {
    // let staticVal = numInput.value;
    // for (let i = 0; i < staticVal; i++) {
    //     oBox.appendChild('div');
    // }
}

moveBtn.onclick = () => {
    let moveVal = numInput.value;
    for (let i = 0; i < moveVal; i++) {
        oBox.appendChild('div');
    }
}

allBtn.onclick = () => {
    console.log('allBtn');
}