console.log(parseInt("2017在公众号上写了6篇文章")); //打印结果：2017

console.log(parseInt("2017.01在公众号上写了6篇文章")); //打印结果仍是：2017   （说明只会取整数）
console.log(Number("2017.01在公众号上写了6篇文章"));

console.log(parseInt("aaa2017.01在公众号上写了6篇文章")); //打印结果：NaN （因为不是以数字开头）

var a = 5;
console.log(parseInt(a, 2));

console.log(Boolean(0));

var b = {};
console.log(b);

if ("") {
    console.log('Hello');
} else {
    console.log('Congrats! Succeed!');
}

var str1 = "56";
var str2 = "323";

console.log(str1.charCodeAt(0));
console.log(str2.charCodeAt(0));

console.log(null == 0);

var test = {};
var prop = "set";
test["get"] = "getget";
test["set"] = "setset";
console.log(test[prop]);

delete test[prop];

console.log(test);
console.log("set" in test);
console.log("get" in test);

