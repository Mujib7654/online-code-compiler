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
    //height width
    var width = window.innerWidth;
    editor.setSize(0.7 * width, '500');

    //syntax highlighting according to language
    var option = document.getElementById('specificSizeSelect');
    option.addEventListener('change', function() {
        if(option.value == 'Java'){
            editor.setOption('mode', 'text/x-java');
        }
        else if(option.value == 'python'){
            editor.setOption('mode', 'text/x-python');
        }
        else{
            editor.setOption('mode', 'text/x-c++src');
        }
    })
});

