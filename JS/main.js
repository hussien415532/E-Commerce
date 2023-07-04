let boxes = Array.from(document.querySelectorAll(".box"));
let boxImgs = Array.from(document.querySelectorAll(".box img"));
let boxImgSrc;
let arr=[];
let detailImg;
// boxes.forEach((box) => {
//   box.addEventListener("click", (e) => {
    
//   });
// });
boxImgs.forEach(img=>{
  img.addEventListener("click",(e)=>{
    let target = e.target;
    boxImgSrc = target.getAttribute("src");
    arr.push(boxImgSrc)
    window.location.pathname="sproduct.html";
    console.log(arr);
  })
})