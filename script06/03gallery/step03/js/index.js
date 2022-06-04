// 준비하기
let start = 0
let speed = -1
let time

// 복제하기
const box = document.querySelector('#gall')
let temp = document.querySelector('.box').cloneNode(true)
console.log(temp)
box.append(temp)

// 모션
function motion() {
  start += speed

  // 조건문
  if (start < - 300) {
    start = 0;
  }
  else if (start > 0) {
    start = -300
  }

  box.style.left = start + 'px'
}

// 타이머
play()

function play() {
  time = setInterval(motion, 10)
}
function stop() {
  clearInterval(time)
}

// 이벤트
const Li = document.querySelectorAll('li')
Li.forEach(function(item){item.addEventListener('mouseover', stop)})
Li.forEach(function(item){item.addEventListener('mouseout', play)})

// 방향 바꾸기
const left = document.querySelector('#left')
left.addEventListener('click', function(){
  speed = -1;
})
const right = document.querySelector('#right')
right.addEventListener('click', function(){
  speed = 1
})