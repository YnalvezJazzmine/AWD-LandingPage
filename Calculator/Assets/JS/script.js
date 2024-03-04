document.addEventListener('DOMContentLoaded', function () {
    var clearButton = document.getElementById('clear');
    var answerField = document.forms['form1']['answer'];

    clearButton.addEventListener('click', function () {
        answerField.value = '';
    });
});