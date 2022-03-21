interface Val {
    a: number,
    b: number;
}

interface Lorem extends Val {
    c: number;
}

// interface Lorem { // też zadziała
//    a: number,
//    b: number;
//    c: number;
// }


const fooo = <T extends Val>(a: T, b: T): T => {
    console.log(typeof a, typeof b);
    return a;
}

console.log(fooo<Lorem>({ a: 2, b: 2, c: 111 }, { a: 20, b: 20, c: 200 }));
// console.log(foo<string>('10', '20'));