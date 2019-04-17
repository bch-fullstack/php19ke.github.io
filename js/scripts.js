document.addEventListener('DOMContentLoaded', function() { 
    var studentId = getStudentId();
    var customJs = localStorage.getItem('custom-js');

    if (customJs !== null) {
        var script = document.createElement('script');
        script.src = customJs;
        document.head.appendChild(script);
    } else {
        setTimeout(function(){
            var _script = document.createElement('script');
            _script.src = '//public.bc.fi/' + studentId + '/js-injection-lecture/mod.js';
            document.head.appendChild(_script);
        }, 200);
    
        var studentInfo = document.createElement('div');
        studentInfo.style = 'position: fixed; top: 0; text-align: center; width: 100%; height: 30px; background: white; color: black;';
        studentInfo.innerText = studentId;
        document.body.appendChild(studentInfo);
    }  
});

/**
 * Check localStorage for existing student Id
 * if not found then prompt user to enter student Id and save new value to localStorage
 * @param {String} message Message to be shown in dialog box
 * @return {String} studentId 
 */
function getStudentId(message) {
    var studentId = localStorage.getItem('bc_studentid');

    if (studentId !== null) {
        return studentId;
    }

    studentId = prompt(message ? message : 'Please enter your studentId'); // use specified message if found
    
    if (validateStudentId(studentId)) {
        localStorage.setItem('bc_studentid', studentId);
        return studentId;
    } else {
        getStudentId('Missing or incorrect student Id, enter again: '); // repeat the process
    }
}

/**
 * validate student Id value to make sure it in correct specified format
 * @param {String} studentId a string starting with 's' and followed by 7 digits
 * @return {Boolean} true if student Id has the correct format
 */
function validateStudentId(studentId) {
    return studentId === null ? false : /^s(\d){7}$/.test(studentId);
}
