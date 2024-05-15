document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    
    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = button.innerText;
            
            if (value === 'C') {
                currentInput = '';
                display.value = '';
            } else if (value === '=') {
                try {
                    currentInput = eval(currentInput);
                    display.value = currentInput;
                } catch (error) {
                    display.value = 'Error';
                }
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });

    document.addEventListener('keydown', function(event) {
        if ((event.key >= 0 && event.key <= 9) || ['+', '-', '*', '/', '.'].includes(event.key)) {
            currentInput += event.key;
            display.value = currentInput;
        } else if (event.key === 'Enter') {
            try {
                currentInput = eval(currentInput);
                display.value = currentInput;
            } catch (error) {
                display.value = 'Error';
            }
        } else if (event.key === 'Backspace') {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
        } else {
            alert('Only numbers are allowed');
            event.preventDefault();
        }
    });
});
