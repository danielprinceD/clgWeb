const panoImg=document.querySelector(".panoImage");


const panorama = new PANOLENS.ImagePanorama('https://danielprinced.github.io/clgWeb/college360.jpg');
const viewerpano = new PANOLENS.Viewer(
    {
        container:panoImg,
        autoRotate:true,
        autoRotateSpeed:0.7,
        controlBar:false,
        autoRotateActivationDuration:10,
    }
);
viewerpano.disableControl();
viewerpano.add(panorama);

const websitedata=document.querySelector('.websiteData');

const websiteCgpiEl=document.querySelector(".websiteCgpi");
const websiteCgpiEl2=document.querySelector(".websiteCgpi2");
const websiteCgpiEl3=document.querySelector(".websiteCgpi3");




websiteCgpiEl.addEventListener('mouseenter',function createAnime(){

const createDataDiv=document.createElement('div')
const createDataHeaderDiv=document.createElement('div')
const createDataDetailDiv=document.createElement('div')

const headerEl=document.createElement('h3');

websiteCgpiEl.childNodes[0].childNodes[0].setAttribute('style','animation:rot 1.5s ease-in-out')
websiteCgpiEl.appendChild(createDataDiv);
createDataDiv.appendChild(createDataHeaderDiv);
createDataDiv.appendChild(createDataDetailDiv);
createDataHeaderDiv.appendChild(headerEl);

createDataDiv.setAttribute('class','websiteData');
createDataHeaderDiv.setAttribute('class','websiteDataHeader');
createDataDetailDiv.setAttribute('class','websiteDataDetail');
headerEl.setAttribute('class','head');

websiteCgpiEl2.setAttribute('style','display:none');
websiteCgpiEl3.setAttribute('style','display:none');

headerEl.innerText="CGPI Calculator"
createDataDetailDiv.innerText="Effortlessly track your academic progress with our CGPI value checking feature, providing instant access to your Cumulative Grade Point Index."

websiteCgpiEl.addEventListener('mouseleave',()=>
{
    websiteCgpiEl.childNodes[0].childNodes[0].setAttribute('style','animation:none');
    websiteCgpiEl2.setAttribute('style','display:flex');
    websiteCgpiEl3.setAttribute('style','display:flex');
    createDataDiv.remove();
})

});



websiteCgpiEl2.addEventListener('mouseenter',function createAnime1(){

const createDataDiv=document.createElement('div')
const createDataHeaderDiv=document.createElement('div')
const createDataDetailDiv=document.createElement('div')
const headerEl=document.createElement('h3');

websiteCgpiEl.setAttribute('style','display:none');
websiteCgpiEl3.setAttribute('style','display:none');


websiteCgpiEl2.appendChild(createDataDiv);
createDataDiv.appendChild(createDataHeaderDiv);
createDataDiv.appendChild(createDataDetailDiv);
createDataHeaderDiv.appendChild(headerEl);
websiteCgpiEl2.childNodes[0].childNodes[0].setAttribute('style','animation:rot 1.5s ease-in-out')

createDataDiv.setAttribute('class','websiteData');
createDataHeaderDiv.setAttribute('class','websiteDataHeader');
createDataDetailDiv.setAttribute('class','websiteDataDetail');
headerEl.setAttribute('class','head');

websiteCgpiEl.setAttribute('style','display:none');
websiteCgpiEl3.setAttribute('style','display:none');

headerEl.innerText="Student Notice Board"
createDataDetailDiv.innerText="Stay informed and updated with our student notice board feature, your go-to source for important announcements and campus news. "

websiteCgpiEl2.addEventListener('mouseleave',()=>
{
    websiteCgpiEl2.childNodes[0].childNodes[0].setAttribute('style','animation:none');
    websiteCgpiEl3.setAttribute('style','display:flex');
    websiteCgpiEl.setAttribute('style','display:flex');
    createDataDiv.remove();
})

});




websiteCgpiEl3.addEventListener('mouseenter',function createAnime2(){

    const createDataDiv=document.createElement('div')
    const createDataHeaderDiv=document.createElement('div')
    const createDataDetailDiv=document.createElement('div')
    const headerEl=document.createElement('h3');

    websiteCgpiEl3.childNodes[0].childNodes[0].setAttribute('style','animation:rot 1.5s ease-in-out')

    websiteCgpiEl.setAttribute('style','display:none');
    websiteCgpiEl2.setAttribute('style','display:none');

    
    websiteCgpiEl3.appendChild(createDataDiv);
    createDataDiv.appendChild(createDataHeaderDiv);
    createDataDiv.appendChild(createDataDetailDiv);
    createDataHeaderDiv.appendChild(headerEl);
    
    createDataDiv.setAttribute('class','websiteData');
    createDataHeaderDiv.setAttribute('class','websiteDataHeader');
    createDataDetailDiv.setAttribute('class','websiteDataDetail');
    headerEl.setAttribute('class','head');
    
    websiteCgpiEl.setAttribute('style','display:none');
    websiteCgpiEl2.setAttribute('style','display:none');
    
    headerEl.innerText="Programming Quiz"
    createDataDetailDiv.innerText="Stay informed and updated with our student notice board feature, your go-to source for important announcements and campus news."
    
    websiteCgpiEl3.addEventListener('mouseleave',()=>
    {
        websiteCgpiEl3.childNodes[0].childNodes[0].setAttribute('style','animation:none');
        websiteCgpiEl2.setAttribute('style','display:flex;');
        websiteCgpiEl.setAttribute('style','display:flex;');
        createDataDiv.remove();
    })
    
    });

    




