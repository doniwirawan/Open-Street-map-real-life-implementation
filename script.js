async function main() {


    function createMap(elemId, centerLat, centerLng, zoom) {
        var map = new L.Map(elemId);
        console.log(map)

        // Data provider
        var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib = 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';

        // Layer
        var osmLayer = new L.TileLayer(osmUrl, {
            minZoom: 4,
            maxZoom: 20,
            attribution: osmAttrib
        });

        // Map
        map.setView(new L.LatLng(centerLat, centerLng), zoom);
        map.addLayer(osmLayer);
        return map;
    }

    var map = createMap('map', -8.4561, 115.1999, 9);




    markersLatLngPic = [{
            point: [-8.5541842, 115.2405467],
            link: "https://images.unsplash.com/photo-1560103104-4623c14a473b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            name: "Land 1",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus turpis lacus, quis gravida orci ultrices vitae. Proin metus mi, lacinia ac nibh eget, gravida sollicitudin magna. Mauris molestie urna leo, quis rhoncus lacus finibus vitae. Vivamus ut est id leo dictum pharetra ac vel nulla. Praesent dignissim mi vel elit finibus, vitae ultrices turpis tristique. ",
            price: 4500000,
            size: 1000,
        },
        {
            point: [-8.4941595, 115.2355369],
            link: "https://images.unsplash.com/photo-1558005530-a7958896ec60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
            name: "Land 2",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus turpis lacus, quis gravida orci ultrices vitae. Proin metus mi, lacinia ac nibh eget, gravida sollicitudin magna. Mauris molestie urna leo, quis rhoncus lacus finibus vitae. Vivamus ut est id leo dictum pharetra ac vel nulla. Praesent dignissim mi vel elit finibus, vitae ultrices turpis tristique. ",
            price: 4500000,
            size: 1000,
        },
        {
            point: [-8.6872526, 115.4328641],
            link: "https://images.unsplash.com/photo-1557093793-e196ae071479?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            name: "Land 3",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus turpis lacus, quis gravida orci ultrices vitae. Proin metus mi, lacinia ac nibh eget, gravida sollicitudin magna. Mauris molestie urna leo, quis rhoncus lacus finibus vitae. Vivamus ut est id leo dictum pharetra ac vel nulla. Praesent dignissim mi vel elit finibus, vitae ultrices turpis tristique. ",
            price: 4500000,
            size: 1000,
        },
        {
            point: [-8.1697395, 114.4250452],
            link: "https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            name: "Land 4",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus turpis lacus, quis gravida orci ultrices vitae. Proin metus mi, lacinia ac nibh eget, gravida sollicitudin magna. Mauris molestie urna leo, quis rhoncus lacus finibus vitae. Vivamus ut est id leo dictum pharetra ac vel nulla. Praesent dignissim mi vel elit finibus, vitae ultrices turpis tristique. ",
            price: 4500000,
            size: 1000,
        },


    ];

    function currency(angka) {
        var reverse = angka.toString().split('').reverse().join(''),
            ribuan = reverse.match(/\d{1,3}/g);
        ribuan = ribuan.join('.').split('').reverse().join('');
        return ribuan;
    }


    function addPopUp(map, latLng, link, name, desc, price, size) {
        var marker = L.marker(latLng).addTo(map);
        marker.bindPopup(
            `
           <div class="card mt-3" style="width: 18rem;">
                <img src="${link}" class="card-img-top" alt="${name}">
                <div class="card-body p-0 py-2">
                    <div class="d-flex justify-content-between">
                    <h5 class="card-title font-weight-bold">${name}</h5>
                    <h6 class="text-warning pt-1"><i class="fas fa-money-bill-alt"></i> IDR ${currency(price)}</h6>
                    </div>

                    <div class="d-flex justify-content-between">
                    <p class="card-title"><i class="fas fa-ruler-combined mr-2"></i>${size} SQM</p>
                    
                    </div>
                    
                    <p class="card-text mt-1">${desc}</p>
                    <a href="https://wa.me/6282146333864?text=I'm%20interested%20to%20buy%20${name}" class="text-white btn btn-success"><i class="fab fa-whatsapp"></i> Contact Us</a>
                </div>
            </div>
        `).openPopup();
        return marker;
    }




    markersLatLngPic.forEach((latLng) => {
        console.log(latLng)
        addPopUp(map, latLng.point, latLng.link, latLng.name, latLng.desc, latLng.price, latLng.size);
    });





}

main()