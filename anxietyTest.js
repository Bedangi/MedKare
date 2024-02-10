document.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const resultElement = document.createElement('div');
    resultElement.id = 'result';
    document.body.appendChild(resultElement);

    // Function to count the total number of "Yes" marks
    function countYesMarks() {
        let yesCount = 0;
        radioButtons.forEach(function(radioButton) {
            if (radioButton.checked && radioButton.value === 'yes') {
                yesCount++;
            }
        });
        return yesCount;
    }

    // Function to update the result
    function updateResult() {
        const totalYes = countYesMarks();
        resultElement.textContent = `Total "Yes" marks: ${totalYes}`;
    }

    // Event listener for radio button change
    radioButtons.forEach(function(radioButton) {
        radioButton.addEventListener('change', updateResult);
    });

    // Initial update of result
    updateResult();
});

