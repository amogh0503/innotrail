let colors = [
    { 'bg': 'rgb(120, 155, 170)', 'color': 'white' },
    { 'bg': 'rgb(170, 200, 235)', 'color': 'black' },
    { 'bg': 'rgb(35, 90, 150)', 'color': 'white' },

    { 'bg': 'rgb(65, 130, 150)', 'color': 'white' },
    { 'bg': 'rgb(160, 220, 190)', 'color': 'black' },
    { 'bg': 'rgb(255, 210, 80)', 'color': 'black' },
    { 'bg': 'rgb(215, 0, 0)', 'color': 'white' },
    { 'bg': 'rgb(255, 90, 0)', 'color': 'white' },
    { 'bg': 'rgb(200, 190, 180)', 'color': 'black' },

]



let items = document.getElementsByClassName('tb-item')

for (let item of items) {

    item.addEventListener('dragstart', (event) => {

        event.dataTransfer.setData("text", event.target.id);
        event.dataTransfer.setData("parent", item);
        item.style.opacity = 0.1


    })


    item.addEventListener('drop', (event) => {

        event.preventDefault();
        let data = document.getElementById(event.dataTransfer.getData("text"))

        let start = data.parentNode
        let end = event.target

        event.target.replaceWith(data);

        data.style.opacity = 1
        setTimeout(() => {

            start.appendChild(end)


           

        }, 400);

    })


    item.addEventListener("dragend", function(event) {
        // reset the transparency
        event.target.style.opacity = "1";
    }, false);

    item.addEventListener('dragover', (event) => {

        event.preventDefault();

    })




}

// move one div to another div with animation








let startValue = 100
let index = 0

let x;
let y;

function createRow(){
    for (let grid = 0; grid <3; grid++){
    let tr = document.createElement("tr");
   
    for (let step = 0; step < 3; step++) {

        let td = document.createElement('td')
        let color = colors[Math.floor(Math.random() * colors.length)];
        let item = document.createElement('div')
        item.className = 'tb-item'
        item.innerText = startValue
        item.style.backgroundColor = color.bg
        item.style.color = color.color
        item.draggable = true
        item.ondragstart = "drag(event)"
        item.id = `id${index+1}`
        index += 1
        addDragEvents(item)
        td.appendChild(item)


        startValue += 15

        tr.appendChild(td)

    }




    document.getElementsByTagName('table')[0].appendChild(tr)
    }
}



function addDragEvents(item) {
    item.addEventListener('dragstart', (event) => {

        event.dataTransfer.setData("text", event.target.id);
        event.dataTransfer.setData("parent", item);
        item.style.opacity = 0.1
        console.log(event.screenX)
        console.log(event.screenY)
        x = event.screenX
        y = event.screenY



    })


    item.addEventListener('drop', (event) => {

        event.preventDefault();
        let data = document.getElementById(event.dataTransfer.getData("text"))

        let start = data.parentNode
        let end = event.target

        event.target.replaceWith(data);
        console.log(event.screenX)
        console.log(event.screenY)



        data.style.opacity = 1
        setTimeout(() => {

            start.appendChild(end)



        }, 400);

    })


    item.addEventListener("dragend", function(event) {
        // reset the transparency
        event.target.style.opacity = "1";
    }, false);

    item.addEventListener('dragover', (event) => {

        event.preventDefault();

    })

}

window.onload = (event)=>{
    createRow();
}