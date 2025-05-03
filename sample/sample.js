const chatData = {
    '엄마': [
      { type: 'received', text: '밥 먹었니?' },
      { type: 'sent', text: '응 방금 먹었어!' },
      { type: 'received', text: '그래~ 오늘도 힘내 ^^' }
    ],
    '친구들': [
      { type: 'sent', text: '오늘 저녁에 뭐할래?' },
      { type: 'received', text: '영화 보러 갈래?' },
      { type: 'sent', text: '좋아, 몇 시?' }
    ],
    '스터디방': [
      { type: 'received', text: '다음 주 과제 정리했어?' },
      { type: 'sent', text: '응, 구글 드라이브에 올렸어.' },
      { type: 'received', text: '굿굿! 확인해볼게' }
    ],
    '개발자모임': [
      { type: 'sent', text: 'React 버전 올려도 될까요?' },
      { type: 'received', text: '네. 올려도 괜찮아요!' },
      { type: 'sent', text: '그럼 오늘 저녁에 반영할게요.' }
    ]
  };
  
  const rooms = document.querySelectorAll('.chat-room');
  const chatHeader = document.getElementById('chat-header');
  const chatMessages = document.getElementById('chat-messages');
  
  let currentRoom = '엄마'; // 초기 선택 방
  
  function renderMessages(roomName) {
    const messages = chatData[roomName];
    chatMessages.innerHTML = '';
    messages.forEach(msg => {
      const div = document.createElement('div');
      div.classList.add('message', msg.type);
      div.textContent = msg.text;
      chatMessages.appendChild(div);
    });
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  // 채팅방 선택
  rooms.forEach(room => {
    room.addEventListener('click', () => {
      currentRoom = room.id;
      chatHeader.textContent = currentRoom;
      renderMessages(currentRoom);
    });
  });

function getBotReply(userText) {
    const text = userText.toLowerCase();

    if (text.includes("안녕")) return "안녕하세요! 반가워요!";
    if (text.includes("배고파")) return "뭐 맛있는거 드새요~";
    if (text.includes("졸려")) return "잠시 눈 붙이세요";
    if (text.includes("공부")) return "화이팅! 지금이 가장 빠른 시간이에요";
    if (text.includes("심심")) return "산책이라도 나가볼까요?";
    if (text.includes("고마워")) return "언제든지요";
    if (text.includes("잘자")) return "좋은 꿈 꾸세요";

    // 키워드 없으면 랜덤 응답
    const randomReplies = [
        "오 진짜요?",
        "그렇군요!",
        "음... 다시 말씀해주시겠어요?",
        "ㅋㅋㅋㅋ",
        "알겠습니다~"

    ];

    return randomReplies[Math.floor(Math.random() * randomReplies.length)];
}

  
  const messageInput = document.getElementById('message-input');
  const sendButton = document.getElementById('send-button');
  
  // 메시지 전송
  function sendMessage() {
    const text = messageInput.value.trim();
    if (text === '') return;
  
    chatData[currentRoom].push({ type: 'sent', text });
    const div = document.createElement('div');
    div.classList.add('message', 'sent');
    div.textContent = text;
    chatMessages.appendChild(div);
    messageInput.value = '';

    reply = getBotReply(text);
    chatData[currentRoom].push({ type:'received', text:reply });
    const div2 = document.createElement('div');
    div2.classList.add('message', 'received');
    div2.textContent = reply;
    chatMessages.appendChild(div2);
  }
  
  // 버튼 클릭 또는 Enter 키 입력
  sendButton.addEventListener('click', sendMessage);
  messageInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });


  
  