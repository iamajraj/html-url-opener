const text = document.querySelector('.text');
const circle = document.querySelector('.circle');
const feedback = document.querySelector('.show-text');

var r = /^((ftp|http|https):?\/\/)?([A-z]+)\.([A-z]{2,})/;

document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const content = text.textContent;
    if (r.test(content)) {
      const url = content.startsWith('http') ? content : 'http://' + content;
      window.open(url);
    } else if (content.length !== 0) {
      const url = `https://www.google.com/search?q=${content}`;
      window.open(url);
    }
    return;
  } else {
    text.textContent += e.key;
    circle.style.width = `${text.textContent.length * 20}px`;
    circle.style.height = `${text.textContent.length * 20}px`;
  }
  setFeedback();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Backspace') {
    text.textContent = text.textContent.substring(
      0,
      text.textContent.length - 1
    );
  }

  circle.style.width = `${text.textContent.length * 20}px`;
  circle.style.height = `${text.textContent.length * 20}px`;
  setFeedback();
});

function setFeedback() {
  const textContent = text.textContent;
  if (r.test(textContent)) {
    feedback.textContent = `Go to > ${textContent}`;
  } else if (textContent.length !== 0) {
    feedback.textContent = `Search for > ${textContent}`;
  } else {
    feedback.textContent = '';
  }
}
