const reviews = [

    {
        id: 1,
        name: "Susan Williams",
        job : "Marketing manager",
        img:
        "person2.jfif",
        text:
        "Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,.Sing long her way size. Waited end mutual missed myself the little sister one. Hence we doors is given rapid scale above am. Difficult ye mr delivered behaviour by an. If their woman could do wound on. You folly taste hoped their above are and but.",







    },
    {
        id: 2,
        name: "Jim Lokonga",
        job : "Database manager",
        img:
        "person1.webp",
        text:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",



    },
    {
        id: 3,
        name: "Adam Jones",
        job : "Web developer",
        img:
        "person3.jfif",
        text:
        "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus."
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