$(document).ready(function(){
    var x = document.createElement('form');
    var subjectField = document.createElement('input');
    subjectField.type = 'text';
    var submitForm = document.createElement('input');
    submitForm.type = 'submit';
    var textareaField = document.createElement('textarea');
    
    x.appendChild(subjectField);
    x.appendChild(textareaField);
    x.appendChild(submitForm);

    document.body.appendChild(x);    
});