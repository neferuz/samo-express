
//selecting ul
const gallery = document.querySelector(".gallery");

//select imagbox
const itemboxes = document.querySelectorAll(".itembox")
console.log(itemboxes)


gallery.addEventListener("click", (e)=>{
    console.log(e)



    if(e.target.classList.contains("filter")){
        //
        gallery.querySelector(".active").classList.remove("active");

        e.target.classList.add("active");

        const filterValue = e.target.getAttribute("data-filter");
        console.log(filterValue)

        itemboxes.forEach(item =>{

            if(item.classList.contains(filterValue) || filterValue === "all"){
                item.classList.add("show");

                item.classList.remove("hide");
               
            }
            else {
                item.classList.add("hide")
            }


        })
    }
})

let students = ["jhon", "smith", "peter"];
students.forEach(element=>{
    console.log("hello " + element)
})

//shoe //shoe - //show //show  hide(watch,headphone)

//watch //watch - //show //show remove hide(watch )  hide(shoe, headphone)

//headphone 