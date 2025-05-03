const chatData = {
    '엄마' : [
        {type: 'received', text: '밥 먹었니?'},
        {type: 'sent', text: '응 밤금 먹었어!'},
        {type: 'received', text: '그래~ 오늘도 힘내 ^^'}
    ],
    '친구들' : [
        {type: 'sent', text: '오늘 저녁에 뭐할래?'},
        {type: 'received', text: '영화 보러 갈래?'},
        {type: 'sent', text: '좋아, 몇시?'}
    ],
    '스터디방' : [
        {type: 'received', text: '다음 주 과제 정리했어?'},
        {type: 'sent', text: '응, 구글 드라이브에 올렸어.'},
        {type: 'received', text: '굿굿! 확인해볼게'}
    ],
    '개발자 모임' : [
        {type: 'sent', text: 'React 버전 올려도 될까요?'},
        {type: 'received', text: '네. 올려도 괜찮아요!'},
        {type: 'sent', text: '그럼 오늘 저녁에 반영할게요'}
    ]
};

const rooms = document.querySelectorAll('.chat-room');
const chatHeader = document.getElementById('chat-header');
const chatMessages = document.getElementById('chat-messages');

rooms.forEach(room => {
    room.addEventListener('click', () => {
        const roomName = room.id;
        const messages = chatData[roomName];

        // 제목 변경
        chatHeader.textContent = roomName;

        // 메세지 초기화
        chatMessages.innerHTML = '';

        // 메세지 추가
        messages.forEach(msg => {
            const div = document.createElement('div');
            div.classList.add('message' , msg.type);
            div.textContent = msg.text;
            chatMessages.appendChild(div);
        });
    });
});

const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// 메세지 전송
function sendMessage() {
    const text = messageInput.value.trim();
    if (text === '') return;

    chatData[currentRoom].push({ type: 'sent', text});
    const div = document.createElement('div');
    div.classList.add('message' , 'sent');
    div.textContent = text;
    chatMessages.appendChild(div);
    messageInput.value = '';
}

// 버튼 클릭 또는 Enter 키 입력
sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});