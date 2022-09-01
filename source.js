// var about = document.querySelector('#about');
// var skills = document.querySelector('.skills');
// var exp = document.querySelector('.experience');
// about.addEventListener('click' , getPosition);
// skills.addEventListener('click' , getPosition);
// exp.addEventListener('click',getPosition);


var skills = document.querySelector('.skills-display');


const navMenu = document.querySelectorAll('.nav-menu');

for(var i of navMenu){
    console.log(i);
    var navList = i.querySelectorAll('li a');
    console.log(navList);
    for (var j of navList) {
        console.log(j);
        j.addEventListener('click',getPosition);
    }
}


function getPosition(event) {
    event.preventDefault();
    console.log('hi');
    console.log(this.attributes)
    var attribute = this.getAttribute('href');
    var element = document.querySelector(attribute);
    console.log(element);


    var position = element.getBoundingClientRect();
    console.log(position.y)
    var currentPos = 0;
    var targetPos = position.y;

    var id = setInterval(scroll,50);

    function scroll() {
        if(currentPos >= targetPos-10){
            console.log(currentPos);
            console.log(targetPos);
            clearInterval(id);
            return;
        }else{
            console.log('scrollby')
            window.scrollBy(0,50);
            currentPos +=50;
        }
    }

    
}


window.addEventListener('scroll',function(e) {
    var positionSkills = skills.getBoundingClientRect();
    console.log(positionSkills, 'positionSkills');
    console.log('main', positionSkills.bottom-this.window.innerHeight)
    console.log('top', positionSkills.top)
    console.log('bottom', positionSkills.bottom)
    var skillProgressDivs = document.querySelectorAll('.skill-progress > div');
    console.log(skillProgressDivs);
    for(div of skillProgressDivs) {

        // div.classList.add('width-zero')
        console.log(div.classList);
        addAnimation(div,positionSkills);
    }

 

    
});

function addAnimation(element,positionSkills){


    if(positionSkills.bottom-this.window.innerHeight < 0 ) {

        element.classList.remove('width-zero');
        
        console.log('scroll up')
        // console.log(element);

        element.classList.add('skill-animation');
        console.log(element.classList);

        // console.log(element.dataset.width ,'width')

        // console.log('*****');

        var root = this.document.querySelector(':root');
        // console.log(root);
        root.style.setProperty('--width', element.dataset.width)
        root.style.setProperty('--widthBy25', element.dataset.width/4)
        root.style.setProperty('--widthBy50', element.dataset.width/2)
        root.style.setProperty('--widthBy75', element.dataset.width * 3 /4);      
    }else{
        console.log('not scroll up')
        element.classList.remove('skill-animation'); 
        // console.log(ele.classList);
    }

    if(positionSkills.top > 0 && positionSkills.bottom-this.window.innerHeight < 0) {
        
        console.log('scroll down')
        // console.log(ele);

        element.classList.add('skill-animation');
        // console.log(ele.classList);

        var root = this.document.querySelector(':root');
        // console.log(root);
        root.style.setProperty('--width', element.dataset.width)
        root.style.setProperty('--widthBy25', element.dataset.width/4)
        root.style.setProperty('--widthBy50', element.dataset.width/2)
        root.style.setProperty('--widthBy75', element.dataset.width * 3 /4)        
    }else{
        element.classList.add('width-zero');
        console.log('not scroll down')
        element.classList.remove('skill-animation');
        // console.log(ele.classList);
    }

    


    



}


async function {
    
}