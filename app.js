const btns = document.querySelectorAll(".tab-btn")
const about = document.querySelector('.about')
const content = document.querySelectorAll('.content')

about.addEventListener('click', function(e){
    const id = e.target.dataset.id;
    if(id){
 // remove activ from other buttons
 btns.forEach(function(btn){
    btn.classList.remove('active')
    e.target.classList.add("active")
})
   
content.forEach(function(con){
    con.classList.remove("active")
    })
    const element = document.getElementById(id)

    element.classList.add("active")

}
   



  
    
})
 

    
        

 
