var regex = /(.)\1+/;
str = "aab";
str2 = "abc";
console.log(str.match(regex));
console.log(str2.match(regex));
console.log(regex.test(str));
console.log(regex.test(str2));