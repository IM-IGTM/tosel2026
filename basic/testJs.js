window.onload = function () {
  // -----------------------------
  // 0. 학생 이름 및 초기 설정
  // -----------------------------
  const urlParams = new URLSearchParams(window.location.search);
  const studentNameValue = urlParams.get("studentName") || "이름 정보 없음";

  // -----------------------------
  // 1. 원본 데이터 (Basic 단계 - 이미지 없음)
  // -----------------------------
  const rawData = [
    // 1유형 (뜻 맞추기 - 10초)
    { q: "남편", a: "husband", type: 1 },
    { q: "부딪치다", a: "bump", type: 1 },
    { q: "진흙", a: "mud", type: 1 },
    { q: "사전", a: "dictionary", type: 1 },
    { q: "건강", a: "health", type: 1 },
    { q: "태어난 곳의, 토박이의, ~출신인 사람", a: "native", type: 1 },
    { q: "두꺼비", a: "toad", type: 1 },
    { q: "기름, 오일", a: "oil", type: 1 },
    { q: "노(배)를 젓다, 열(줄)", a: "row", type: 1 },
    { q: "추측하다, 알아맞히다, 알아내다", a: "guess", type: 1 },
    { q: "예복 (가운)", a: "robe", type: 1 },
    { q: "뿌리다", a: "sprinkle", type: 1 },
    { q: "이륙하다 (날아오르다)", a: "take off", type: 1 },
    { q: "노동자, 일을 하는 사람", a: "worker", type: 1 },
    { q: "누구나, 아무나", a: "anyone", type: 1 },
    { q: "(여행용) 짐, 수하물", a: "luggage", type: 1 },
    { q: "부활절", a: "easter", type: 1 },
    { q: "어리석은, 바보 같은", a: "silly", type: 1 },
    { q: "스트레스를 받다, 스트레스", a: "stress", type: 1 },
    { q: "구성원, 회원", a: "member", type: 1 },
    { q: "논평, 언급, 논평하다, 견해를 밝히다", a: "comment", type: 1 },
    { q: "성", a: "castle", type: 1 },
    { q: "경보, 경고 신호", a: "alarm", type: 1 },
    { q: "유럽", a: "Europe", type: 1 },
    { q: "어느 하나, ~도(또한)", a: "either", type: 1 },
    { q: "욕조, 목욕시키다", a: "bath", type: 1 },
    { q: "가면, 마스크, 복면", a: "mask", type: 1 },
    { q: "사실", a: "fact", type: 1 },
    { q: "동전, 주화", a: "coin", type: 1 },
    { q: "호각, 호루라기, 호각 소리, 휘파람을 불다", a: "whistle", type: 1 },
    { q: "배우", a: "actor", type: 1 },
    { q: "느낌(기분), 생각", a: "feeling", type: 1 },
    { q: "베개", a: "pillow", type: 1 },
    { q: "흐르다, 쏟다, 유출", a: "spill", type: 1 },
    { q: "침착한, 차분한", a: "calm", type: 1 },
    { q: "직원", a: "staff", type: 1 },
    { q: "수영장", a: "pool", type: 1 },
    { q: "열기, 열, 뜨겁게 만들다", a: "heat", type: 1 },
    { q: "물개, 바다표범", a: "seal", type: 1 },
    { q: "조종사, 비행사", a: "pilot", type: 1 },
    { q: "(사물을 가리키는) 것, 물건, 사물", a: "thing", type: 1 },
    { q: "유치원", a: "kindergarten", type: 1 },
    { q: "죽이다", a: "kill", type: 1 },
    { q: "체육관", a: "gym", type: 1 },
    { q: "강의, 과정, 항로", a: "course", type: 1 },
    { q: "범주, 분류", a: "category", type: 1 },
    { q: "환영하다, 맞다", a: "greet", type: 1 },
    { q: "주소", a: "address", type: 1 },
    { q: "쓸다, 청소하다", a: "sweep", type: 1 },
    { q: "쉬운", a: "easy", type: 1 },
    { q: "(돈을) 벌다, 얻다", a: "earn", type: 1 },
    { q: "창조하다", a: "create", type: 1 },
    { q: "암탉, (새의) 암컷", a: "hen", type: 1 },
    { q: "암호, 부호", a: "code", type: 1 },
    { q: "문제, 곤란", a: "trouble", type: 1 },
    { q: "병원", a: "hospital", type: 1 },
    { q: "첼로", a: "cello", type: 1 },
    { q: "팀 (단체)", a: "team", type: 1 },
    { q: "조리(요리)법", a: "recipe", type: 1 },
    { q: "~할 수 있는", a: "able", type: 1 },
    { q: "실패하다, ~하지 못하다", a: "fail", type: 1 },
    { q: "바베큐(숯불구이)", a: "barbecue", type: 1 },
    { q: "문, 정문, 대문", a: "gate", type: 1 },
    { q: "더 (많이)", a: "more", type: 1 },
    { q: "품목, 항목", a: "item", type: 1 },
    { q: "득점, 점수, 득점하다", a: "score", type: 1 },
    { q: "전체의, 모든, 온전한", a: "whole", type: 1 },
    { q: "하지만, 그러나", a: "however", type: 1 },
    { q: "활동", a: "activity", type: 1 },
    { q: "중요한, 영향력이 큰", a: "important", type: 1 },

    // 2유형 (빈칸 단문 - 15초)
    {
      q: "I put my pens in a small ____.\n Now they are safe in my bag.",
      a: "case",
      type: 2,
    },
    {
      q: "I do not know the way.\n I will ____ my friend.",
      a: "follow",
      type: 2,
    },
    {
      q: "Korean is my first ____.\n I also study English.",
      a: "language",
      type: 2,
    },
    { q: "These shoes are too ____.\n My feet hurt.", a: "tight", type: 2 },
    {
      q: "Can you ____ this math problem?\n The answer is 12.",
      a: "solve",
      type: 2,
    },
    {
      q: "My phone does not work.\n There is a ____ with it.",
      a: "problem",
      type: 2,
    },
    {
      q: "Write your name on the ____.\n Then put it on your bag.",
      a: "label",
      type: 2,
    },
    { q: "The fish is in the ____.\n It cannot swim away.", a: "net", type: 2 },
    {
      q: "Please ____ your bag from the chair.\n I want to sit there.",
      a: "remove",
      type: 2,
    },
    {
      q: "We waited for the train.\n Its ____ was late.",
      a: "arrival",
      type: 2,
    },
    {
      q: "You need a ticket for _____.\n You cannot go in first.",
      a: "entry",
      type: 2,
    },
    {
      q: "Water is important for ____.\n People and animals need it.",
      a: "life",
      type: 2,
    },
    {
      q: "Use a ____ for the cake.\n Do not use your hands.",
      a: "fork",
      type: 2,
    },
    {
      q: "We are in the hotel ____.\n Dad is talking to the hotel worker.",
      a: "lobby",
      type: 2,
    },
    {
      q: "The classroom is too ____.\n I cannot hear the teacher.",
      a: "noisy",
      type: 2,
    },
    {
      q: "I ate eggs and ____ this morning.\n The meat was very good.",
      a: "bacon",
      type: 2,
    },
    {
      q: "I thought the box was empty.\n It was ____ full.",
      a: "actually",
      type: 2,
    },
    {
      q: "The cookie is a star.\n Its ____ is not a circle.",
      a: "shape",
      type: 2,
    },
    {
      q: "We went on a big ship.\n It was my first ____.",
      a: "cruise",
      type: 2,
    },
    {
      q: "Take this ____ after dinner.\n It will help you feel better.",
      a: "medicine",
      type: 2,
    },

    // 3유형 (빈칸 장문/복합문 - 20초)
    {
      q: "You must be careful to use the right ____ing.\n He ____ed them with an OK sign.",
      a: "greet",
      type: 3,
    },
    {
      q: "Later, British school boys called the ____s by the nickname Assocer.\n Messi was very good at soccer,\n so a soccer ____ in Spain helped pay for his medicine.",
      a: "team",
      type: 3,
    },
    {
      q: "And you can hear his mother ____ing at him.\n His mother ____ed at him to stop, but he didn't listen.",
      a: "yell",
      type: 3,
    },
    {
      q: "Leo is a lion and kills many people in the ____.\n Then all the young men in the ____ will love me!",
      a: "village",
      type: 3,
    },
    {
      q: "Nearby, there was a boy who played the ____.\n He played the ____ as he walked.",
      a: "violin",
      type: 3,
    },
    {
      q: "She asked two ducks to carry her ____ the sky.\n They flew up ____ the air.",
      a: "into",
      type: 3,
    },
    {
      q: "George Washington loved dogs a ____.\n She travels a ____ and learns many languages.",
      a: "lot",
      type: 3,
    },
    {
      q: "When she became 78 years old,\n she couldn't do hard ____ anymore.\n His father ____ed in a factory, and his mother cleaned houses.",
      a: "work",
      type: 3,
    },
    {
      q: "He took a big drink from the cup, but it was ____ full.\n We ____ use his creative invention today.",
      a: "still",
      type: 3,
    },
    {
      q: "At 12, she left home and worked for a wealthy family on their ____.\n The donkey decides to leave the ____.",
      a: "farm",
      type: 3,
    },
  ];

  // -----------------------------
  // 2. 공통 함수: 셔플 및 보기 생성
  // -----------------------------
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const allAnswers = rawData.map((item) => item.a);

  const questions = rawData.map((item) => {
    const wrongOptions = shuffle(allAnswers.filter((a) => a !== item.a)).slice(
      0,
      3,
    );
    const options = shuffle([item.a, ...wrongOptions]);
    return {
      title: item.q,
      options: options,
      correctIndex: options.indexOf(item.a),
      img: null,
      type: item.type || 1,
    };
  });

  // -----------------------------
  // 3. 정답 테이블 동적 생성 (결과창)
  // -----------------------------
  const tbody = document.querySelector(".answer-table tbody");
  if (tbody) {
    tbody.innerHTML = "";
    const totalQuestions = questions.length;
    const groupSize = 5;
    const groupCount = Math.ceil(totalQuestions / groupSize);

    for (let g = 0; g < groupCount; g++) {
      const start = g * groupSize + 1;
      const titleRow = document.createElement("tr");
      const titleLabelCell = document.createElement("td");
      titleLabelCell.textContent = "문제";
      titleRow.appendChild(titleLabelCell);

      const answerRow = document.createElement("tr");
      const answerLabelCell = document.createElement("td");
      answerLabelCell.textContent = "선택";
      answerRow.appendChild(answerLabelCell);

      for (let n = start; n < start + groupSize && n <= totalQuestions; n++) {
        const titleTd = document.createElement("td");
        titleTd.id = "title-q" + n;
        titleTd.className = "question-title-cell";
        titleTd.textContent = questions[n - 1].title.split("\n")[0];
        titleRow.appendChild(titleTd);

        const answerTd = document.createElement("td");
        answerTd.id = "answer-q" + n;
        answerTd.className = "answer";
        answerRow.appendChild(answerTd);
      }
      tbody.appendChild(titleRow);
      tbody.appendChild(answerRow);
    }
  }

  // -----------------------------
  // 4. 시험 상태 변수 및 타이머
  // -----------------------------
  let currentQuestion = 0;
  let selectedIndex = null;
  let timeLeft = 10;
  let countdownInterval = null;
  let correctCount = 0;

  const questionLabel = document.getElementById("questionLabel");
  const buttons = [
    document.querySelector(".one"),
    document.querySelector(".two"),
    document.querySelector(".three"),
    document.querySelector(".four"),
  ];
  const timerSpan = document.getElementById("timer-sec");

  function startTimer(duration) {
    if (countdownInterval) clearInterval(countdownInterval);
    timeLeft = duration;
    if (timerSpan) timerSpan.textContent = timeLeft;

    countdownInterval = setInterval(() => {
      timeLeft--;
      if (timerSpan) timerSpan.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        handleTimeout();
      }
    }, 1000);
  }

  function handleTimeout() {
    if (currentQuestion >= questions.length) return;
    const qNum = currentQuestion + 1;
    const cell = document.getElementById("answer-q" + qNum);
    if (cell) {
      cell.textContent = "-";
      cell.classList.add("wrong-cell");
    }
    currentQuestion++;
    currentQuestion < questions.length ? renderQuestion() : finishExam();
  }

  function finishExam() {
    if (countdownInterval) clearInterval(countdownInterval);

    const testPanel = document.querySelector(".test-panel-wrapper");
    if (testPanel) {
      testPanel.style.display = "none";
    }

    const examOverPanel = document.querySelector(".examOver");
    if (examOverPanel) {
      examOverPanel.style.display = "block";
    }
  }

  // -----------------------------
  // 5. 문제 렌더링 (Basic 전용 - 하단 레이아웃 완벽 정리)
  // -----------------------------
  function renderQuestion() {
    const q = questions[currentQuestion];
    if (!q) return;

    selectedIndex = null;

    // 선택 해제
    buttons.forEach((btn) => {
      if (btn) {
        btn.classList.remove("selected");
        const chk = btn.querySelector(".check-icon");
        if (chk) chk.remove();
      }
    });

    // 기존 <img> 태그가 잔존해 있다면 완전히 삭제 (Basic은 이미지 사용 안 함)
    let existingImg = document.getElementById("questionImage");
    if (existingImg) {
      existingImg.remove();
    }

    // [★ 핵심] 하단 돋보기/더하기 데코 영역 완전 삭제 (유령 공간 제거)
    const footerDeco = document.querySelector(".card-footer-deco");
    if (footerDeco) {
      footerDeco.remove();
    }

    // 텍스트 출력
    if (questionLabel) {
      questionLabel.innerHTML = q.title.replace(/\n/g, "<br>");
    }

    // [★ 핵심] 보기 텍스트 안전하게 주입 (A, B, C, D 뱃지 파괴 방지)
    q.options.forEach((opt, idx) => {
      const btn = buttons[idx];
      if (btn) {
        const textSpan = btn.querySelector(".opt-text");
        if (textSpan) {
          textSpan.textContent = opt;
        } else {
          btn.textContent = opt;
        }
      }
    });

    const btnFive = document.querySelector(".five");
    if (btnFive) btnFive.style.display = "none";

    // 시간 배정
    let duration = 10;
    if (q.type === 2) duration = 15;
    if (q.type === 3) duration = 20;

    startTimer(duration);
  }

  function handleAnswer(choiceIndex) {
    const q = questions[currentQuestion];
    if (countdownInterval) clearInterval(countdownInterval);

    const qNum = currentQuestion + 1;
    const cell = document.getElementById("answer-q" + qNum);
    if (cell) cell.textContent = q.options[choiceIndex];

    if (choiceIndex === q.correctIndex) {
      correctCount++;
    } else {
      if (cell) cell.classList.add("wrong-cell");
    }

    currentQuestion++;
    currentQuestion < questions.length ? renderQuestion() : finishExam();
  }

  // -----------------------------
  // 6. 이벤트 리스너 (키보드 및 결과)
  // -----------------------------
  const keyToIndex = { 1: 0, 2: 1, 3: 2, 4: 3 };
  document.addEventListener("keydown", (e) => {
    if (currentQuestion >= questions.length) return;

    if (e.code === "Space") {
      e.preventDefault();
      if (selectedIndex === null) {
        alert("먼저 1~4 중 하나를 선택하세요.");
        return;
      }
      handleAnswer(selectedIndex);
    }

    const idx = keyToIndex[e.key];
    if (idx !== undefined) {
      selectedIndex = idx;
      buttons.forEach((btn, i) => {
        if (btn) {
          if (i === idx) {
            btn.classList.add("selected");
          } else {
            btn.classList.remove("selected");
          }
        }
      });
    }
  });

  document.addEventListener("click", (e) => {
    if (currentQuestion >= questions.length || e.target.closest(".resultOk"))
      return;
    alert("⚠️ 경고: 키보드(1~4 및 Space)만 사용 가능합니다!");
  });

  window.resultOk = function () {
    const pw = prompt("결과를 보려면 비밀번호를 입력하세요.");
    if (pw !== "1234") {
      alert("비밀번호가 틀렸습니다.");
      return;
    }

    document.querySelector(".examOver").style.display = "none";
    document.querySelector(".answer-panel").style.display = "block";
    document.getElementById("result-name").textContent = studentNameValue;
    document.getElementById("result-correct").textContent = correctCount;
    document.getElementById("result-total").textContent = questions.length;

    setTimeout(() => {
      const element = document.querySelector(".answer-panel");

      html2canvas(element, { backgroundColor: "#ffffff", useCORS: true }).then(
        (canvas) => {
          const { jsPDF } = window.jspdf;
          const pdf = new jsPDF("p", "mm", "a4");
          const imgData = canvas.toDataURL("image/png");

          const imgWidth = pdf.internal.pageSize.getWidth();
          const pageHeight = pdf.internal.pageSize.getHeight();
          const imgHeight = (canvas.height * imgWidth) / canvas.width;

          let heightLeft = imgHeight;
          let position = 0;

          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;

          while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
          }

          const today = new Date().toISOString().slice(0, 10).replace(/-/g, "");
          pdf.save(`${today}_${studentNameValue}_결과.pdf`);
        },
      );
    }, 500);
  };

  renderQuestion();
};
