let yerel = JSON.parse(localStorage.getItem('LocalList'))
console.log(yerel)

let tag = []



let tagName = document.getElementsByTagName("li")
for(let i = 0; i<tagName.length; i++) {
    if(yerel) {
        tagName[i].innerHTML = yerel[i]
    } 
    let span = document.createElement("span")
    let txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(txt)
    tagName[i].appendChild(span)
} 

let close = document.getElementsByClassName('close')
for(let i = 0; i < close.length; i++){
    close[i].onclick = function() {
        let div = this.parentElement
        div.style.display = "none";
        localLi()
    }
}

let list = document.querySelector("ul")
list.addEventListener(
    "click",
    (ev) => {
        if(ev.target.tagName === "li") {
            ev.target.classList.toggle("checked")
        }
    }
)




  function newElement(){
      let listItem = document.createElement("li")
      let inputV = document.getElementById("task").value
      let t = document.createTextNode(inputV)
      
      listItem.appendChild(t)
        // space escape veya input'un boş olma durumu
      if(inputV === "" || inputV.replace(/^\s+|\s+$/g, "").length == 0){
          $(".error").toast("show")
      } else {
          $(".success").toast("show")
          document.getElementById("list").appendChild(listItem)
          localLi()
      }
      document.getElementById("task").value = ""
      let span = document.createElement("span")
      let txt = document.createTextNode("\u00D7")

      span.className = "close"
      span.appendChild(txt)
      listItem.appendChild(span)
      
      
      for (i = 0; i< close.length; i++) {
          close[i].onclick = function () {
              let div = this.parentElement
              div.style.display = "none"
          }
          
      }
      localLi()
    }



//localStorage.setItem("ListItems", tagName)
function localLi(){
    
    for(let i = 0; i<tagName.length; i++) {
        tagName[i].style.display == "none" ? tag = tag.filter(item => item !== tagName[i].innerHTML) :
         tag[i] = tagName[i].innerHTML
         
     }
     console.log(tag) 
    localStorage.setItem("LocalList", JSON.stringify(tag))
}

localLi()

// for(let i = 0; i<tagName.length; i++) {
//     console.log(tagName[i].innerHTML)
//     tagName[i].innerHTML = tag[i]
    
// } 

