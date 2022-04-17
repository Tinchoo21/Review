const reviews = [

    {
        id: 1,
        name: "Susan Williams",
        job : "Marketing manager",
        img:
        "person2.jfif",
        text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"






    },
    {
        id: 2,
        name: "Jim Lokonga",
        job : "Database manager",
        img:
        "person1.webp",
        text:
        " Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",



    },
    {
        id: 3,
        name: "Adam Jones",
        job : "Web developer",
        img:
        "person3.jfif",
        text:
        " Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus."
    }
]


const img = document.getElementById("image")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")

let currentItem = 0;

window.addEventListener("DOMContentLoaded",function(){


showPerson(currentItem)
})


function showPerson(person)
{
    const item = reviews[person]
img.src = item.img
author.textContent = item.name
job.textContent = item.job
info.textContent = item.text
}
nextBtn.addEventListener("click", function(){

    currentItem++;
   

    if(currentItem > reviews.length -1)
    {
        currentItem = 0;
        
    } 
    showPerson(currentItem)
})
prevBtn.addEventListener("click",function(){

    currentItem--;
    if(currentItem < 0)
    {
        currentItem = reviews.length -1
    }
    showPerson(currentItem);


});