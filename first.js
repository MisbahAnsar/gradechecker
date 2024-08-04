function checkGrade() {
    const score = document.getElementById('scoreInput').value;
    let grade;
    const resultElement = document.getElementById('result');
    
    if (score > 100 || score < 0) {
        resultElement.innerText = "Please enter a valid score between 0 and 100.";
    } else if (score >= 90) {
        grade = 'O';
        resultElement.innerText = `Your grade is: ${grade}`;
    } else if (score >= 80) {
        grade = 'A';
        resultElement.innerText = `Your grade is: ${grade}`;
    } else if (score >= 70) {
        grade = 'B';
        resultElement.innerText = `Your grade is: ${grade}`;
    } else if (score >= 60) {
        grade = 'C';
        resultElement.innerText = `Your grade is: ${grade}`;
    } else if (score >= 35) {
        grade = 'D';
        resultElement.innerText = `Your grade is: ${grade}`;
    } else {
        grade = 'F';
        resultElement.innerText = `Your grade is: ${grade}`;
    }
}
  