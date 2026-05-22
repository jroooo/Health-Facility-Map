// GeoJSON Database Object complete with functional details, hours, reviews, links & images
const facilitiesData = {
    "type": "FeatureCollection",
    "features": [
        // PUBLIC HOSPITALS
        {
            "type": "Feature",
            "properties": {
                "name": "Eastern Visayas Regional Medical Center",
                "description": "The legacy apex tertiary training hospital complex under the Department of Health (DOH), providing specialized medical services, critical care, and regional health training.",
                "category": "Hospital",
                "ownership": "Public",
                "phone": "0935 678 9109",
                "rating": "2.9",
                "hours": "Open 24 hours",
                "website": "http://evrmc.doh.gov.ph/",
                "image": "image/evrmc.png"
            },
            "geometry": { "type": "Point", "coordinates": [125.00453, 11.25122] }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Eastern Visayas Medical Center",
                "description": "Situated in Barangay Cabalawan, this newly constructed, expansive medical campus represents the modernized future of public healthcare in the region.",
                "category": "Hospital",
                "ownership": "Public",
                "phone": "(053) 832 5309",
                "rating": "3.6",
                "hours": "Open 24 hours",
                "website": "http://evrmc.doh.gov.ph/",
                "image": "image/tacloban---evmc.jpg"
            },
            "geometry": { "type": "Point", "coordinates": [124.95834, 11.28913] }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Tacloban City Hospital",
                "description": "The primary city government-administered district hospital providing localized, affordable, and immediate healthcare services to Tacloban residents.",
                "category": "Hospital",
                "ownership": "Public",
                "phone": "(053) 321 2102",
                "rating": "3.1",
                "hours": "Open 24 hours",
                "website": "#",
                "image": "image/taclobancityhospital.jpg"
            },
            "geometry": { "type": "Point", "coordinates": [125.00488, 11.19857] }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Declador Ultrasound & Clinic",
                "description": "A specialized public-access medical facility dedicated to diagnostic ultrasound imagery, maternal screenings, and outpatient obstetric care.",
                "category": "Hospital",
                "ownership": "Public",
                "phone": "Not Available",
                "rating": "4.0",
                "hours": "8:00 AM - 5:00 PM",
                "website": "#",
                "image": "image/tacloban maternity.png"
            },
            "geometry": { "type": "Point", "coordinates": [125.00375, 11.24470] }
        },
        // PRIVATE HOSPITALS
        {
            "type": "Feature",
            "properties": {
                "name": "Divine Word Hospital",
                "description": "A premier private tertiary hospital managed by a religious organization, widely recognized for its holistic care, comprehensive diagnostic laboratories, and robust multi-specialty clinics.",
                "category": "Hospital",
                "ownership": "Private",
                "phone": "(053) 321 2305",
                "rating": "3.8",
                "hours": "Open 24 hours",
                "website": "#",
                "image": "image/divineworld.jpg"
            },
            "geometry": { "type": "Point", "coordinates": [125.0002, 11.2414] }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Mother of Mercy Hospital",
                "description": "A well-established private general hospital along Ninoy Aquino Avenue offering reliable inpatient, emergency, and diagnostic medical services.",
                "category": "Hospital",
                "ownership": "Private",
                "phone": "(053) 321 4512",
                "rating": "3.4",
                "hours": "Open 24 hours",
                "website": "#",
                "image": "image/mothermercy.jpg"
            },
            "geometry": { "type": "Point", "coordinates": [124.99925, 11.23035] }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Remedios Trinidad Romualdez Hospital",
                "description": "A prominent private teaching and foundation-backed hospital seamlessly linked with medical education, specializing in tertiary clinical training and healthcare research.",
                "category": "Hospital",
                "ownership": "Private",
                "phone": "(053) 321 1011",
                "rating": "3.7",
                "hours": "Open 24 hours",
                "website": "#",
                "image": "image/remedios rtr.png"
            },
            "geometry": { "type": "Point", "coordinates": [124.99919, 11.21232] }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "ACE Medical Center Tacloban",
                "description": "A state-of-the-art, multi-specialty private medical complex in Marasbaras, boasting advanced medical technology and modern patient accommodations.",
                "category": "Hospital",
                "ownership": "Private",
                "phone": "0917 123 4567",
                "rating": "4.2",
                "hours": "Open 24 hours",
                "website": "https://acemedicalcentertacloban.com",
                "image": "image/acemedical.jpg"
            },
            "geometry": { "type": "Point", "coordinates": [125.00795, 11.20450] }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Raphah Medical & Diagnostic Center",
                "description": "A trusted, long-standing private healthcare institution providing dedicated inpatient services, multi-specialty clinics, and compassionate community care options.",
                "category": "Hospital",
                "ownership": "Private",
                "phone": "(053) 321 2146",
                "rating": "3.5",
                "hours": "Open 24 hours",
                "website": "#",
                "image": "image/raphahmedical.jpeg"
            },
            "geometry": { "type": "Point", "coordinates": [125.00211, 11.22580] }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "United Shalom Hospital",
                "description": "A modern private medical facility providing dependable emergency services, general family medicine, and specialized healthcare delivery setups.",
                "category": "Hospital",
                "ownership": "Private",
                "phone": "(053) 888 3156",
                "rating": "3.9",
                "hours": "Open 24 hours",
                "website": "#",
                "image": "image/unitedshalomho.jpg"
            },
            "geometry": { "type": "Point", "coordinates": [125.00303, 11.23315] }
        }
    ]
};

