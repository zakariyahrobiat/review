
let myReview= [
    
    {
    img: src = "img/images (27)~3.jpeg",
    name : " susan smith",
    job :"WEB DEVELOPER",
    about: "i'm baby meggings twee health goth +1, Bicycle rights tumeric chartreuse befor the sold out chambray pop-up. Shaman humblebrag pickled coloring book salvaia hoodie, cold-pressed four dollar toast everyday carry",
    },
{   
    img:  src="img/portrait-her-she-nicelooking-charming-260nw-1406672501_1.jpg",
    name :"Bill Anderson",
    job :"THE BOSS",
    about: "Edison bulb put a bird on it humblebrag, marfia pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bad street art shabby chic.",
},
{   
    img: src= "img/photo-1517841905240-472988babdf9.jpeg",
    name :"peter jones",
    job: "INTERN",
    about: " Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, flexie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."

},
{
    img:src="img/images (29)~2.jpeg",
    name:"Anna johnson",
    job: "WEB DESIGNER",
    about: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brookly twee enamel pin fashion axe.photo booth jean shorts artisian narwhal.",
}
]
let imageEl = document.getElementById("image");
let nameEl = document.getElementById("name");
let jobEl = document.getElementById("job");
let aboutEl = document.getElementById("about1");
let about2 = document.getElementById("about2");
let surpriseBtn = document.getElementById("surprise-btn");
let previousEl = document.getElementById("previous");
let nextEl = document.getElementById("next")
 let currentItem = 0;


surpriseBtn.addEventListener("click", function(){
    currentItem ++;
    if(currentItem > myReview.length -1){
        currentItem = 0
    }
    let item = myReview[currentItem];
    imageEl.src= item.img;
    nameEl.innerHTML = item.name;
    jobEl.innerHTML = item.job;
    aboutEl.innerHTML = item.about;
    about2.innerHTML = item.about;
    
    
})
previousEl.addEventListener("click", function(){
    currentItem -=1;
    if(currentItem < 0){
        currentItem = myReview.length -1
    }
    let item = myReview[currentItem];
    imageEl.src= item.img;
    nameEl.innerHTML = item.name;
    jobEl.innerHTML = item.job;
    aboutEl.innerHTML = item.about;
    about2.innerHTML = item.about;
     
})
nextEl.addEventListener("click", function(){
    currentItem +=1;
    if(currentItem > myReview.length - 1){
        currentItem =0
    }
let item = myReview[currentItem];
imageEl.src= item.img;
nameEl.innerHTML = item.name;
jobEl.innerHTML = item.job;
aboutEl.innerHTML = item.about;
about2.innerHTML = item.about;

})

