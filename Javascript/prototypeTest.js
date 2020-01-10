
       //创建方法
       function Foo(name) {
        this.name = name;
    }

    Foo.prototype.alertName = function () {// 既然 Foo.prototype 是普通的对象，那也允许给它添加额外的属性 alertName
        console.log(this.name);
    }


    var fn = new Foo('test');
    fn.printName = function () {
        console.log(this.name);
    }

    //测试
 /*    fn.printName();   //输出结果：smyhvae
    fn.alertName(); */ //输出结果：smyhvae

    for (const item in fn) {
        if (fn.hasOwnProperty(item)) {
            const element = fn[item];
            console.log(element);
        }
    }

    let test = "hello";
    test = "hi";
    console.log(test);

    console.log(navigator.userAgent);
    console.log(navigator.platform);
    var str1 = '千古壹号' + '永不止步';
var str2 = '千古壹号' + 666;
var str3 = '千古壹号' + true;
var str4 = '千古壹号' + null;
var str5 = '千古壹号' + undefined;

var obj = { name: '千古壹号', age: 28 };
var str6 = '千古壹号' + obj;

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(str5);
console.log(str6);
    
