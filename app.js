let a = [1,2,5,4,6,8]
    console.log(a);
alert("Masiv_FOR")

for (let index = 0; index < a.length; index++){
    console.log(a[index]);
}

alert("Masiv_while")
let b = 0;
while ( b > a.length){
    console.log(a[b]);
    b++;
}

alert("Masiv_do_while")
let v = '';
let c = 0;
do {
  c = c + 1;
  v = v + c;
} while (c < 5);

console.log(v);

alert("Masiv_for of")
for (const element of a) {
    console.log(element);
}

alert("Masiv_fpr in")
for (const key in a) {
    if (Object.hasOwnProperty.call(a,key)){
        console.log(a[key]);
    }
}
alert("Masiv_foreach")
a.forEach(element => {
    console.log(element)
});

alert("Masiv_map")
let g = a.map(a => a * 1);
console.log(g);