// Define both tile configurations cleanly
const openStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
});

const satelliteMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles © Esri — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

// Initialize Map Engine centered around downtown footprint (Streets base layer active)
const map = L.map('map', { 
    zoomControl: true,
    layers: [openStreetMap] 
}).setView([11.2420, 125.0010], 13);

let geoJsonLayer;
let allMarkers = [];

// Expand/Collapse the Floating Layer Options Popup Box
function toggleLayerMenu(event) {
    event.stopPropagation();
    const menu = document.getElementById('layerPopupMenu');
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}

// Active layer swap management control engine
function switchBaseLayer(layerType) {
    const optOSM = document.getElementById('optOSM');
    const optSat = document.getElementById('optSatellite');
    const menu = document.getElementById('layerPopupMenu');

    if (layerType === 'osm') {
        if (!map.hasLayer(openStreetMap)) {
            map.removeLayer(satelliteMap);
            map.addLayer(openStreetMap);
        }
        optOSM.classList.add('active');
        optSat.classList.remove('active');
    } else if (layerType === 'satellite') {
        if (!map.hasLayer(satelliteMap)) {
            map.removeLayer(openStreetMap);
            map.addLayer(satelliteMap);
        }
        optSat.classList.add('active');
        optOSM.classList.remove('active');
    }
    menu.style.display = 'none';
}

function getFeatureKeyColor(category, ownership) {
    if (category === "Hospital") {
        return (ownership === "Public") ? "#0056b3" : "#8a2be2";
    }
    return "#656d78";
}

// Compute dynamic group categorization references
function computeLayerGroupKey(category, ownership) {
    if (category === "Hospital") {
        return (ownership === "Public") ? "Public Hospital" : "Private Hospital";
    }
    return category;
}

// Map Data Feature Engine Loader
function initMapFeatures() {
    allMarkers = [];
    
    geoJsonLayer = L.geoJSON(facilitiesData, {
        pointToLayer: function(feature, latlng) {
            const cat = feature.properties.category;
            const owner = feature.properties.ownership || "";
            const layerGroupKey = computeLayerGroupKey(cat, owner);
            const markerColor = getFeatureKeyColor(cat, owner);

            const marker = L.marker(latlng, {
                icon: L.divIcon({
                    className: 'destination-marker',
                    html: `<div class="destination-icon" style="background:${markerColor}; border: 2px solid #fff; box-shadow: 0 8px 18px rgba(15, 23, 42, 0.18);"><i class="fa-solid fa-location-dot"></i></div>`,
                    iconSize: [32, 40],
                    iconAnchor: [16, 40],
                    popupAnchor: [0, -32]
                })
            });

            // Marker Click Event to load Side Panel Details
            marker.on('click', function() {
                showFacilityDetails(feature.properties, markerColor, layerGroupKey);
            });

            const htmlPopup = `<div class="popup-card"><h3>${feature.properties.name}</h3><p>Selected on map.</p></div>`;
            marker.bindPopup(htmlPopup);
            
            allMarkers.push({
                name: feature.properties.name,
                computedCategory: layerGroupKey,
                markerInstance: marker,
                rawProperties: feature.properties,
                colorCode: markerColor
            });

            return marker;
        }
    }).addTo(map);
}

