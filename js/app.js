const sections = document.querySelectorAll("section")


function scrollHandler(){
  for(let i = 0; i < sections.length; i++){
    if(sections[i].offsetTop - 200 <= window.pageYOffset){
        sections[i].classList.add("active")
    }
  }
}


window.addEventListener("load", scrollHandler) // 문서를 읽고 나서 실행하라
window.addEventListener("scroll", scrollHandler)