const itemList = [
    {
        id:'01',
        image:'/Images/camera.png',
        company:'Canon',
        itmeName:'Canon EOS 4500 Zoom Lens',
        return_period:14,
        price:{
            currentPrice: 23200,
            originalPrice: 40000,
            discount: 42,
        },
        rating:{
            stars: 4.2,
            noOfReviews:'1.45k',
        }
    },
    {
        id:'02',
        image:'/Images/electronics-removebg-preview.png',
        company:'Dell',
        itmeName:'Electroics',
        return_period:12,
        price:{
            currentPrice: 43450,
            originalPrice: 79000,
            discount: 45,
        },
        rating:{
            stars: 4.0,
            noOfReviews:'2.8k',
        }
    },
    {
        id:'03',
        image:'/Images/mobile.png',
        company:'Apple',
        itmeName:'Iphone 13 pro Max',
        return_period:15,
        price:{
            currentPrice: 97949,
            originalPrice: 130599,
            discount: 25,
        },
        rating:{
            stars: 4.4,
            noOfReviews:'4.5k',
        }
    },
    {
        id:'04',
        image:'/Images/montor.png',
        company:'Zebronics',
        itmeName:'Montor EOS 4500 4k',
        return_period:10,
        price:{
            currentPrice: 10140,
            originalPrice: 12999,
            discount: 22,
        },
        rating:{
            stars: 4.2,
            noOfReviews:'1.5k',
        }
    },
    {
        id:'05',
        image:'/Images/powerbank.png',
        company:'Redmi',
        itmeName:'Power Bank 15000 mAh',
        return_period:7,
        price:{
            currentPrice: 3400,
            originalPrice: 4999,
            discount: 32,
        },
        rating:{
            stars: 4.2,
            noOfReviews:'1.4k',
        }
    },
    {
        id:'06',
        image:'/Images/printer.jpg',
        company:'HP',
        itmeName:'Leser 4300 CS Priter',
        return_period:15,
        price:{
            currentPrice: 17000,
            originalPrice: 20000,
            discount: 15,
        },
        rating:{
            stars: 4.4,
            noOfReviews:'1.8k',
        }
    },
    {
        id:'07',
        image:'/Images/trimmer.webp',
        company:'Philips',
        itmeName:'Substitue EOS Trimmer',
        return_period:10,
        price:{
            currentPrice: 804,
            originalPrice: 1199,
            discount: 33,
        },
        rating:{
            stars: 4.1,
            noOfReviews:'1.1k',
        }
    },
    {
        id:'08',
        image:'/Images/trimmer.png',
        company:'Tefals',
        itmeName:'Tefals 35 EOS Trimmer',
        return_period:7,
        price:{
            currentPrice: 850,
            originalPrice: 999,
            discount: 15,
        },
        rating:{
            stars: 3.9,
            noOfReviews:'0.92k',
        }
    },
    {
        id:'09',
        image:'/Images/gym.png',
        company:'Tata',
        itmeName:'Hole gym kit 7',
        return_period:10,
        price:{
            currentPrice: 1725,
            originalPrice: 2299,
            discount: 25,
        },
        rating:{
            stars: 4.2,
            noOfReviews:'1.43k',
        }
    },
    {
        id:'10',
        image:'/Images/string_instrument.png',
        company:'Devil',
        itmeName:'String instrument premium',
        return_period:15,
        price:{
            currentPrice: 4500,
            originalPrice: 5999,
            discount: 25,
        },
        rating:{
            stars: 4.4,
            noOfReviews:'1.9k',
        }
    },
    {
        id:'11',
        image:'/Images/table.png',
        company:'Bazaz',
        itmeName:'Meeting table with set of 4 chairs',
        return_period:15,
        price:{
            currentPrice: 13000,
            originalPrice: 19999,
            discount: 35,
        },
        rating:{
            stars: 4.3,
            noOfReviews:'1.15k',
        }
    },
    {
        id:'12',
        image:'/Images/furniture-removebg-preview.png',
        company:'Hamour',
        itmeName:'Maharaja chair yellow',
        return_period:7,
        price:{
            currentPrice: 5850,
            originalPrice: 8999,
            discount: 35,
        },
        rating:{
            stars: 4.4,
            noOfReviews:'2.1k',
        }
    },
    {
        id:'13',
        image:'/Images/bike-removebg-preview.png',
        company:'Hero',
        itmeName:'Karizma 350 cc',
        return_period:10,
        price:{
            currentPrice: 112500,
            originalPrice: 150000,
            discount: 25,
        },
        rating:{
            stars: 4.4,
            noOfReviews:'3.1k',
        }
    },
    {
        id:'14',
        image:'/Images/cycle.png',
        company:'Hero',
        itmeName:'Hero sprint renzar cycle',
        return_period:10,
        price:{
            currentPrice: 5625,
            originalPrice: 7499,
            discount: 25,
        },
        rating:{
            stars: 4.3,
            noOfReviews:'15.2k',
        }
    },
    {
        id:'15',
        image:'/Images/faishion-removebg-preview.png',
        company:'Sewal',
        itmeName:'Faishion hot cloths',
        return_period:7,
        price:{
            currentPrice: 1560,
            originalPrice: 1999,
            discount: 22,
        },
        rating:{
            stars: 4.4,
            noOfReviews:'14.3k',
        }
    },
    
    {
        id:'16',
        image:'/Images/toys-removebg-preview.png',
        company:'Hero toyes',
        itmeName:'Teddy with set of multiple toys',
        return_period:12,
        price:{
            currentPrice: 819,
            originalPrice: 999,
            discount: 18,
        },
        rating:{
            stars: 4.2,
            noOfReviews:'1.3k',
        }
    },
    {
        id:'17',
        image:'/Images/butter.png',
        company:'Sazz foods',
        itmeName:'Peanuts butter 340 g',
        return_period:2,
        price:{
            currentPrice: 432,
            originalPrice: 599,
            discount: 28,
        },
        rating:{
            stars: 4.2,
            noOfReviews:'2.3k',
        }
    },
    {
        id:'18',
        image:'/Images/coffee.png',
        company:'NESCAFE',
        itmeName:'Nescafe classico coffee 100g',
        return_period:7,
        price:{
            currentPrice: 225,
            originalPrice: 299,
            discount: 25,
        },
        rating:{
            stars: 4.4,
            noOfReviews:'1.9k',
        }
    },
    {
        id:'19',
        image:'/Images/Dry-Fruit- (1).png',
        company:'Rostaa gourmet',
        itmeName:'Walnuts 200g',
        return_period:5,
        price:{
            currentPrice: 195,
            originalPrice: 259,
            discount: 25,
        },
        rating:{
            stars: 4.2,
            noOfReviews:'2.1k',
        }
    },
    {
        id:'20',
        image:'/Images/dry_fruits.avif',
        company:'Notlih',
        itmeName:'Dry fruits almond 200g',
        return_period:14,
        price:{
            currentPrice: 213,
            originalPrice: 295,
            discount: 28,
        },
        rating:{
            stars: 4.2,
            noOfReviews:'1.9k',
        }
    },
]