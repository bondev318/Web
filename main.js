// for(let i = 1; i < 10;i++){
    
//    //  console.log('3 x',i,'=',i*3)
//     console.log(`3 x ${i} = ${i*3}`) 
//     //nested loop ngữ pháp vòng lặp bên trong vòng lặp về nhà coi thêm

//}
let sliderImages = document.querySelectorAll('.slide')//querySelector tự động gọi về

let arrowLeft = document.querySelector('#arrow-left')
let arrowRight = document.querySelector('#arrow-right')
let current = 0

function reset(){
    for(let i = 0; i<sliderImages.length;i++){
        sliderImages[i].style.display = 'none'//làm cho ảnh bị ẩn đi
    }
}
function startSlide(){
    reset()
    sliderImages[0].style.display = 'block'//làm cho ảnh đầu tiên bị khóa lại
}

//Preeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
function slideLeft(){
    reset()
    sliderImages[current-1].style.display = 'block'
    current--
}
arrowLeft.addEventListener('click',function(){//tạo event click
    if(current === 0){//nếu giá trị current là 0
        current = sliderImages.length //thì current bằng độ dài 5 bức hình
    }
    slideLeft()
    //khi mà thứ tự đến bức hình số 5 thì slideLeft dc thi hành
})
//Afterrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
function slideRight(){
    reset();
    sliderImages[current+1].style.display = 'block'
    current++;
}
arrowRight.addEventListener('click',function(){//tạo event click
    if(current === sliderImages.length-1){//Tổng chiều dài tất cả các hình bằng 1
        current = -1//
    }
    slideRight()
    //
})

startSlide()
