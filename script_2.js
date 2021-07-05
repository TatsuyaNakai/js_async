
function sample(){
    const after1s=setTimeout(()=>{
        const setTime=new Date();
        while(new Date()- setTime< 3000);
        console.log('sleep done');
    }, 3000);
}
//３秒間は非同期処理に空きがでるから、同じ非同期処理でもクリックしたら出力されるようになってる。
// でも、そこから3秒経つと、whileの同期処理になって、クリックしても3秒間はコンソールに出力されないようになる。

const btn=document.querySelector('button');
btn.addEventListener('click', ()=>{
    console.log('Clicked!!');
});

sample();


