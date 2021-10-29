import React from 'react';
import Place from './Place/Place';

const Places = () => {
    return (
        <section>
            <h1 className="text-5xl text-center text-green-600 font-extrabold">Places to Visit</h1>
            <div className="container flex flex-wrap mx-auto"
            >{
                    places.map(place => <Place key={place.placeID} place={place} />)
                }</div>
        </section>
    );
};

export default Places;

const places = [
    {
        placeID: 1,
        placeName: "Amazing China",
        shortDescription: "The grand story of China features a great wall, a forbidden city, and a few thousand Terracotta warriors. Settings include the sci-fi skyline of Shanghai, the jutting peaks of Zhangjiajie, and the tropical beaches of Hainan, but the tale of this ancient kingdom began long ago.",
        description: "As the world leader in travel experiences since 1947, we connect you to the real China in a way like no other. With 14 countries and the ocean touching its borders, the vast lands of China hold many opportunities for influence. Yet the country remains unique and complex, rotating to the hum of age-old customs and long-held beliefs. The most populous country in the world, we'll wander the streets of China with wide eyes and admiration, encountering people that have overcome political and social complexities that continue despite the country's remarkable economic power. We'll move from the Temple of Heaven to the Great Mosque of Xi'an to understand China's religious roots, before unwinding with a session of foot reflexology under the guise of participating in the local culture. From the Great Wall to the small villages, this country will delight with pinch-me moments and encounters that will reshape the way you think about life on Earth. City after city, dumpling after dumpling, China will stir the senses. Travel with us and unlock the infinite possibilities thanks to our exclusive Trafalgar Highlights.",
        features: [
            "Air fares",
            "4 Nights Hotel Accomodation",
            "Tour Guide",
            "Entrance Fees",
            "All transportation in destination location"
        ],
        cost: "13,538",
        capitalCity: "Beijing",
        country: "China",
        languages: [
            "Mandarin",
            "Cantonese",
            "Shanghainese"
        ],
        currency: "Chinese yuan",
        duration: 8,
        placePHOTO: "/images/homepage/places/china.jpg"
    },
    {
        placeID: 2,
        placeName: "Wonderful Paris",
        shortDescription: "Nowhere else on earth makes the heart swoon like the mention of Paris. The city lures with its magnificent art, architecture, culture, and cuisine, but there’s also a quieter magic waiting to be explored: the quaint cobbled lanes, the sweet patisseries around the corner, and the cozy little bistros that beckon with a glass of Beaujolais.",
        description: "As the world leader in travel experiences since 1947, we connect you to the real France in a way like no other. From the very first day, it will be easy to see why France attracts more visitors than any other country on Earth. An intoxicating blend of sweeping vineyards, romantic cities and quaint coastal villages, a French trip with Trafalgar can be as varied as a Bordeaux wine menu. We fill your tour of France with the many highlights of this country, taking in the soaring 8th century church of Mont St. Michel and saving time for the authentic scents at Fragonard Parfumerie. Back in Paris, we catch the iconic Moulin Rouge and devote an entire day to the breathtaking enormity of The Louvre museum. Live out the fairytale of an Audrey Hepburn film and experience an international reputation for sophisticated art, food and culture. With us, France will be every bit as wonderful as you dream it to be. Travel with us and unlock the infinite possibilities thanks to our exclusive Trafalgar Highlights.",
        features: [
            "Air fares",
            "4 Nights Hotel Accomodation",
            "Tour Guide",
            "Entrance Fees",
            "All transportation in destination location"
        ],
        cost: "5,328",
        capitalCity: "Paris",
        country: "France",
        languages: [
            "French"
        ],
        currency: "Euro",
        duration: 9,
        placePHOTO: "/images/homepage/places/paris.jpg"
    },
    {
        placeID: 3,
        placeName: "Fairway Sydney",
        shortDescription: "The earliest structures in the colony were built to the bare minimum of standards. Upon his appointment, Governor Lachlan Macquarie set ambitious targets for the architectural design of new construction projects. The city now has a world heritage listed building, several national heritage listed buildings, and dozens of Commonwealth heritage listed buildings as evidence of the survival of Macquarie's ideals.",
        description: "As the world leader in travel experiences since 1947, we connect you to the real Australia in a way like no other. Between the friendly nod of a 'g' day' and the inviting climate, Australia has gained a reputation as a warm and hospitable country; a reputation that it exceeds without a fuss. Together we'll move from the iconic to the unexpected, sailing under the gargantuan Sydney Harbour Bridge and hearing stories from the oldest civilisation on earth. Experimenting with Vegemite and falling in love with Tim Tams, this country will delight us even during the quiet moments in between adventure. It might take a lengthy plane journey to get here from many parts of the world, but you will very quickly realise why so many travellers make an effort. Perhaps when toasting the sunset at Uluru or watching penguins waddle out of the ocean after a day of fishing. Travel with us and unlock the infinite possibilities thanks to our exclusive Trafalgar Highlights. If you’re travelling again soon, you can check what travel restrictions are in place in Australia.",
        features: [
            "Beautifully illustrated souvenir map",
            "4 Nights Hotel Accomodation",
            "Tour Guide",
            "Entrance Fees",
            "All transportation in destination location"
        ],
        cost: "839",
        capitalCity: "Canberra",
        country: "Australia",
        languages: [
            "English"
        ],
        currency: "Australian Dollar",
        duration: 14,
        placePHOTO: "/images/homepage/places/australia.jpg"
    },
    {
        placeID: 4,
        placeName: "Sunny Barcelona",
        shortDescription: "The deep blue Mediterranean beckons. Sun-drenched beaches make a fine backdrop to a jog, bike ride or long leisurely stroll along the seaside – followed by a refreshing dip. You can also enjoy the view from out on the water while kayaking, stand-up paddleboarding or taking it easy on a sunset cruise.",
        description: "As the world leader in travel experiences since 1947, we connect you to the real Spain in a way like no other. A country of ripe vineyards, endless coastlines, rugged mountain ranges and historic villages, we will venture into the spirit of Spain uncovering the heritage of its luscious surroundings. This culture means more than siestas and sangria, proved as we move from monument to museum to the beat of flamenco. In Madrid, we’ll discover the meeting point of old and new via charming alleyways and taverns. Things to do in Barcelona will delight us with Gaudi architecture whilst the mountain of Montserrat proves there is magic to be found beyond Spain’s bountiful cities. Between the map points, we will discover this country’s culinary delights and understand how they form part of the cultural fabric. Fierce passion, national pride and reverence for tradition seep through every inch of this intriguing land. The lure of Spain tours is enormously strong and will stay with you long after your visit. Travel with us and unlock the infinite possibilities thanks to our exclusive Trafalgar Highlights.",
        features: [
            "Air fares",
            "4 Nights Hotel Accomodation",
            "Tour Guide",
            "Entrance tickets to monuments and museums",
            "All transportation in destination location"
        ],
        cost: "11,538",
        capitalCity: "Madrid",
        country: "Spain",
        languages: [
            "Spanish",
            "Catalan"
        ],
        currency: "Euro",
        duration: 11,
        placePHOTO: "/images/homepage/places/barcelona.jpg"
    },
    {
        placeID: 5,
        placeName: "Beautiful Budapest",
        shortDescription: "Budapest is paradise for explorers. Keep your senses primed and you'll discover something wonderful at every turn. Budapest’s beauty is not all God given; humankind has played a role in shaping this pretty face too. Architecturally, the city is a treasure trove, with enough baroque, neoclassical, Eclectic and art nouveau buildings to satisfy everyone. ",
        description: "The Castle District encompasses Castle Hill (Várhegy) – nerve centre of Budapest’s history and packed with many of the capital’s most important museums and other attractions – as well as ground-level Víziváros (Watertown). What the latter lacks in sights it makes up for in excellent restaurants, many of them around Széll Kálmán tér, a major transport hub and the centre of urban Buda.",
        features: [
            "Air fares",
            "4 Nights Hotel Accomodation",
            "Tour Guide",
            "Entrance Fees",
            "All transportation in destination location"
        ],
        cost: "15,238",
        capitalCity: "Budapest",
        country: "Hungary",
        languages: [
            "Hungarian"
        ],
        currency: "Hungary forint",
        duration: 9,
        placePHOTO: "/images/homepage/places/budapest.jpg"
    },
    {
        placeID: 6,
        placeName: "Venice in Italy",
        shortDescription: "Garden islands and lagoon aquaculture yield speciality produce and seafood you won’t find elsewhere – all highlighted in inventive Venetian cuisine, with tantalising traces of ancient spice routes. The city knows how to put on a royal spread, as France’s King Henry III once found out when faced with 1200 dishes and 200 bonbons.",
        description: "Venice is an enchanting city that casts visitors under an intoxicating spell. It’s dreamy and romantic, with an undercurrent of mystery and drama. And while Carnival is only once a year, its mood is present year-round. The Grand Canal is the center of activity, with gondoliers singing to the passengers in their boats. The magnificent Piazza Sam Marco is another must-see hub. Along the winding streets you’ll find stylish cafes and gelaterias, souvenir shops and small businesses, plus Renaissance palaces and Gothic churches. After you've climbed the Campanille and visited the Gallerie dell Accademia, stroll through the surrounding neighborhoods, where locals eat cicchitti and drink their vino in unfussy bars and restaurants.",
        features: [
            "Air fares",
            "4 Nights Hotel Accomodation",
            "Tour Guide",
            "Entrance Fees",
            "All transportation in destination location"
        ],
        cost: "738",
        capitalCity: "Rome",
        languages: [
            "Italian"
        ],
        currency: "Euro",
        duration: 7,
        placePHOTO: "/images/homepage/places/venice.jpg"
    }
]