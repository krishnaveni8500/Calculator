const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';

function updateDisplay() {
  display.value = currentInput;
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'C') {
      currentInput = '';
    } else if (value === '=') {
      try {
        currentInput = eval(currentInput.replace(/÷/g, '/').replace(/×/g, '*'));
      } catch {
        currentInput = 'Error';
      }
    } else {
      currentInput += value;
    }

    updateDisplay();
  });
});

// Keyboard support
document.addEventListener('keydown', e => {
  const key = e.key;

  if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.'].includes(key)) {
    currentInput += key;
  } else if (key === 'Enter') {
    try {
      currentInput = eval(currentInput);
    } catch {
      currentInput = 'Error';
    }
  } else if (key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
  } else if (key === 'Escape') {
    currentInput = '';
  }

  updateDisplay();
});
