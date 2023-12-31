const formBtn = document.getElementById('form-btn');

formBtn!.addEventListener('click', () => {
  const input = document.querySelector('input');
  const select = document.querySelector('select');

  const mediumUrl = input!.value;
  const ladder = select!.value;

  if(!ladder || !mediumUrl) return;

  const url = `${ladder}${mediumUrl}`;
  window.open(url);
})

const currTabBtn = document.getElementById('curr-tab-btn');

currTabBtn!.addEventListener('click', () => {
  chrome.runtime.sendMessage('curr-tab-btn', (_) => {
    window.close();
  });
})
