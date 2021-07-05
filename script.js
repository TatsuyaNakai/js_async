// async/awaitを使用して、非同期処理が本来後になるはずやけど、その処理を待って次に進む処理を記述する。

async function asyncFunc(){
    const res=await fetch('https://jsonplaceholder.typicode.com/photos');
    const json=await res.json();
    console.log(json);
    console.log('Hello World');
}

asyncFunc();

const greet=(name)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(`Hello ${name}`);
            resolve(name);
        }, 1000);
    });
};


// greet('tatsuya').then((name)=>{
//     return greet('haruo');
// }).then((name)=>{
//     return greet('keizi');
// }).then(()=>{
//     console.log('Hello World');
// })

// 上としたが全く同じになってる。

// async function asgreet(){
//     let response=await greet('tatsuya');
//     response=await greet('haruo');
//     response=await greet('keizi');
//     console.log('Hello world'); 
// }

// asgreet();