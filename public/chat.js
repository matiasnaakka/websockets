const socket = io();
// If server is located on another server use:
//const socket = io('https://<chat-server-addres>:3000');

const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', input.value);
    input.value = '';
  }
});

socket.on('chat message', (msg) => {
  const item = document.createElement('li');
  item.textContent = msg;
  item.classList.add('py-2', 'px-3', 'rounded-lg', 'text-primary', 'w-fit', 'm-5', 'bg-greenys'
  );
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});

