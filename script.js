document.addEventListener("DOMContentLoaded", function() {
    var editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
        //mode: language
        mode: 'text/x-c++src',
        //theme
        theme: 'midnight',
        //line number
        lineNumbers: true,
        //closing brackets
        autoCloseBrackets: true,
    });
    var width = window.innerWidth;
    editor.setSize(0.7 * width, '500');
});

