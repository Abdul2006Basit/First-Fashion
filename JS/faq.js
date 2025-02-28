function toggleAnswer(index) {
    const answers = document.querySelectorAll('.faq-answer');
    const icons = document.querySelectorAll('.icon');
    
    answers.forEach((answer, i) => {
        if (i !== index) {
            answer.style.display = 'none';
            icons[i].textContent = '+';
        }
    });
    
    const currentAnswer = answers[index];
    const currentIcon = icons[index];
    
    if (currentAnswer.style.display === 'block') {
        currentAnswer.style.display = 'none';
        currentIcon.textContent = '+';
    } else {
        currentAnswer.style.display = 'block';
        currentIcon.textContent = '-';
    }
}
