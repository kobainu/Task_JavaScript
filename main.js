
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

    // 条件式(表示中の末尾が符号の場合)を、定数symbolに代入
    const symbol = (
       result.innerHTML.slice(-1) === '+'
    || result.innerHTML.slice(-1) === '-'
    || result.innerHTML.slice(-1) === '*'
    || result.innerHTML.slice(-1) === '/'
    || result.innerHTML.slice(-1) === '.')

    // 関数宣言(「0」が先頭にならないように制御)
    function display() {
      // 表示中の値が「0」か「00」なら
      if (result.innerHTML == '0' || result.innerHTML == '00') {
        // クリックされた値を表示
        result.innerHTML = pushedValue;
      } else {
        // 表示されている値の末尾に追加して表示
        result.innerHTML += pushedValue;
      }
    }

    // 関数宣言(符号ボタンの連続クリックを制御)
    function symbolOff() {
      // 表示中の末尾が符号の場合は処理なし
      if (symbol) {
        alert('符号は連続で入力できません');
      } else {
        display();
      }
    }

    // クリックされたボタンの値が...
    switch (pushedValue) {
      // 「AC」の場合
      case 'AC':
        // 0を表示
        result.innerHTML = '0';
      break;
      
      // 「=」の場合
      case '=':
        // 表示中の末尾が符号の場合は処理なし
        if (symbol) {
          alert('末尾が符号です')
          return;
        } else {
          // 表示されている値の計算結果を表示
          result.innerHTML = eval(result.innerHTML);
        }
      break;

      // 「+」の場合
      case '+':
        symbolOff();
      break;
      
      // 「-」の場合
      case '-':
        symbolOff();
      break;

      // 「*」の場合
      case '*':
        symbolOff();
      break;

      // 「/」の場合
      case '/':
        symbolOff();
      break;

      // 「.」の場合
      case '.':
        // 複数入力できないよう制御
        if (result.innerHTML.includes('.')) {
          alert('「.」は複数入力できません');
          return;
        } else {
          symbolOff();
        }
      break;

      // それ以外の場合
      default:
        display();
      break;
      }
  });
});
