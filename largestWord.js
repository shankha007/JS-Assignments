var str = window.prompt('Enter the String: ');
var words = str.split(' ');
var len = 0;
var largest;
for(word of words) {
    if(word.length > len) {
        len = word.length;
        largest = word;
    }
}
window.alert('The largest word is: ' + largest)