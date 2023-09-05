// select menu hamburger
const menu = document.querySelector('.menu');
console.log(menu);
const iconHamburger = document.getElementsByClassName('iconHamburger');
console.log(iconHamburger);
menu.addEventListener('click', (e) => {
    const menuAppear = menu.childNodes[3];
    if(e.target) {
        console.log(menuAppear)
        menuAppear.classList.toggle('navBar1');
    }
});
//  select pictures
// change source images section two container grid
const desktopSources = [
    {
        id:1,
        src:'../images/desktop/image-deep-earth.jpg'
    },
    {
        id:2,
        src:'images/desktop/image-night-arcade.jpg'
    },
    {
        id:3,
        src:'images/desktop/image-soccer-team.jpg'
    },
    {
        id:4,
        src:'images/desktop/image-grid.jpg'
    },
    {
        id:5,
        src:'images/desktop/image-from-above.jpg'
    },
    {
        id:6,
        src:'images/desktop/image-pocket-borealis.jpg'
    },
    {
        id:7,
        src: '../images/desktop/image-curiosity.jpg'
    }
    /*
    ,
    {
        id: 8,
        src: './images/desktop/image-fisheye.jpg'
    }
    */
];


const gridImages = document.querySelectorAll('.grid img');
// console.log(gridImages);
// gridImages.forEach(image =>{
    // image.src = desktopSources[i].src;
// })
let item = desktopSources.length;
window.addEventListener('resize', () => {
    const width = document.documentElement.clientWidth;
    // console.log(width);
    if(width >= 1200){
        console.log(width);
        if(desktopSources.length >= gridImages.length){
        for (let index = 0; index < gridImages.length; index++) {
            // const element = gridImages[index];
            //  console.log('gridImages[index]:', gridImages[index]);
            
            desktopSources.forEach(desktopSource => {
                // console.log('gridImages: ',gridImages[index].src);
                // console.log('element.src: ', element.src);
                 console.log('desktopSource: ',desktopSource.src);
                gridImages[index].src = desktopSource.src;
                //  desktopSource.src = element.src;
            })    
        }
    }
       /*
            gridImages.forEach(gridImage => {
                console.log(gridImage.src)
                
                for (const desktopSource of desktopSources) {
                    // console.log('gridImage.src:', gridImage.src);
                    // console.log('desktopSource.src:', desktopSource.src)
                    gridImage.src = desktopSource.src; 
                      
                }
            });
            */
        // }
    }
})
