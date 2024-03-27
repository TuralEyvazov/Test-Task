// 1. Sual-Let Var Const fərqi

// VAR-dan əlavə ECMASCRIPT(ES6) ilə gələn LET ve CONST ilə də dəyişkən təyin etmək mümkündür.

// Arasındakı fərqlər:

// var ilə let arasında əsas fərqlər, var 'function scope' oldugu halda let 'block scope'-dur ve
// Hoisting meselesidir ki meselen:
// str = "Hello World"
// console.log(str)
// var str; -> buarada console-da hecbir eror vermiyecey ama bunu let ile etseydik eror alacaydiq ki 'str tanimlanmiyib'
// diger ferq ise budur:
// var a = 5;
// var a = 7;
// let b = 3;
// let b = 5;
// var ile teyin edilen deyisken yeniden eyni ad ile teyin edile biler ama let ile bu bize error verecey

// var a = 5;
// var a = 7; buarada => 7
// let b = 3;
// let b = 5; burada => error alaciyiq

// const ile let arasindaki ferq ise let ile teyin etdiyimiz deyiskenin deyerini deyise bilerik lakin const ile bu mumkun deyil meselen:

// let a = 5;
// a = 6; buarada => 6
// const b = 4;
// b = 7; buarada => buarada error alaciyiq

// ------------------------------------------------------------------

// 2. Function və Arrov Function fərqləri(araşdırmaq)

// birinci ferq yazilis ferqleridir:

// function handleClick() {             normal function
//    console.log('hello world')
// }

// const handleCLick = () => {          arrow function
//    console.log('hello world')
// }

// ikinci esas ferq ise (this) keyword-u ile elaqelidir

// var name = "tural";

// const person = {
//   name: "eyvazov",
//   myFunc: function () {
//     console.log(this.name);
//   },
//   myArrow: () => {
//     console.log(this.name);
//   },
// };

// person.myFunc(); normal function-da this keyword-objectin ozunu temsil edir ve 'eyvazov' cixarir ama
// person.myArrow(); arrow function-da ise this keyword globali temsil edir ve 'tural' cixarir

// ------------------------------------------------------------------

// 3. Localstirage və sessionstorage fərqləri

// LocalStorage: JavaScript saytlarına və tətbiqlərinə son istifadə tarixi olmadan veb brauzerdə key/value dəyərlərini saxlamağa imkan verən xüsusiyyətdir.

// sessionStorage: Bu, brauzerə key/value dəyərlərini yalnız bir müddətində saxlamağa imkan verən veb brauzerdəki xüsusiyyətdir. Beləliklə, brauzer bağlandıqda, məlumatlar da itirilir.

// ------------------------------------------------------------------

// 4. Localstiragedə obyekt və array saxlamaq və onları götürmək (get etmək)

// let arr = [1,2,3,5,6]

// localStorage.setItem('data',JSON.stringify(arr)) burada set edirik

// let data = JSON.parse(localStorage.getItem('data')) buarada get edirik

// ------------------------------------------------------------------

// 5. Js Object classın araşdırmaq
// class =>  ECMASCRIPT(ES6) ile gelen object yaratma xususiyyetdir. Bu javascripti daha OOP yonumlu ve daha seliqeli daha optimal kod yazmaga komek edir

// class Person {
//   constructor(name, surname) {
// this.name = name;
// this.surname = surname;
//   }
// buarada metodlarda yaza bilirik
//   getFullName() {
// return `${this.name} ${this.surname}`;
//   }
// }

// const person1 = new Person("Tural", "Eyvazov");
// console.log(person1.getFullName());

// ------------------------------------------------------------------

// 6. Date classın araşdırmaq

// Date() class esasen tarix ve saat islerinde bize real tarix ve saati verir meselen:

// const times = new Date();

// console.log(times.getHours()); saat
// console.log(times.getMinutes()); deqiqe
// console.log(times.getSeconds()); saniye
// console.log(times.toLocaleDateString()); bu gunun tarixi ve basqa metodlari var

// ------------------------------------------------------------------

// 7. Find, Filter, findIndex, reduce metodlarına aid numunələr yazmaq

// let arr = [5, 7, 9, 2, 3, 8];

// filter metodu verdiyimiz şərtə əsasən yeni arry dondurur

// arr.filter((item) => {
//   if (item % 2 == 0) {
//     console.log(item);
//   }
// });

// find metodu verilen şərtə uygun gelen ilk elementi bize qaytarir

// arr.find((item) => {
//   if (item === 1) {
//     console.log(item);
//   }
// });

// findIndex metodu verilen şərtə uyğun olan ədədin indexini qaytarır şərt ödənmədikdə isə -1 qaytarır

// const findIndexNumber = arr.findIndex((num) => num > 6);
// console.log(findIndexNumber);

// reduce metodu əsasə bir arrayin deyerlerini tek bir deyere cevirmek ucun istifade edilir. toplamaq, filterlemek ve basqa

// const sum = arr.reduce((acc, current) => {
//   return acc * current;
// }, 1);

// console.log(sum);

// ------------------------------------------------------------------

// 8.  Hansı methodu arrayı string çevirir?

//  arrayi stringe ceviren metod => join()-dur

// let arr = ["s", "a", "l", "a", "m"];

// console.log(arr.join("")); burada => 'salam' geri dondurecek

// ------------------------------------------------------------------

// 9. Recursion funksiya nədir və if else olmadan yazmaq mümkündür?

// Oz ozunu cagiran funksiyalardir. Rekursiv funksiyalar problemləri daha kiçik hissələrə bölmək və hər hissə üçün eyni funksiyanı çağırmaq üçün istifadə olunur. if else olmadan yazsaq diqqetli algortm qurmaq lazimdi cunki oz ozunu cagiracagina gore sonsuz donguye dusecekdir buda problem yaradir. ona gore hemise bir şərt bildirmek daha mentiqlidir

// ------------------------------------------------------------------

// 10. Callback nədir?
// Bir funksiyaya parametre olaraq basqa bir funksiya verib onu cagirmaga deyilir meseln:

// function handleCLick() {
//   alert('clicked')
// }

// button.addEventListener(('click'), handleCLick)

// 11. HOF (high-order function) Callback funksiya veya funksiya icinde funksiya return etmekdir

// const result = () => {
//   let counter = 0;
//   const num = () => {
//     counter += 1;
//     console.log(counter);
//   };
//   return num;
// };

// const clouser = result();
// clouser();
// clouser();
// clouser();
