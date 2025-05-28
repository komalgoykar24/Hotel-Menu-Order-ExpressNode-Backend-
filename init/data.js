const sampleData = [
    {
        name: "Butter Chicken",
        description: "Creamy and rich chicken curry cooked with butter and Indian spices.",
        price: 350,
        image: "https://plus.unsplash.com/premium_photo-1661419883163-bb4df1c10109?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnV0dGVyJTIwY2hpa2VufGVufDB8fDB8fHww",
        isAvailable: "true",
        rating: 4.8
    },
    {
        name: "Paneer Butter Masala",
        description: "Rich and creamy paneer curry with buttery flavor and spices.",
        price: 280,
        image: "https://media.istockphoto.com/id/1809097275/photo/delicious-coconut-tomato-fish-curry-with-asian-spices-and-chili-pepper-close-up-on-a-plate.jpg?s=612x612&w=0&k=20&c=tXYIZZQmHyi61DHJahy2V3yfXCMbzSnT37PV6ovKVfw=",
        isAvailable: "true",
        rating: 4.7
    },
    {
        name: "Chole Bhature",
        description: "Spicy chickpeas curry served with fluffy fried bread.",
        price: 150,
        image: "https://media.istockphoto.com/id/668102878/photo/bhindi-masala-ladies-finger-curry-potato-beans-curry-with-chapati.jpg?s=612x612&w=0&k=20&c=IyWs9rUMMsMM2JModF65MAoHfUs95Vmge1vbrHQsnxE=",
        isAvailable: "true",
        rating: 4.5
    },
    {
        name: "Biryani",
        description: "Aromatic basmati rice cooked with spices and choice of chicken, mutton, or vegetables.",
        price: 300,
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D",
        isAvailable: "true",
        rating: 4.9
    },
    {
        name: "Masala Dosa",
        description: "Crispy rice crepe filled with spiced potato masala, served with chutneys and sambar.",
        price: 120,
        image: "https://media.istockphoto.com/id/1199803693/photo/indian-foods-on-the-table.jpg?s=612x612&w=0&k=20&c=A9EjRmVtzOU7FiZKfAjqH7JAa8_ApZXQoh8zQqdN0vE=",
        isAvailable: "true",
        rating: 4.6
    },
    {
        name: "Rajma Chawal",
        description: "Comfort food of red kidney beans curry served with steamed rice.",
        price: 180,
        image: "https://media.istockphoto.com/id/453691271/photo/chana-masala-with-rice.jpg?s=612x612&w=0&k=20&c=AGLNQHKRYGXICDSAoNXFkcmvMZrddx0K7rv1KEsoGbs=",
        isAvailable: "true",
        rating: 4.7
    },
    {
        name: "Tandoori Chicken",
        description: "Chicken marinated in yogurt and spices, grilled to perfection.",
        price: 400,
        image: "https://media.istockphoto.com/id/1421210673/photo/tandoori-chicken-is-a-popular-roast-chicken-recipe-from-india-tandoor-is-a-traditional-wood.jpg?s=612x612&w=0&k=20&c=rIxwXOWUO-AuE5lIJ--zz_6Q-N6Npky4hpyQDyP3BDU=",
        isAvailable: "true",
        rating: 4.8
    },
    {
        name: "Aloo Paratha",
        description: "Whole wheat flatbread stuffed with spiced mashed potatoes.",
        price: 100,
        image: "https://media.istockphoto.com/id/1129693906/photo/lahmacun-turkish-dishes-turkish-pizzas-lemon-parsley.jpg?s=612x612&w=0&k=20&c=xeTKpT25Y8F47oAP8aXZ_KR20JQIANh0j557tefVq_Y=",
        isAvailable: "true",
        rating: 4.5
    },
    {
        name: "Samosa",
        description: "Deep-fried pastry filled with spiced potatoes and peas.",
        price: 30,
        image: "https://plus.unsplash.com/premium_photo-1695297516676-04a259917c03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2Ftb3NhfGVufDB8fDB8fHww",
        isAvailable: "true",
        rating: 4.6
    },
    {
        name: "Gulab Jamun",
        description: "Soft milk-based dumplings soaked in sugar syrup.",
        price: 80,
        image: "https://media.istockphoto.com/id/1188000786/photo/gulab-jamun-in-bowl-on-wooden-background-indian-dessert-or-sweet-dish.webp?a=1&b=1&s=612x612&w=0&k=20&c=4kVDa_BP4pypOSvfDSL2mmLNO3SYdoAs1VG-qi4WAtI=",
        isAvailable: "true",
        rating: 4.9
    },
    {
        name: "Palak Paneer",
        description: "Cottage cheese cooked in a rich spinach gravy.",
        price: 250,
        image: "https://media.istockphoto.com/id/922785036/photo/palak-panner-indian-recipe-food-on-wood.jpg?s=612x612&w=0&k=20&c=f6AlpL_x9pWYMwky6udloVj7UELFUXUtfFo7U4f-_t4=",
        isAvailable: "true",
        rating: 4.7
    },
    {
        name: "Pav Bhaji",
        description: "Spiced mashed vegetable curry served with buttered bread rolls.",
        price: 150,
        image: "https://media.istockphoto.com/id/1154426462/photo/indian-food-paav-bhaji-from-vegetables-with-bread-onion-and-butter.jpg?s=612x612&w=0&k=20&c=XCurSMCNsZdtiVawQoBr8ZZu9UkzG89VT6cl3pnBUdk=",
        isAvailable: "true",
        rating: 4.8
    },
    {
        name: "Dhokla",
        description: "Soft and fluffy steamed savory cake made from gram flour.",
        price: 80,
        image: "https://media.istockphoto.com/id/2154971502/photo/famous-gujrati-snack-dhokla-made-with-gram-flour-and-sugar-syrup-decorated-with-mint-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=MacEDJlATPi0-ztKaDwBRJxq4k9KPKI6MhZwEoZdQeg=",
        isAvailable: "true",
        rating: 4.6
    },
    {
        name: "Vada Pav",
        description: "Mumbai's famous burger with a spicy potato filling.",
        price: 50,
        image: "https://media.istockphoto.com/id/1329213718/photo/vada-pav.webp?a=1&b=1&s=612x612&w=0&k=20&c=nFSSNL37Rtl6brmMOMiBfaZy0itNgBEO2dnK5I1FlGU=",
        isAvailable: "true",
        rating: 4.5
    },
    {
        name: "Mutton Rogan Josh",
        description: "Aromatic lamb curry cooked with yogurt and Kashmiri spices.",
        price: 450,
        image: "https://media.istockphoto.com/id/160621353/photo/goan-pork-vindaloo.jpg?s=612x612&w=0&k=20&c=LLf3q7Roo-lw3Ke6PDGhbI1EuJze3UPFVzw9EQZPDUQ=",
        isAvailable: "true",
        rating: 4.9
    },
    {
        name: "Kachi Dabeli",
        description: "A spicy and tangy Gujarati snack filled with mashed potatoes, peanuts, and chutneys in a soft bun.",
        price: 50,
        image: "https://media.istockphoto.com/id/1388825384/photo/90-degree-angle-shot-photo-dabeli-is-an-indian-snack-item-served-with-peanut-and-sev-bhujia.webp?a=1&b=1&s=612x612&w=0&k=20&c=PC0lhda_eFeZ5Vo9p7HKfMM5iOmhLTRyb6OZ_2JKTlA=",
        isAvailable: "true",
        rating: 4.5
    },
    {
        name: "Pani Puri",
        description: "Crispy puris filled with tangy, spicy, and flavorful water, mashed potatoes, and chickpeas.",
        price: 40,
        image: "https://media.istockphoto.com/id/1314329942/photo/goal-gappa-or-pani-puri.webp?a=1&b=1&s=612x612&w=0&k=20&c=gipl8gjcid4yNp9cIjVEvhyAFdlFyplwGXYgRv0jdoI=", 
           isAvailable: "true",
        rating: 4.8
    },
    {
        name: "Veg Maratha",
        description: "A rich and spicy Maharashtrian curry made with mixed vegetables and flavorful spices.",
        price: 180,
        image: "https://media.istockphoto.com/id/987228590/photo/pure-veg-indian-cheese-cottage-recipe-paneer-butter-masala.jpg?s=612x612&w=0&k=20&c=SXVB5RPt7KZ-zYkRGEksTl7TonvJWEkjjQSxlxTWT-M=",    
        isAvailable: "true",
        rating: 4.6
    },
    {
        name: "Chinese Manchurian",
        description: "Crispy vegetable or chicken balls tossed in a spicy and tangy Manchurian sauce.",
        price: 160,
        image: "https://media.istockphoto.com/id/1334115358/photo/cabbage-manchurian.webp?a=1&b=1&s=612x612&w=0&k=20&c=7Cc0h0HIZgyKq3qEMX5v1DjDYrHAqTnOqHWc0l-M33I=",
        isAvailable: "true",
        rating: 4.7
    },
    {
        name: "Soup",
        description: "A warm and comforting bowl of delicious soup made with fresh ingredients and flavorful spices.",
        price: 120,
        image:"https://media.istockphoto.com/id/920322330/photo/mushroom-delicious-soup.jpg?s=612x612&w=0&k=20&c=bE464kBANrsFhdh6somrkM4WKya-9EwHZw9-bzJ995s=",
        isAvailable: "true",
        rating: 4.5
    },
    {
        name:"Noodles",
        description: "Delicious stir-fried noodles cooked with fresh vegetables, sauces, and spices.",
        price: 140,
        image: "https://media.istockphoto.com/id/1215178290/photo/stir-fry-noodles-with-vegetables-and-beef-in-black-bowl-slate-background-close-up.jpg?s=612x612&w=0&k=20&c=_svdOGLzJ52q1Mf_k6v5u5Xc5iRkH0DIYrwmrfKTaJ4=",
        isAvailable: "true",
        rating: 4.6
    }
];

module.exports={data:sampleData};