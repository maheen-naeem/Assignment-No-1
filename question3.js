//question no 3
var mymsg = "naeem ahmed kaim khani";
console.log(mymsg.toUpperCase());
console.log(mymsg.toLowerCase());
function titlecase(msg) {
    return msg.split(" ").map(function (word) { return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(); }).join(" ");
}
console.log(titlecase(mymsg));
