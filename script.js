// let a = "aystdcgvw"
// let c = "aystdcgvw"
// const b = 150,
//  d = 300
// // + - / *
// // let const

// // number string
// let salom125 = 50



// console.log(a + b)
// console.log(b)

// let a,b
// let a=1,b=2




// less 2

// alert(salom)
// string qoshtirnoqlari ${}
// let.toUpperCase let.toLowerCase
// let a,b,c,d,x,y

// a = 'number'
// alert('salom')
// console.log(45)

// a = 'string'
// b = "SAOM"
// c  = `string`
//     num1 = 1
//     num2 = 2

//     console.log(`${a.toUpperCase()}${b.toLowerCase()}`)

// numvber = raqamlar 
// stirng = matn
// // boolean = true / false  true = 1 false = 0
// null = 0
// undefined = topilmadi


// console.log(typeof(a))

// a = 15 
// res = a / 7
// console.log(res)



// a = 2

// console.log(`${a ** 2},${a ** 4}`)

// b = 10

// c = (b - 32)*5/9
// console.log(c)

// x = 10
// a = 5
// y = 20

// let kg1 = 5/10
// console.log(`${kg1},${y * kg1}`)




// lesson 3  "sting methods"
// a = "assalom"
// a.indexOf(a)  assalom ichidan 1-a ni indexi
// a.lastindexOf(a) assalom ichidan oxirgi - a yani -1 indexni qaytaradi

// slice
// a.slice(0,1) 0dan 1gacha bolgan oraliqni qirqadi
// a.slice(1) 1dan boshlap oxirgacha oladi ungacha bolganini yoqotadi

// substr 
// a.substr(2,4) bunda 2dan keyin 4ta belgini olishni anglatadi

// replace 
// a.replace("a",'b') nuda 1-da kelgan a ni b qilip qoyadi

// charAt
// a.charAt() a ni 1chi elementini qaytaradi

// trim
// a.trim()
// pustoy joylarni tozalaydi


// let email = "  egamberdi2007@gmail.com "
// let res

// res = email.indexOf("a")
// res = email.lastIndexOf("a")

// res = email.slice(0)

// res = email.substr(3,10)

// res = email.replace("a","b")

// res = email.charAt()

// res = email.trim()

// console.log(res.length , email.length)




// lesson 4 Number 

// mavzu => + - / * ** (+= ... ) ++ -- % 

// + plus - minus / boluv * kopaytiruv ** daraja

// let num
//  num = 11

//  num += 5 //numga 5 qoshish buyrugi yokida (num = num + 5)
//  num -= 5 //numga 5 ayrish buyrugi yokida (num = num - 5)
//  num *= 5 //numga 5 kopaytirish buyrugi yokida (num = num * 5)
//  num /= 5 //numga 5 bulish buyrugi yokida (num = num / 5)

// num ++  //faqat 1 qoshadi ++ ham -- ham
// num --

// num = num % 2

//  console.log(num)






// lesson 7
// arr -> massivlar

// let arr,res

// arr  = ['nok','olma','banan','kiwi']

// length 
// concat => bu arr.concat(arr2) 2ta arrni boglaydi
// push => bu arrni oxiriga malumot qoshish arr.push(123)
// pop => bu arrdan delete qiladi arr.pop(123)
// shift => bu arrni boshidai elentni ochiradi arr.shift()
// unshift => bu arrni boshiga element qoshadi arr.unshift("olma")
// splice => bunda arr.splice(0,1, "nok", "olma"); 0 dan 1gacha bolgan joyni 
// qirqip orniga nok va olma qiymatni qoshyapti
// arr.splice(1,0,'nok','olma') bunda qirqip olmaydi aksincha 1indexdagi
// elementni surip ozi kelip oladi
// slice => qirqadi arr.slice(3); 3indexgacha qirqadi

// arr = [1,"olma",true,null,undefined]
// let arr2 = ['nok','banan']
// res = arr.length

// arr.push("flase")

// arr.pop('olma') arrni oxiridan ochiradi

// arr.shift() arrni boshidan ochiradi

// arr.unshift(152) arrni boshida elemnt qoshadi

// res = arr.concat(arr2)

// console.log(arr[2]) 2indexni chiqaradi 

// arr.splice(1,0,"nok",'behi')

// res = arr.slice(3)

// console.log(arr)





// // lesson 8

// // if else shart operator

// let num = -10

// if ((num.length < 5 || num.length <= 3 ) && num.length >= 1) {
//     console.log("ok", num.length)
// }
// else if (num === 10 || num,length != 5){  // && va degani yani ikki tomonidagi ish ham amalga oshsa ,
//                                  //  || yoki degani bunda qaysoidur 1tasi bolsa boldi
    
//     console.log("toq")
// }

// else{
//     console.log("toq")

// }


// lesson 9

// for (i = 0; i < 10; i++) {
//    console.log(i)
//   }

// let arr = ['a','b','c','d']

// for (i = 0;i < arr.length;i++){
//     console.log(arr[i])
// }

let a,b,c,d,n

// task 7
// a = 2
// b = 10
// c = 0
// for (i=a; i < b; i++){
//     c += i
//     console.log(c)
// }
// console.log(c)


// task 10

// a = 5
// b = 0
// for (i = 1; i <= a;i++){
//     b += 1/i
//     console.log(b)
// }



//task 11

// n = 2
// b = 0
// for (i = 0;i <= 999999;i++){
//     if ((n + i) <= 2*n){
//         b += (n + i)**2
//     }
//     else{
//         console.log(b)
//         break
//     }
// }

// for(i = 1; i <= 100;i++){
//     if (i % 5 === 0){
//         console.log(i)
//     }
// }