// Side Panel DOM Manipulation Control Handler
function showFacilityDetails(props, color, groupKey) {
    document.getElementById('defaultRightContent').style.display = 'none';
    document.getElementById('activeDetailsPanel').style.display = 'block';

    document.getElementById('facilityName').textContent = props.name;
    document.getElementById('facilityDescription').textContent = props.description;
    document.getElementById('facilityHours').textContent = props.hours || "Open 24 hours";
    document.getElementById('facilityPhone').textContent = props.phone || "Not Available";
    
    const webElement = document.getElementById('facilityWebsite');
    if(props.website && props.website !== "#") {
        webElement.href = props.website;
        webElement.textContent = "Visit Official Site";
        webElement.style.display = "inline";
    } else {
        webElement.style.display = "none";
        webElement.textContent = "Not Available";
    }

    const imgElement = document.getElementById('facilityImage');
    imgElement.src = props.image || "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop";

    const tagElement = document.getElementById('facilityTypeTag');
    tagElement.textContent = groupKey;
    tagElement.style.color = color;
    tagElement.style.borderLeft = `3px solid ${color}`;
    
    document.getElementById('facilityRating').innerHTML = `<i class="fa-solid fa-star"></i> ${props.rating || "N/A"}`;
}

function closeDetailsPanel() {
    document.getElementById('activeDetailsPanel').style.display = 'none';
    document.getElementById('defaultRightContent').style.display = 'block';
    map.closePopup();
}

// Layer checkbox toggles filter processor logic
function filterMapLayers() {
    const checkboxes = document.querySelectorAll('.layer-toggle');
    const checkedCategories = [];
    
    checkboxes.forEach(cb => {
        if(cb.checked) checkedCategories.push(cb.value);
    });

    const allCheckbox = document.getElementById('layer-all');
    allCheckbox.checked = (checkedCategories.length === checkboxes.length);

    allMarkers.forEach(item => {
        if(checkedCategories.includes(item.computedCategory)) {
            if(!map.hasLayer(item.markerInstance)) map.addLayer(item.markerInstance);
        } else {
            if(map.hasLayer(item.markerInstance)) map.removeLayer(item.markerInstance);
        }
    });
}

function toggleAllLayers(masterDispatcher) {
    const checkboxes = document.querySelectorAll('.layer-toggle');
    checkboxes.forEach(cb => cb.checked = masterDispatcher.checked);
    filterMapLayers();
}

// Sync Search Queries with Marker Selection & Side Panel Open Event
function searchLocation() {
    const queryStr = document.getElementById("searchInput").value.trim().toLowerCase();
    if(!queryStr) return;

    let targetMatch = allMarkers.find(item => item.name.toLowerCase().includes(queryStr));

    if(targetMatch) {
        const marker = targetMatch.markerInstance;
        const latLng = marker.getLatLng();
        
        const checkboxes = document.querySelectorAll('.layer-toggle');
        checkboxes.forEach(cb => {
            if(cb.value === targetMatch.computedCategory && !cb.checked) {
                cb.checked = true;
                filterMapLayers();
            }
        });

        map.setView(latLng, 16);
        marker.openPopup();
        
        showFacilityDetails(targetMatch.rawProperties, targetMatch.colorCode, targetMatch.computedCategory);
    } else {
        alert("Location facility not found.");
    }
}

// Auto Suggestion Input Listeners
document.getElementById('searchInput').addEventListener('input', function(e) {
    const value = e.target.value.trim().toLowerCase();
    const sugContainer = document.getElementById('suggestions');
    sugContainer.innerHTML = '';

    if(!value) {
        sugContainer.style.display = 'none';
        return;
    }

    const matches = allMarkers.filter(item => item.name.toLowerCase().includes(value));

    if(matches.length > 0) {
        sugContainer.style.display = 'block';
        matches.forEach(match => {
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            div.textContent = match.name;
            div.addEventListener('click', () => {
                document.getElementById('searchInput').value = match.name;
                sugContainer.style.display = 'none';
                searchLocation();
            });
            sugContainer.appendChild(div);
        });
    } else {
        sugContainer.style.display = 'none';
    }
});

// Click anywhere else handles automatically closing the open dropdown elements cleanly
document.addEventListener('click', function(e) {
    if(!e.target.closest('.search-box') && !e.target.closest('#suggestions')) {
        document.getElementById('suggestions').style.display = 'none';
    }
    
    const menu = document.getElementById('layerPopupMenu');
    const container = document.getElementById('customLayerControl');
    if (menu && container && !container.contains(e.target)) {
        menu.style.display = 'none';
    }
});

window.onload = () => {
    initMapFeatures();
};