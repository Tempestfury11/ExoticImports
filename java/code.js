// let properties = JSON.parse(localStorage.getItem('property')) ?JSON.parse(localStorage.getItem('property')) :
localStorage.setItem('property',JSON.stringify(properties = [{
        id: 1,
        type: 'Apartment',
        location: 'American',
        url: "https://i.postimg.cc/8kBnZd1X/19682.jpg",
        url1: "https://i.postimg.cc/3wPKw69n/1968.jpg",
        url2: "https://i.postimg.cc/mrFsKjRM/19683.jpg",
        url3: "https://i.postimg.cc/cLvy8hvj/19684.jpg",
        bed: 4,
        toilet: 2,
        price:15000,
        for: 'Sale'
    },
    {
        id: 2,
        type: 'Apartment',
        location: 'American',
        url: "https://i.postimg.cc/fLsfdF0z/2.jpg",
        url1: "https://i.postimg.cc/5NGKDVt7/1.jpg",
        url2: "https://i.postimg.cc/MKcd7FYy/3.jpg",
        url3: "https://i.postimg.cc/wvGD39Zn/4.jpg",
        bed: 3,
        toilet: 2,
        price:15000
    },
    {
        id: 3,
        type: 'Apartment',
        location: 'American',
        url: "https://i.postimg.cc/MZFj2NKn/shelbymustang2.jpg",
        url1: "https://i.postimg.cc/DzYc4QbC/shelbymustang1.jpg",
        url2: "https://i.postimg.cc/Gtzt9K4t/shelbymustang3.jpg",
        url3: "https://i.postimg.cc/sgCfyb6m/shelbymustang5.jpg",
        bed: 2,
        toilet: 2,
        price:70000
    },
    {
        id: 4,
        type: 'Apartment',
        location: 'German',
        url: "https://i.postimg.cc/K4hGcnHH/R8.jpg",
        url1: "https://i.postimg.cc/VvMqr3jg/R81.webp",
        url2: "https://i.postimg.cc/mgZ9Bc68/R82.webp",
        url3: "https://i.postimg.cc/yxXJzBmM/R83.webp",
        bed: 5,
        toilet: 3,
        price:70000
    },
    {
        id: 5,
        type: 'House',
        location: 'German',
        url: "https://i.postimg.cc/nz6j79Wv/Tt.webp",
        url1: "https://i.postimg.cc/jdM56MZ4/TT1.webp",
        url2: "https://i.postimg.cc/mrLWd4kc/TT2.webp",
        url3: "https://i.postimg.cc/8CzP7Mhn/TT3.webp",
        bed: 3,
        toilet: 2,
        price:10000000,
        for: 'Sale'
    },
    {
        id: 6,
        type: 'House',
        location: 'German',
        url: "https://i.postimg.cc/9MqzWFfz/911.jpg",
        url1: "https://i.postimg.cc/YSTKtW8F/P1.jpg",
        url2: "https://i.postimg.cc/j5y9KkDV/P2.jpg",
        url3: "https://i.postimg.cc/Qtg6v9zh/P3.jpg",
        bed: 3,
        toilet: 1,
        price:10000000,
        for: 'Sale'
    },
    {
        id: 7,
        type: 'House',
        location: 'Japan',
        url: "https://i.postimg.cc/KzrS7dqJ/RX7.jpg",
        url1: "https://i.postimg.cc/cH1Y4vHs/RX72.jpg",
        url2: "https://i.postimg.cc/zGnRCCHz/RX71.jpg",
        url3: "https://i.postimg.cc/LsKrJZrF/rx6.jpg",
        bed: 3,
        toilet: 2,
        price:100000000
    },
    {
        id: 8,
        type: 'House',
        location: 'Japan',
        url: "https://i.postimg.cc/3JNVW4TL/Brian.jpg",
        url1: "https://i.postimg.cc/fLxH12LV/skyline4.jpg",
        url2: "https://i.postimg.cc/rF2nCLf5/skyline2.jpg",
        url3: "https://i.postimg.cc/s2G7NMXx/skyline3.jpg",
        bed: 3,
        toilet: 2,
        price:10000000
    },
    {
        id: 9,
        type: 'House',
        location: 'Japan',
        url: "https://i.postimg.cc/J4sYMfNv/Supra2.webp",
        url1: "https://i.postimg.cc/DZK6Qrgn/supra.jpg",
        url2: "https://i.postimg.cc/zXfjkXnb/Supra1.webp",
        url3: "https://i.postimg.cc/P5gQhW0Y/supra3.jpg",
        bed: 3,
        toilet: 2,
        price:100000000
    },
]));


function getProperties(prop){
    document.getElementById('car-market-row').innerHTML = '';
    prop.forEach((property,index) => {
        document.getElementById('car-market-row').innerHTML +=
            `<div class="col-md-4 p-3 d-flex justify-content-center">
            <div class="card" style="width: 18rem;">
            <img src="${property.url}" class="card-img-top" alt="..." width="1024" height="183px">
            <div class="card-body">
              <h4 class="card-title">${property.type} in ${property.location}</h4>
              <h4 class="card-title"><i class="fa-solid fa-bed">${property.bed}</i> <i class="fa-solid fa-toilet">${property.toilet}</i></h4>
              <h5>R ${property.price}</h5>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${index}" onclick="modalProperties()">
                View Property
               </button>
            <div class="modal fade" id="exampleModal${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">${property.type}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <div id="carouselExampleIndicators${index}" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators${index}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators${index}" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators${index}" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="${property.url1}" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="${property.url2}" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="${property.url3}" class="d-block w-100" alt="...">
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators${index}" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators${index}" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
                    </div>
                </div>
            </div>`
    })
}
getProperties(properties);


// For  ToiletSearch
function toilet(event){
    // console.log(properties);
    let newToilets = properties.filter(property => {
        return property.toilet <= event.target.value
    })
    getProperties(newToilets)
}

// For Room Search
function room(event){
    // console.log(properties);
    let newRooms = properties.filter(property => {
        return property.bed <= event.target.value
    })
    getProperties(newRooms)
}

// For Buget Search
function budget(event){
    // console.log(properties);
    let newBudget = properties.filter(property => {
        return property.price == event.target.value
    })
    getProperties(newBudget)
}

document.querySelector('#property-toilets').addEventListener('change',toilet);
document.querySelector('#property-rooms').addEventListener('change',room);
document.querySelector('#property-budget').addEventListener('change',budget);


    // localStorage.setItem('property',JSON.stringify(property))
    // console.log(localStorage)