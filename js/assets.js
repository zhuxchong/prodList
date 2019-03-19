const ITEMS = [
    {
        image: "assets/walnut_speakers.png",
        title: "Walnut Speakers & Amp",
        price: 599
    },
    { image: "assets/maple_lamp.png", title: "Maple Lamp", price: 109 },
    { image: "assets/walnut_planter.png", title: "Walnut Planter", price: 39 },
    {
        image: "assets/m18_chair.png",
        title: "M18 Chair, Grey Wool Felt",
        price: 330
    },
    { image: "assets/pilot_stool.png", title: "Pliot Stool, Black", price: 265 },
    {
        image: "assets/beoplay.png",
        title: "B&O BeoPlay A9 - Rose Gold",
        price: 2999
    },
    {
        image: "assets/joey_roth.png",
        title: "Joey Roth CRM-001 Ceramic",
        price: 495
    },
    { image: "assets/v5bt_bamboo.png", title: "V5BT Bamboo Speaker", price: 200 },
    { image: "assets/walnut_iphone.png", title: "Walnut iPhone Case", price: 79 },
    {
        image: "assets/walnut_watch.png",
        title: "Walnut Watch (Round)",
        price: 239
    },
    { image: "assets/polk_audio.png", title: "Polk Audio Wireless", price: 705 },
    {
        image: "assets/zebra_series.png",
        title: "Zebra Series Varberg Table",
        price: 89
    },
    { image: "assets/pots_pedestal.png", title: "POTS Pedestal Set", price: 67 },
    {
        image: "assets/soundlink_bluetooth.png",
        title: "SoundLink Bluetooth Mobile",
        price: 300
    },
    {
        image: "assets/wall_clock.png",
        title: 'Wall Clock OJ Black 31.5"',
        price: 100
    },
    {
        image: "assets/cherry_wood.png",
        title: "Cherry Wood Graph 3-Pack",
        price: 10
    }
];
let test1=()=>{
    let count=1;
    let line_count=-1;
    ITEMS.map((item,index)=>{
        if(count%4===1){
            let father= document.getElementById('img-container')
            let img_line=document.createElement('div');
            img_line.className = 'gallery';
            father.appendChild(img_line);
            line_count+=1;
        }
        let imgDisplay=document.createElement('div');
        imgDisplay.className='imgDisplay';
        imgDisplay.style.display='inline-block';
        let fa=document.getElementsByClassName('gallery')[line_count];
        fa.appendChild(imgDisplay);
        let ele=document.createElement('img');
        ele.src=item.image;
        ele.className='pic';
        let con=document.getElementsByClassName('imgDisplay')[index];
        con.appendChild(ele);
        let p1=document.createElement('p');
        p1.className='productName';
        let p2=document.createElement('p');
        p2.className='productPrice';
        p1.innerHTML=item.title;
        p2.innerHTML=item.price;
        con.appendChild(p1);
        con.appendChild(p2);
        count+=1;
    })
}
