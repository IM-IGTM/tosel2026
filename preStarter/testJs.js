window.onload = function () {
  // -----------------------------
  // 0. 학생 이름 및 초기 설정
  // -----------------------------
  const urlParams = new URLSearchParams(window.location.search);
  const studentNameValue = urlParams.get("studentName") || "이름 정보 없음";

  // -----------------------------
  // 공통 함수: 배열 섞기
  // -----------------------------
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // -----------------------------
  // 1. 원본 데이터 (Pre-starter 기준)
  // -----------------------------
  const rawData = [
    // 1유형: 그림보고 맞추기 (이미지 O - 제한시간 10초)
    { q: "우유", a: "milk", type: 1 },
    { q: "가수", a: "singer", type: 1 },
    { q: "남자형제", a: "brother", type: 1 },
    { q: "바나나", a: "banana", type: 1 },
    { q: "길, 도로", a: "road", type: 1 },
    { q: "선생님", a: "teacher", type: 1 },
    { q: "야구", a: "baseball", type: 1 },
    { q: "목", a: "neck", type: 1 },
    { q: "자", a: "ruler", type: 1 },
    { q: "어린이", a: "child", type: 1 },
    { q: "여자형제", a: "sister", type: 1 },
    { q: "시계", a: "clock", type: 1 },
    { q: "교회", a: "church", type: 1 },
    { q: "테니스", a: "tennis", type: 1 },
    { q: "아기", a: "baby", type: 1 },
    { q: "간호사", a: "nurse", type: 1 },
    { q: "지도", a: "map", type: 1 },
    { q: "물", a: "water", type: 1 },
    { q: "배", a: "pear", type: 1 },
    { q: "책", a: "book", type: 1 },
    { q: "칠판", a: "board", type: 1 },
    { q: "직업", a: "job", type: 1 },
    { q: "치즈", a: "cheese", type: 1 },
    { q: "가게, 상점", a: "store", type: 1 },
    { q: "영화", a: "movie", type: 1 },
    { q: "햄버거", a: "hamburger", type: 1 },
    { q: "간식", a: "snack", type: 1 },
    { q: "과일", a: "fruit", type: 1 },
    { q: "수프", a: "soup", type: 1 },
    { q: "아버지", a: "father", type: 1 },
    { q: "발", a: "foot", type: 1 },
    { q: "셋(3)", a: "three", type: 1 },
    { q: "창문", a: "window", type: 1 },
    { q: "공", a: "ball", type: 1 },
    { q: "헬멧", a: "helmet", type: 1 },
    { q: "입술", a: "lip", type: 1 },
    { q: "케이크", a: "cake", type: 1 },
    { q: "연필", a: "pencil", type: 1 },
    { q: "고기", a: "meat", type: 1 },
    { q: "스키", a: "ski", type: 1 },
    { q: "뒷면", a: "back", type: 1 },
    { q: "몸", a: "body", type: 1 },
    { q: "사탕", a: "candy", type: 1 },
    { q: "아침", a: "morning", type: 1 },
    { q: "할머니", a: "grandmother", type: 1 },
    { q: "도시", a: "city", type: 1 },
    { q: "방망이", a: "bat", type: 1 },
    { q: "눈", a: "eye", type: 1 },
    { q: "얼굴", a: "face", type: 1 },
    { q: "입", a: "mouth", type: 1 },
    { q: "복숭아", a: "peach", type: 1 },
    { q: "장갑", a: "glove", type: 1 },
    { q: "골프", a: "golf", type: 1 },
    { q: "빵", a: "bread", type: 1 },
    { q: "코", a: "nose", type: 1 },
    { q: "손", a: "hand", type: 1 },
    { q: "반[학급]", a: "class", type: 1 },
    { q: "농부", a: "farmer", type: 1 },
    { q: "버스", a: "bus", type: 1 },
    { q: "오리", a: "duck", type: 1 },
    { q: "샌드위치", a: "sandwich", type: 1 },
    { q: "비행기", a: "plane", type: 1 },
    { q: "사자", a: "lion", type: 1 },
    { q: "이", a: "teeth", type: 1 },
    { q: "친구", a: "friend", type: 1 },
    { q: "무릎", a: "knee", type: 1 },
    { q: "책상", a: "desk", type: 1 },
    { q: "개미", a: "ant", type: 1 },
    { q: "사과", a: "apple", type: 1 },
    { q: "자전거", a: "bike", type: 1 },

    // 2유형: 뜻보고 맞추기 (이미지 X - 제한시간 15초)
    { q: "그리다", a: "draw", type: 2 },
    { q: "왼쪽(의)", a: "left", type: 2 },
    { q: "나쁜", a: "bad", type: 2 },
    { q: "요리하다", a: "cook", type: 2 },
    { q: "배부른", a: "full", type: 2 },
    { q: "오른쪽(의)", a: "right", type: 2 },
    { q: "날다", a: "fly", type: 2 },
    { q: "추운", a: "cold", type: 2 },
    { q: "젊은", a: "young", type: 2 },
    { q: "공부하다", a: "study", type: 2 },
    { q: "쉬다", a: "rest", type: 2 },
    { q: "심다", a: "plant", type: 2 },
    { q: "젖은, 축축한", a: "wet", type: 2 },
    { q: "바람이 부는", a: "windy", type: 2 },
    { q: "슬픈", a: "sad", type: 2 },
    { q: "뚱뚱한", a: "fat", type: 2 },
    { q: "주다", a: "give", type: 2 },
    { q: "울다", a: "cry", type: 2 },
    { q: "화가 난", a: "angry", type: 2 },
    { q: "스케이트를 타다", a: "skate", type: 2 },

    // 3유형: 문장보고 맞추기 (이미지 O - 제한시간 20초)
    { q: "Show me your _______.", a: "hand", type: 3 },
    { q: "Let me introduce my _______.", a: "family", type: 3 },
    { q: "Open the _______, please.", a: "door", type: 3 },
    { q: "Today is my _______.", a: "birthday", type: 3 },
    { q: "My family loves to _______.", a: "travel", type: 3 },
    { q: "I _______ a gift to my friend.", a: "give", type: 3 },
    { q: "I eat _______ for breakfast.", a: "bread", type: 3 },
    { q: "A glass of orange _______, please.", a: "juice", type: 3 },
    { q: "_______ your hands.", a: "clap", type: 3 },
    { q: "Can you _______ the window?", a: "close", type: 3 },
  ];

  const allAnswerPool = rawData.map((d) => d.a);

  // -----------------------------
  // 2. 문제 배열 생성 (1유형과 3유형 이미지 경로 지정)
  // -----------------------------
  const questions = rawData.map((item) => {
    const wrongOnes = shuffle(
      allAnswerPool.filter((ans) => ans !== item.a),
    ).slice(0, 3);
    const options = shuffle([item.a, ...wrongOnes]);

    return {
      title: item.q,
      options: options,
      correctIndex: options.indexOf(item.a),
      type: item.type,
      // preStarter/img/ 경로 세팅
      img:
        item.type === 1 || item.type === 3 ? `preStarter/img/${item.a}` : null,
    };
  });

  // -----------------------------
  // 3. 정답 테이블 동적 생성
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
  // 4. 시험 상태 변수 제어
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
    if (testPanel) testPanel.style.display = "none";

    document.querySelector(".examOver").style.display = "block";
  }

  // -----------------------------
  // 5. 문제 렌더링 및 이미지/텍스트 제어
  // -----------------------------
  function renderQuestion() {
    const q = questions[currentQuestion];
    if (!q) return;

    selectedIndex = null;

    buttons.forEach((btn) => {
      if (btn) {
        btn.classList.remove("selected");
        const chk = btn.querySelector(".check-icon");
        if (chk) chk.remove();
      }
    });

    const imgTag = document.getElementById("questionImage");

    // 초기화: 이미지 무조건 안 보이게 감춤 (2유형 공간 차지 방지)
    if (imgTag) {
      imgTag.src = "";
      imgTag.onerror = null;
      imgTag.onload = null;
      imgTag.style.display = "none";
    }

    // 유형별 텍스트 출력 방식
    if (questionLabel) {
      if (q.type === 1) {
        questionLabel.innerHTML = "";
        questionLabel.textContent = "";
      } else {
        questionLabel.innerHTML = q.title.replace(/\n/g, "<br>");
      }
    }

    // 1, 3유형 이미지 로딩 처리 (성공 시에만 display: block)
    if ((q.type === 1 || q.type === 3) && imgTag && q.img) {
      const extensions = [".jpg"];
      let extIndex = 0;

      function tryNextImage() {
        if (extIndex < extensions.length) {
          let nextSrc = "";

          if (
            window.location.hostname === "127.0.0.1" ||
            window.location.hostname === "localhost"
          ) {
            nextSrc =
              window.location.origin + "/" + q.img + extensions[extIndex];
          } else {
            nextSrc =
              window.location.origin +
              "/tosel2026/" +
              q.img +
              extensions[extIndex];
          }

          extIndex++;
          imgTag.src = nextSrc;
        } else {
          imgTag.style.display = "none";
          imgTag.onerror = null;
        }
      }

      imgTag.onload = function () {
        imgTag.style.display = "block";
      };

      imgTag.onerror = tryNextImage;
      tryNextImage();
    }

    const btnFive = document.querySelector(".five");
    if (btnFive) btnFive.style.display = "none";

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

    let duration = 10;
    if (q.type === 2) duration = 15;
    if (q.type === 3) duration = 20;

    startTimer(duration);
  }

  function handleAnswer(choiceIndex) {
    const q = questions[currentQuestion];
    if (countdownInterval) clearInterval(countdownInterval);

    const selectedText = q.options[choiceIndex];
    const qNum = currentQuestion + 1;
    const cell = document.getElementById("answer-q" + qNum);
    if (cell) cell.textContent = selectedText;

    if (choiceIndex === q.correctIndex) {
      correctCount++;
    } else {
      if (cell) cell.classList.add("wrong-cell");
    }

    currentQuestion++;
    currentQuestion < questions.length ? renderQuestion() : finishExam();
  }

  // -----------------------------
  // 6. 단축키 인터랙션 및 결과지 출력
  // -----------------------------
  const keyToIndex = { 1: 0, 2: 1, 3: 2, 4: 3 };

  document.addEventListener("keydown", function (e) {
    if (currentQuestion >= questions.length) return;

    if (e.code === "Space") {
      e.preventDefault();
      if (selectedIndex === null) {
        alert("먼저 1~4 중 하나를 선택하세요.");
        return;
      }
      handleAnswer(selectedIndex);
      return;
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

  window.resultOk = function () {
    const pw = prompt("결과를 보려면 비밀번호를 입력하세요.");
    if (pw !== "1234") {
      alert("비밀번호가 올바르지 않습니다.");
      return;
    }

    document.querySelector(".examOver").style.display = "none";
    document.querySelector(".answer-panel").style.display = "block";

    document.getElementById("result-name").textContent = studentNameValue;
    document.getElementById("result-correct").textContent = correctCount;
    document.getElementById("result-total").textContent = questions.length;

    const element = document.querySelector(".answer-panel");

    setTimeout(() => {
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

          const dateStr = new Date()
            .toISOString()
            .slice(0, 10)
            .replace(/-/g, "");
          pdf.save(`${dateStr}_${studentNameValue}_결과.pdf`);
        },
      );
    }, 500);
  };

  renderQuestion();
};
