/* 
Bài 1: Cho người dùng nhập vào chuỗi số bất kì. Viết hàm sắp xếp chuỗi số đó từ bé đến lớn
input: 2,3,5,4,1
output: 1,2,3,4,5

function sapXep(callback){
    let tem = 0;
    for(let i = 0; i < callback.length; i++){
        for(let j = i + 1; j < callback.length; j++){
            if(callback[i] < callback[j]){
                tem = callback[i];
                callback[i] = callback[j];
                callback[j] = tem;
            }
        }
    }
    return callback; 
}
console.log(sapXep(coverStrInt()));

Bài 2: Viết một hàm nhận một chuỗi làm đối số và trả về độ dài của chuỗi.
input: "Hello World"
output: 11

let lengthCalc = ()=> {
    let input = prompt(" nhap chuoi can kiểm tra độ dài");
    let arr = input.split("");
    return arr.length;
}
alert(lengthCalc());

Bài 3: Viết một hàm nhận một mảng các chuỗi làm đối số và trả về mảng mới chứa các chuỗi viết hoa.
input: "thịnh"
output: "THỊNH"

let upCase = () =>{
    let inPut = prompt("nhập chuỗi cần upcase");
    let outPut = inPut.toUpperCase();
    return outPut;
}
alert(upCase()); 

Bài 4: Viết một hàm nhận một chuỗi làm đối số và trả về chuỗi mới với các từ đảo ngược thứ tự.
input: "Khanh"
output: "hnahK"

function sw (str){
    let inPut = prompt("Nhập chuỗi str để đảo ngược");
    let arrStr = [] ;
    for(let i = 0; i < inPut.length; i++){
        arrStr.unshift(inPut[i]);
    }
    return arrStr.join("");
}
alert(sw());

Bài 5: Viết một hàm nhận một mảng các số làm đối số và trả về mảng mới chỉ chứa các số nguyên tố.
input: 1,2,3,4,5,6,7,8
output: 2,3,5,7

function inNt (arr){
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] < 2){
            arr.splice(i,1);
        }else{
            for(let j = 3; j < arr[i]; j++){
                if(arr[i] % j == 0){
                    arr.splice(i,1);
                    break;
                }
            }
        } 
    }
    return arr;
}
console.log(inNt(coverStrInt()));

*/
// hàm chuyển đổi một mảng dữ liệu str thành int, dùng chung cho các bài cần chuyển đổi.

function coverStrInt(){
    let input = prompt("Nhập chuỗi số bất kì cách nhau bởi dấu phẩy");
    let arr = input.split(",");
    for(let i = 0; i < arr.length;i++){
        arr[i] = +arr[i];
    }
    return arr;
}

// Run.