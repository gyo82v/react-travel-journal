import cairns from "./images/cairns.jpg"
import green_island from "./images/green-island1.jpg"
import london from "./images/london-night.jpg"
import losAngeles from "./images/losAngeles.jpg"
import monaco from "./images/monaco.jpg"
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
        location: "USA",
        googleMapsUrl: "https://www.google.it/maps/@32.7407313,-117.0954271,11z?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D",
        description : `San Diego basks in a mild, sun-soaked climate and is famed
                       for its family-friendly attractions, seaside promenades and Balboa Park’s museums and gardens
                       — the San Diego Zoo sits right in the heart of it. The city offers relaxed beach days,
                       lively waterfront neighborhoods and a strong outdoor lifestyle`,
        imageUrl: sanDiego,
        visited : false
    }
]