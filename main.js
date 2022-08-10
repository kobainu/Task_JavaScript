// 表示する値(初期値0)を取得し、変数resultに代入
let result = document.getElementById('result');
// ボタンの要素を一括取得
const buttons = document.querySelectorAll('button');

// 繰り返し処理
buttons.forEach((button) => {
  // ボタンがクリックされた時、以下の処理を実行
  button.addEventListener('click', () => {
    // クリックされたボタンの値を変数pushedValueに代入
    let pushedValue = button.innerHTML;

    // クリックされたボタンの値が...
    switch (pushedValue) {
      // 「AC」の場合
      case 'AC':
        // 0を表示
        result.innerHTML = '0';
      break;
      
      // 「=」の場合
      case '=':
        // 表示されている値の計算結果を表示
        result.innerHTML = eval(result.innerHTML);
      break;

      // それ以外の場合
      default:
        // 表示されている値が「0」か「00」なら
        if (result.innerHTML == '0' || result.innerHTML == '00') {
          // クリックされた値を表示
          result.innerHTML = pushedValue;}
        // 表示されている値がそれ以外なら
        else {
          // 表示されている値の末尾に追加して表示
          result.innerHTML += pushedValue;}
      break;
    };
  });
});
