import cairns from "./images/cairns.jpg"
import green_island from "./images/green-island1.jpg"
import london from "./images/london-night.jpg"
import losAngeles from "./images/losAngeles.jpg"
import monaco from "./images/monaco.jpg"
import bankok from "./images/bankok.jpg"
import boraBora from "./images/bora-bora.jpg"
import hobbiton from "./images/hobbiton.jpg"
import kyoto from "./images/kyoto.jpg"
import paris from "./images/paris.jpg"
import rapaNui from "./images/rapa-nui.jpg"
import rioDeJaneiro from "./images/rio-de-janeiro.jpg"
import serengeti from "./images/serengeti.jpg"
import singapore from "./images/singapore.jpg"
import tuvalu from "./images/tuvalu.jpg"
import sanDiego from "./images/sanDiego-night.jpg"



export const data = [
    { 
        id: "1",
        title: "Cairns",
        location: "AUSTRALIA",
        googleMapsUrl: "https://www.google.it/maps/@-16.9280993,145.7586302,12.25z?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D",
        description : `Cairns is a laid-back tropical gateway where rainforest meets reef
                       — a relaxed coastal city that travellers use to access the Great Barrier Reef
                       and nearby World-Heritage rainforests, while enjoying markets, cafés and
                       outdoor activities. It’s an easy base for reef trips, river cruises and jungle`,
        imageUrl: cairns,
        visited : true
    },
    { 
        id: "2",
        title: "Green island",
        location: "AUSTRALIA",
        googleMapsUrl: "https://www.google.it/maps/@-16.7548376,145.9825537,13.25z?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D",
        description : `Green Island is a small coral cay off Cairns within the Great Barrier Reef
                       Marine Park, a popular day-trip island that’s walkable in under an hour and
                       prized for snorkeling, glass-bottom boat tours and sheltered sandy beaches.
                       It’s a compact taste of reef life and tropical island scenery close to the mainland.`,
        imageUrl: green_island,
        visited : true
    },
    { 
        id: "3",
        title: "London",
        location: "UK",
        googleMapsUrl: "https://www.google.it/maps/@51.4983346,-0.1008124,12.75z?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D",
        description : `London is the capital of the United Kingdom, straddling the River Thames with
                       a mix of ancient sites and modern life — think grand museums, leafy parks and
                       iconic landmarks that have shaped centuries of history. It’s a busy, endlessly
                       discoverable city where markets, theatres and double-decker buses sit alongside
                       world-class galleries.`,
        imageUrl: london,
        visited : true
    },
    { 
        id: "4",
        title: "Los Angeles",
        location: "USA",
        googleMapsUrl: "https://www.google.it/maps/@33.9523118,-118.0552488,9.75z?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D",
        description : `Los Angeles is a sprawling Pacific-coast city known for its sunny beaches, varied 
                       neighborhoods and lively food and arts scenes; from bustling waterfront piers to
                       tree-lined residential districts, the city blends outdoor life with a huge range
                       of cultural experiences. It’s a place of neighborhoods — each with its own character,
                       markets and local hangouts.`,
        imageUrl: losAngeles,
        visited : true
    },
    { 
        id: "5",
        title: "Monaco",
        location: "MONACO",
        googleMapsUrl: "https://www.google.it/maps/@43.7325279,7.4356173,13z?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D",
        description : `Monaco is a tiny sovereign city-state on the French Riviera, a compact
                       patch of Mediterranean coastline known for its dramatic harbor, elegant
                       promenades and dense, glamorous urban feel. Despite its small size it mixes
                       princely residences, museums and a bustling marina set against steep hills.`,
        imageUrl: monaco,
        visited : true
    },
    { 
        id: "6",
        title: "San Diego",
        location: "USA",
        googleMapsUrl: "https://www.google.it/maps/@32.7407313,-117.0954271,11z?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D",
        description : `San Diego basks in a mild, sun-soaked climate and is famed
                       for its family-friendly attractions, seaside promenades and Balboa Park’s museums and gardens
                       — the San Diego Zoo sits right in the heart of it. The city offers relaxed beach days,
                       lively waterfront neighborhoods and a strong outdoor lifestyle`,
        imageUrl: sanDiego,
        visited : true
    },
    { 
        id: "7",
        title: "Singapore",
        location: "SINGAPORE",
        googleMapsUrl: "https://www.google.it/maps/@1.2935061,103.9158693,9.75z?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D",
        description : `A compact, cosmopolitan island-state where futuristic architecture meets lush
                       tropical parks. Marina Bay’s skyline, Gardens by the Bay and vibrant hawker centres
                       showcase a mix of world-class dining, multicultural neighbourhoods and efficient
                       city planning — a tidy, green urban hub that balances modern design with outdoor life.`,
        imageUrl: singapore,
        visited : false
    },
    { 
        id: "8",
        title: "Tuvalu",
        location: "TUVALU",
        googleMapsUrl: "https://www.google.it/maps/@-8.5023875,179.147874,10.25z?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D",
        description : `Tiny and remote, Tuvalu is a chain of low coral atolls in the central Pacific, home
                       to close-knit island communities and a slow rhythm of life. Its sandy shores, traditional
                       culture and fragile environment make Tuvalu quietly beautiful — also vulnerable to sea-level
                       rise and prized for its remoteness.`,
        imageUrl: tuvalu,
        visited : false
    },
    { 
        id: "9",
        title: "Bora bora",
        location: "French polinesia",
        googleMapsUrl: "https://www.google.it/maps/@-16.4573274,-151.6990109,9.75z?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D",
        description : `A volcanic island ringed by a turquoise lagoon and coral reef, Bora Bora is famed
                       for its overwater bungalows and the dramatic silhouette of Mount Otemanu. It’s
                       a picture-perfect retreat for snorkeling, lagoon cruises and relaxed luxury
                       set against calm, crystal-clear South Pacific waters.`,
        imageUrl: boraBora,
        visited : false
    },
    { 
        id: "10",
        title: "Rio de Janeiro",
        location: "Brasil",
        googleMapsUrl: "https://www.google.it/maps/@-22.7695729,-43.0960948,9.25z?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D",
        description : `A city of dramatic natural settings: sweeping beaches, forested mountains and lively
                       neighbourhoods. Rio pulses with samba, carnival energy and iconic landmarks such
                       as Christ the Redeemer and Sugarloaf Mountain, while its coastline, music and street
                       life create a joyous, sun-drenched atmosphere.`,
        imageUrl: rioDeJaneiro,
        visited : false
    },
    { 
        id: "11",
        title: "Hobbiton",
        location: "New Zealand",
        googleMapsUrl: "https://www.google.it/maps/@-37.8740613,175.6877046,15z?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D",
        description : `The Matamata movie set brings Tolkien’s Shire to life: round-doored hobbit holes,
                       manicured lawns and rustic props on a working sheep farm. Guided tours reveal film
                       craftsmanship and pastoral charm, making Hobbiton a whimsical, photogenic stop for
                       fans and curious travellers alike.`,
        imageUrl: hobbiton,
        visited : false
    },
    { 
        id: "12",
        title: "Paris",
        location: "France",
        googleMapsUrl: "https://www.google.it/maps/@48.823513,2.5296867,9.25z?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D",
        description : `An elegant capital of art, gastronomy and history where the Seine threads past
                       grand museums, tree-lined boulevards and the Eiffel Tower. Paris blends timeless
                       cafés, world-class galleries and neighbourhood markets into a romantic, walkable
                       city full of cultural layers and everyday charm.`,
        imageUrl: paris,
        visited : false
    },
    { 
        id: "13",
        title: "Kyoto",
        location: "JAPAN",
        googleMapsUrl: "https://www.google.it/maps/@34.8660787,136.0840285,9.46z?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D",
        description : `Japan’s cultural heartland of temples, shrines and traditional neighbourhoods.
                       Kyoto is known for its serene gardens, wooden teahouses, seasonal beauty and
                       districts like Gion where geisha culture and historic streets quietly endure —
                       ideal for contemplative walks and heritage-rich experiences.`,
        imageUrl: kyoto,
        visited : false
    },
    { 
        id: "14",
        title: "Bangkok",
        location: "THAILAND",
        googleMapsUrl: "https://www.google.it/maps/@13.9171931,101.0984332,8.46z?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D",
        description : `A bustling, sensory city of gilded temples, lively street food, floating markets and
                       neon neighbourhoods. Bangkok combines centuries-old shrines and royal palaces with
                       frenetic market life and a thriving contemporary scene — a place of contrasts, rich
                       flavours and nonstop urban energy.`,
        imageUrl: bankok,
        visited : false
    },
    { 
        id: "15",
        title: "Serengeti",
        location: "TANZANIA",
        googleMapsUrl: "https://www.google.it/maps/@-2.8676038,35.427535,7.75z?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D",
        description : `Vast savannah plains famed for the Great Migration, where millions of wildebeest,
                       zebras and gazelles sweep across open landscapes. The Serengeti’s big-game sightings,
                       dramatic river crossings and endless horizons make it one of Africa’s most iconic wildlife
                       destinations.`,
        imageUrl: serengeti,
        visited : false
    },
    { 
        id: "16",
        title: "Rapa nui",
        location: "CHILE",
        googleMapsUrl: "https://www.google.it/maps/@-27.0283018,-109.236248,9.25z?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D",
        description : `Remote and mysterious, Rapa Nui is famed for its moai — monumental stone statues
                       scattered across volcanic landscapes. The island’s Polynesian heritage,
                       archaeological sites and windswept coastal vistas create a singular, haunting
                       cultural landscape far from mainland Chile.`,
        imageUrl: rapaNui,
        visited : false
    }
]