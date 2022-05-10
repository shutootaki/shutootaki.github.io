const quiz = [
    {
      question: '茅ケ崎市出身の有名アーティストは誰？',
      answers: [ '桑田佳祐', '宇多田ヒカル', '華原朋美', '松田聖子'],
      correct: '桑田佳祐'
    }, {
      question: 'せんべいやスナック菓子の「サラダ味」とは、何の味のこと？',
      answers: [ 'サラダ（野菜）', 'さらっとした味', 'サラダ油', 'ドレッシング'],
      correct: 'サラダ油'
    }, {
      question: '私の中学生時代のあだ名は？',
      answers: [ 'たきお', '秀治', 'しゅう', '秀明'],
      correct: '秀明'
    }
  ];
  
  const $window = window;
  const $doc = document;
  const $question = $doc.getElementById('js-question');
  const $buttons = $doc.querySelectorAll('.btn');
  
  const quizLen = quiz.length;
  let quizCount = 0;
  let score = 0;
  
  const init = () => {
    $question.textContent = quiz[quizCount].question;
    
    const buttonLen = $buttons.length;
    let btnIndex = 0;
    
    while(btnIndex < buttonLen){
      $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
      btnIndex++;
    }
  };
  
  const goToNext = () => {
    quizCount++;
    if(quizCount < quizLen){
      init(quizCount);
    } else {
      // $window.alert('クイズ終了！');
      showEnd();
    }
  };
  
  const judge = (elm) => {
    if(elm.textContent === quiz[quizCount].correct){
      $window.alert('正解!');
      score++;
    } else {
      $window.alert('不正解!');
    }
    goToNext();
  };
  
  const showEnd = () => {
    $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
    
    const $items = $doc.getElementById('js-items');
    $items.style.visibility = 'hidden';
  };
  
  init();
  
  let answersIndex = 0;
  let answersLen = quiz[quizCount].answers.length;
  
  while(answersIndex < answersLen){
    $buttons[answersIndex].addEventListener('click', (e) => {
      judge(e.target);
    });
    answersIndex++;
  }
