// 扒素材的脚本 用多了被封
let num = 0;
let offset = 0;
const t = 20;
const list = document.querySelectorAll('.icon-gouwuche1');
const clear = ()=>{
    document.querySelectorAll('.top-btn-wrap').forEach((i)=>{
        i.click();
    });
    setTimeout(() => {
        run()
    }, 2000);
}
const download = ()=>{

    // const buttons = document.querySelectorAll('.car-bottom');
    // buttons[0].childNodes[1].click()
    const body =document.querySelectorAll('.car-manage-sucai') 
    const types = body[0].querySelectorAll('.car-manage-bottom');
    types[0].childNodes[0].click()
    setTimeout(() => {
        clear()
    }, 2000);
}
const run = ()=>{
    const _index = num*t+offset;
    for (let index = _index; index < (num+1)*t+offset; index++) {
        const element = list[index];
        element.click();
    }
    num++;
    offset = 0;
    setTimeout(() => {
        download()
    }, 2000);
   
   
}
run()
