/**
 * Mock data for the Hotel Booking System
 * This file contains sample hotels, destinations, and reviews for Nepal
 */

// Popular destinations in Nepal
export const destinations = [
  {
    id: 'dest-1',
    name: 'Kathmandu',
    description: 'The vibrant capital city with rich cultural heritage',
    image: 'https://images.unsplash.com/photo-1604307350921-feebc3ddbd37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXRobWFuZHUlMjBOZXBhbCUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3Njk0OTM1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    hotelCount: 42
  },
  {
    id: 'dest-2',
    name: 'Pokhara',
    description: 'Gateway to the Annapurna circuit with stunning lake views',
    image: 'https://images.unsplash.com/photo-1609947016891-f86e68963800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQb2toYXJhJTIwTmVwYWwlMjBsYWtlJTIwbW91bnRhaW5zfGVufDF8fHx8MTc2OTUyMDMxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    hotelCount: 28
  },
  {
    id: 'dest-3',
    name: 'Everest Region',
    description: "Home to the world's highest peak and trekking paradise",
    image: 'https://images.unsplash.com/photo-1662958891242-707d445dc34a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3VudCUyMEV2ZXJlc3QlMjBOZXBhbHxlbnwxfHx8fDE3Njk1MjAzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    hotelCount: 15
  },
  {
    id: 'dest-4',
    name: 'Chitwan',
    description: 'National park famous for wildlife safaris',
    image: 'https://images.unsplash.com/photo-1748343217307-0955e2250dc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaGl0d2FuJTIwTmVwYWwlMjB3aWxkbGlmZXxlbnwxfHx8fDE3Njk1MjAzMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    hotelCount: 12
  },
  {
    id: 'dest-5',
    name: 'Lumbini',
    description: 'Birthplace of Lord Buddha, a UNESCO World Heritage Site',
    image: 'https://images.unsplash.com/photo-1609168494389-230528e6a9c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMdW1iaW5pJTIwTmVwYWwlMjB0ZW1wbGV8ZW58MXx8fHwxNzY5NTIwMzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    hotelCount: 8
  }
];

// Available amenities
export const availableAmenities = [
  'Free WiFi',
  'Swimming Pool',
  'Spa',
  'Restaurant',
  'Room Service',
  'Gym',
  'Parking',
  'Airport Shuttle',
  'Mountain View',
  'Lake View',
  'Garden',
  'Conference Room'
];

// Mock hotels data
export const hotels = [
  {
    id: 'hotel-1',
    name: 'The Himalayan Grand',
    description: 'Experience luxury in the heart of Kathmandu with stunning mountain views. Our hotel combines traditional Nepali architecture with modern amenities, offering guests an unforgettable stay.',
    location: 'Thamel, Kathmandu',
    city: 'Kathmandu',
    price: 8500,
    rating: 4.8,
    stars: 5,
    images: [
      'https://images.unsplash.com/photo-1731336478850-6bce7235e320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzY5NTA4OTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1637730827702-f847ebb70dbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2OTUwNTA3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1604307350921-feebc3ddbd37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXRobWFuZHUlMjBOZXBhbCUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3Njk0OTM1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    amenities: ['Free WiFi', 'Swimming Pool', 'Spa', 'Restaurant', 'Room Service', 'Gym', 'Parking', 'Mountain View'],
    latitude: 27.7172,
    longitude: 85.3240,
    totalRooms: 80,
    availableRooms: 12,
    reviews: [
      {
        id: 'rev-1',
        userId: 'user-1',
        userName: 'Sarah Johnson',
        rating: 5,
        comment: 'Absolutely stunning hotel! The mountain views from the room were breathtaking. Staff was incredibly helpful and friendly.',
        date: '2026-01-15'
      },
      {
        id: 'rev-2',
        userId: 'user-2',
        userName: 'Raj Kumar',
        rating: 4.5,
        comment: 'Great location in Thamel. Easy access to all the tourist spots. The spa was amazing!',
        date: '2026-01-10'
      }
    ]
  },
  {
    id: 'hotel-2',
    name: 'Lakeside Paradise Resort',
    description: 'Wake up to serene lake views and magnificent Annapurna mountain range. Perfect for adventure seekers and those looking for tranquility.',
    location: 'Lakeside, Pokhara',
    city: 'Pokhara',
    price: 6500,
    rating: 4.6,
    stars: 4,
    images: [
      'https://images.unsplash.com/photo-1667125095636-dce94dcbdd96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwcm9vbXxlbnwxfHx8fDE3Njk1MDY5NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1609947016891-f86e68963800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQb2toYXJhJTIwTmVwYWwlMjBsYWtlJTIwbW91bnRhaW5zfGVufDF8fHx8MTc2OTUyMDMxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    amenities: ['Free WiFi', 'Restaurant', 'Lake View', 'Garden', 'Parking', 'Room Service'],
    latitude: 28.2096,
    longitude: 83.9856,
    totalRooms: 45,
    availableRooms: 8,
    reviews: [
      {
        id: 'rev-3',
        userId: 'user-3',
        userName: 'Emma Wilson',
        rating: 5,
        comment: 'Perfect location by the lake! Morning walks along the lakeside were magical. Highly recommend!',
        date: '2026-01-20'
      }
    ]
  },
    {
        id: 'hotel-3',
    name: 'Everest View Lodge',
    description: 'Get the closest view of Mount Everest from comfort. Ideal for trekkers starting their Everest Base Camp journey.',
    location: 'Namche Bazaar',
    city: 'Everest Region',
    price: 4500,
    rating: 4.4,
    stars: 3,
    images: [
      'https://images.unsplash.com/photo-1662958891242-707d445dc34a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3VudCUyMEV2ZXJlc3QlMjBOZXBhbHxlbnwxfHx8fDE3Njk1MjAzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1604307350921-feebc3ddbd37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXRobWFuZHUlMjBOZXBhbCUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3Njk0OTM1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1731336478850-6bce7235e320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzY5NTA4OTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    amenities: ['Free WiFi', 'Restaurant', 'Mountain View', 'Parking'],
    latitude: 27.8067,
    longitude: 86.7135,
    totalRooms: 20,
    availableRooms: 5,
    reviews: [
      {
        id: 'rev-4',
        userId: 'user-4',
        userName: 'Mike Chen',
        rating: 4,
        comment: 'Incredible views! Basic amenities but perfect for trekkers. The staff was very knowledgeable about the trails.',
        date: '2026-01-18'
      }
    ]
  },
  {
    id: 'hotel-4',
    name: 'Chitwan Jungle Resort',
    description: 'Immerse yourself in nature with our jungle resort. Enjoy elephant safaris, bird watching, and authentic Nepali cuisine.',
    location: 'Sauraha, Chitwan',
    city: 'Chitwan',
    price: 5500,
    rating: 4.5,
    stars: 4,
    images: [
      'https://images.unsplash.com/photo-1748343217307-0955e2250dc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaGl0d2FuJTIwTmVwYWwlMjB3aWxkbGlmZXxlbnwxfHx8fDE3Njk1MjAzMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    amenities: ['Free WiFi', 'Restaurant', 'Garden', 'Airport Shuttle', 'Swimming Pool'],
    latitude: 27.5799,
    longitude: 84.4955,
    totalRooms: 35,
    availableRooms: 15,
    reviews: [
      {
        id: 'rev-5',
        userId: 'user-5',
        userName: 'Priya Sharma',
        rating: 5,
        comment: 'Amazing wildlife experience! We saw rhinos, elephants, and so many bird species. The resort was comfortable and the food was delicious.',
        date: '2026-01-22'
      }
    ]
  },
  {
    id: 'hotel-5',
    name: 'Buddha Heritage Hotel',
    description: 'Stay near the sacred birthplace of Buddha. Our peaceful hotel offers spiritual retreats and meditation sessions.',
    location: 'Lumbini Garden',
    city: 'Lumbini',
    price: 4000,
    rating: 4.3,
    stars: 3,
    images: [
      'https://images.unsplash.com/photo-1609168494389-230528e6a9c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMdW1iaW5pJTIwTmVwYWwlMjB0ZW1wbGV8ZW58MXx8fHwxNzY5NTIwMzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    amenities: ['Free WiFi', 'Restaurant', 'Garden', 'Parking', 'Conference Room'],
    latitude: 27.4833,
    longitude: 83.2667,
    totalRooms: 30,
    availableRooms: 10,
    reviews: [
      {
        id: 'rev-6',
        userId: 'user-6',
        userName: 'David Lee',
        rating: 4,
        comment: 'Very peaceful and spiritual atmosphere. Perfect for meditation and reflection. The gardens are beautiful.',
        date: '2026-01-12'
      }
    ]
  },
  {
    id: 'hotel-6',
    name: 'Durbar Square Palace Hotel',
    description: 'Located in the historic Durbar Square area, experience the ancient architecture and culture of Nepal.',
    location: 'Durbar Square, Kathmandu',
    city: 'Kathmandu',
    price: 7000,
    rating: 4.7,
    stars: 4,
    images: [
      'https://images.unsplash.com/photo-1604307350921-feebc3ddbd37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXRobWFuZHUlMjBOZXBhbCUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3Njk0OTM1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    amenities: ['Free WiFi', 'Restaurant', 'Room Service', 'Spa', 'Mountain View', 'Conference Room'],
    latitude: 27.7045,
    longitude: 85.3077,
    totalRooms: 50,
    availableRooms: 7,
    reviews: [
      {
        id: 'rev-7',
        userId: 'user-7',
        userName: 'Lisa Martinez',
        rating: 5,
        comment: 'Beautiful historic location! You can walk to all the temples and palaces. The rooftop restaurant has amazing views.',
        date: '2026-01-25'
      }
    ]
  },
  {
    id: 'hotel-7',
    name: 'Annapurna Mountain Lodge',
    description: 'Perfect base for Annapurna trekking. Enjoy panoramic mountain views and hearty meals after a day of hiking.',
    location: 'Ghandruk, Pokhara',
    city: 'Pokhara',
    price: 3500,
    rating: 4.2,
    stars: 3,
    images: [
      'https://images.unsplash.com/photo-1731336478850-6bce7235e320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzY5NTA4OTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    amenities: ['Free WiFi', 'Restaurant', 'Mountain View', 'Garden'],
    latitude: 28.3893,
    longitude: 83.8135,
    totalRooms: 25,
    availableRooms: 18,
    reviews: []
  },
  {
    id: 'hotel-8',
    name: 'Kathmandu Boutique Hotel',
    description: 'Modern boutique hotel with traditional Nepali touches. Located in the heart of the city with easy access to shopping and dining.',
    location: 'Lazimpat, Kathmandu',
    city: 'Kathmandu',
    price: 6000,
    rating: 4.6,
    stars: 4,
    images: [
      'https://images.unsplash.com/photo-1637730827702-f847ebb70dbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2OTUwNTA3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    amenities: ['Free WiFi', 'Restaurant', 'Gym', 'Parking', 'Room Service', 'Airport Shuttle'],
    latitude: 27.7344,
    longitude: 85.3245,
    totalRooms: 40,
    availableRooms: 6,
    reviews: [
      {
        id: 'rev-8',
        userId: 'user-8',
        userName: 'James Anderson',
        rating: 4.5,
        comment: 'Clean, modern, and centrally located. The staff went above and beyond to make our stay comfortable.',
        date: '2026-01-24'
      }
    ]
  },
  {
    id: 'hotel-9',
    name: 'Pokhara Adventure Inn',
    description: 'Ideal for adventure enthusiasts. Close to paragliding sites and trekking routes with cozy accommodations.',
    location: 'New Road, Pokhara',
    city: 'Pokhara',
    price: 3000,
    rating: 4.1,
    stars: 2,
    images: [
      'https://images.unsplash.com/photo-1667125095636-dce94dcbdd96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwcm9vbXxlbnwxfHx8fDE3Njk1MDY5NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    amenities: ['Free WiFi', 'Parking', 'Garden'],
    latitude: 28.2098,
    longitude: 83.9850,
    totalRooms: 15,
    availableRooms: 4,
    reviews: []
  },
  {
    id: 'hotel-10',
    name: 'Serene Lumbini Retreat',
    description: 'A tranquil retreat near the sacred sites of Lumbini. Perfect for relaxation and spiritual rejuvenation.',
    location: 'Lumbini Village',
    city: 'Lumbini',
    price: 4200,
    rating: 4.4,
    stars: 3,
    images: [
      'https://images.unsplash.com/photo-1609168494389-230528e6a9c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMdW1iaW5pJTIwTmVwYWwlMjB0ZW1wbGV8ZW58MXx8fHwxNzY5NTIwMzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    amenities: ['Free WiFi', 'Garden', 'Restaurant', 'Parking'],
    latitude: 27.4840,
    longitude: 83.2670,
    totalRooms: 22,
    availableRooms: 9,
    reviews: [
      {
        id: 'rev-9',
        userId: 'user-9',
        userName: 'Anita Desai',
        rating: 5,
        comment: 'A perfect place for spiritual retreat. The peaceful environment and friendly staff made our stay memorable.',
        date: '2026-01-28'
      }
    ]
  },
  {
    id: 'hotel-11',
    name: 'Mountain Breeze Hotel',
    description: 'Enjoy cool mountain air and stunning views in this cozy hotel located in the Everest region.',
    location: 'Tengboche, Everest Region',
    city: 'Everest Region',
    price: 4800,
    rating: 4.5,
    stars: 4,
    images: [
      'https://images.unsplash.com/photo-1662958891242-707d445dc34a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3VudCUyMEV2ZXJlc3QlMjBOZXBhbHxlbnwxfHx8fDE3Njk1MjAzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    amenities: ['Free WiFi', 'Restaurant', 'Mountain View', 'Parking', 'Spa'],
    latitude: 27.9236,
    longitude: 86.8120,
    totalRooms: 30,
    availableRooms: 11,
    reviews: [
      {
        id: 'rev-10',
        userId: 'user-10',
        userName: 'Sanjay Thapa',
        rating: 4.5,
        comment: 'The views of Everest from the hotel are simply breathtaking. The staff were very accommodating and the food was great.',
        date: '2026-01-30'
      }
    ]
  },
  {
    id: 'hotel-12',
    name: 'Garden View Resort',
    description: 'A peaceful resort surrounded by lush gardens in the heart of Chitwan.',
    location: 'Chitwan National Park',
    city: 'Chitwan',
    price: 5200,
    rating: 4.6,
    stars: 4,
    images: [
      'https://images.unsplash.com/photo-1748343217307-0955e2250dc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaGl0d2FuJTIwTmVwYWwlMjB3aWxkbGlmZXxlbnwxfHx8fDE3Njk1MjAzMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    amenities: ['Free WiFi', 'Garden', 'Restaurant', 'Swimming Pool', 'Parking'],
    latitude: 27.5805,
    longitude: 84.4960,
    totalRooms: 40,
    availableRooms: 14,
    reviews: [
      {
        id: 'rev-11',
        userId: 'user-11',
        userName: 'Kiran Gurung',
        rating: 5,
        comment: 'The gardens are beautiful and well-maintained. A perfect place to relax after a day of exploring the national park.',
        date: '2026-01-27'
      }
    ]
  },
  {
    id: 'hotel-13',
    name: 'Tranquil Lakeside Hotel',
    description: 'A serene lakeside hotel offering stunning views and modern amenities in Pokhara.',
    location: 'Lakeside, Pokhara',
    city: 'Pokhara',
    price: 7200,
    rating: 4.9,
    stars: 5,
    images: [
      'https://images.unsplash.com/photo-1609947016891-f86e68963800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQb2toYXJhJTIwTmVwYWwlMjBsYWtlJTIwbW91bnRhaW5zfGVufDF8fHx8MTc2OTUyMDMxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    amenities: ['Free WiFi', 'Swimming Pool', 'Spa', 'Restaurant', 'Lake View', 'Gym', 'Parking'],
    latitude: 28.2096,
    longitude: 83.9856,
    totalRooms: 60,
    availableRooms: 20,
    reviews: [
      {
        id: 'rev-12',
        userId: 'user-12',
        userName: 'Anjali Rai',
        rating: 5,
        comment: 'An exceptional stay with breathtaking lake views. The amenities were top-notch and the staff were incredibly hospitable.',
        date: '2026-01-29'
      }
    ]
  },
  {

    id: 'hotel-14',
    name: 'Heritage Kathmandu Hotel',
    description: 'A charming hotel that blends traditional Nepali architecture with modern comforts, located in the heart of Kathmandu.',
    location: 'Patan, Kathmandu',
    city: 'Kathmandu',
    price: 6800,
    rating: 4.7,
    stars: 4,
    images: [
      'https://images.unsplash.com/photo-1604307350921-feebc3ddbd37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXRobWFuZHUlMjBOZXBhbCUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3Njk0OTM1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    amenities: ['Free WiFi', 'Restaurant', 'Room Service', 'Spa', 'Mountain View'],
    latitude: 27.6726,
    longitude: 85.3206,
    totalRooms: 55,
    availableRooms: 9,
    reviews: [
      {
        id: 'rev-13',
        userId: 'user-13',
        userName: 'Ramesh Adhikari',
        rating: 4.5,
        comment: 'A beautiful blend of heritage and comfort. The location is perfect for exploring Kathmandu\'s rich culture.',
        date: '2026-01-26'
      }
    ]
  },
  {
    id: 'hotel-15',
    name: 'Peaceful Lumbini Hotel',
    description: 'A serene hotel located near the sacred sites of Lumbini, offering a peaceful retreat for travelers.',
    location: 'Lumbini Area',
    city: 'Lumbini',
    price: 3900,
    rating: 4.2,
    stars: 3,
    images: [
      'https://images.unsplash.com/photo-1609168494389-230528e6a9c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMdW1iaW5pJTIwTmVwYWwlMjB0ZW1wbGV8ZW58MXx8fHwxNzY5NTIwMzEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1609168494389-230528e6a9c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMdW1iaW5pJTIwTmVwYWwlMjB0ZW1wbGV8ZW58MXx8fHwxNzY5NTIwMzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    amenities: ['Free WiFi', 'Garden', 'Restaurant', 'Parking'],
    latitude: 27.4835,
    longitude: 83.2665,
    totalRooms: 28,
    availableRooms: 13,
    reviews: [
      {
        id: 'rev-14',
        userId: 'user-14',
        userName: 'Sita Koirala',
        rating: 4,
        comment: 'A quiet and peaceful place to stay. The staff were friendly and the location was convenient for visiting Lumbini\'s sacred sites.',
        date: '2026-01-23'
      }
    ]
  },
  {
    id: 'hotel-16',
    name: 'Hotel Yak & Yeti',
    description: 'A charming lodge located along the banks of the Rapti River, offering a unique blend of nature and comfort in Chitwan.',
    location: 'Durbar Marg, Kathmandu',
    city: 'Kathmandu',
    price: 4800,
    rating: 4.5,
    stars: 4,
    images: ["https://lh3.googleusercontent.com/p/AF1QipOWWR2qnm-TCzz8yZKpuRmCPlsVWV0oLyqpF6th=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipO-Kg6Q4l7VmxSjlxEMf8dJCaVXgmbf0klJDxfw=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqGfzXN6gl0VLbsK3k8M-WX9tqgIhFLwoULgr6xL0AvzNMnWsdFlrdUv-Y47BbwtQeFkZ4O6Ff40LAx_KxShrcBgQNzbSM8GNLqBTbGc6ZsDCuJEK-4h-xjoVCbQ1KW_jb_hlhT=s1360-w1360-h1020-rw"
    ],
    amenities: ['Free WiFi', 'Restaurant', 'Room Service', 'Spa', 'Mountain View'],
    latitude: 27.6726,
    longitude: 85.3206,
    totalRooms: 55,
    availableRooms: 9,
    reviews: [
      {
        id: 'rev-15',
        userId: 'user-15',
        userName: 'Ramesh Adhikari',
        rating: 4.5,
        comment: 'A beautiful blend of heritage and comfort. The location is perfect for exploring Kathmandu\'s rich culture.',
        date: '2026-01-26'
      }
    ]
  },
  {
    id: 'hotel-17',
    name: 'Hotel Annapurna',
    description: 'A tranquil resort located along the banks of the Rapti River, offering a unique blend of nature and comfort in Chitwan.',
    location: 'Durbar Marg, Kathmandu',
    city: 'Kathmandu',
    price: 4500,
    rating: 4.4,
    stars: 3,
    images: ["https://lh3.googleusercontent.com/gps-cs-s/AHVAwepbnOHucxpEwsOYgNFoRqwSKTYXIRHxRJ9VsA0d65QWg5QILghzZwnrOuKQZ-FOr0snwkkaNzZaF3KmWEhSf3PqRdt_LKLWJJr4_MTHypqcoe_UdtRMTYPP3JNOrkh4Oq30DFPf=s1360-w1360-h1020-rw",
     "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepc1urfVuW4stoVUGPGJS3IAG2L-8N6mPXljOwdmP5oqtjGILRd9GzWAPuNw0Yt1GAX0qDrfPpBuc0RMT6FdNdhz2SSMBM-o_xWuya2tK1XkyJGph_cEFnKgS-SAnVPccI8rWHE_fCLrz-Y=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo8OxfR38C3lmSXGdZx3RDpJNTRswKTeYLAYAALogFiTmNaiJuC2GMTfYa77PjdMUAGvTmZZ8B0i_txpUPP-6dy-h8xOEPhfKsWY8XgrloNAwkiAyyUh0sBF4nbpwmF6p2IQjHE_g=s1360-w1360-h1020-rw"
    ],
    amenities: ['Free WiFi', 'Restaurant', 'Garden', 'Parking', 'Conference Room'],
    latitude: 27.5805,
    longitude: 84.4960,
    totalRooms: 40,
    availableRooms: 14,
    reviews: [
      {
        id: 'rev-16',
        userId: 'user-16',
        userName: 'Kiran Gurung',
        rating: 5,
        comment: 'The gardens are beautiful and well-maintained. A perfect place to relax after a day of exploring the national park.',
        date: '2026-01-27'
      }
    ]
  },
    {
  id: 'hotel-18',
    name: 'Hyatt Regency Kathmandu',
    description: 'A tranquil resort located along the banks of the Rapti River, offering a unique blend of nature and comfort in Chitwan.',
    location: 'Boudha, Kathmandu',
    city: 'Kathmandu',
    price: 4700,
    rating: 4.5,
    stars: 4,
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipPR1OcrlEMuOYS0aOBK87icar-ZGXBr044BcjLV=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipP5ntdnLNJ95lM7A9krX48R0X5eLZpTmCHZiI_d=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq8kVKV14Buc9yjXEX_As8iNJ93ia32YuZoO4GUalsiC_-SsIYL28Njc_ZE0kSQh4IGz5PpcWvAaR1D5sZljbsGj_tpW507-jT_WRs1Ik7S_pfdbKsuLHwAsZZjk5hxmzuz1C9p=s1360-w1360-h1020-rw"
    ],
    amenities: ['Free WiFi', 'Restaurant', 'Room Service', 'Spa', 'Mountain View'],
    latitude: 27.6726,
    longitude: 85.3206,
    totalRooms: 55,
    availableRooms: 9,
    reviews: [
      {
        id: 'rev-17',
        userId: 'user-17',
        userName: 'Ramesh Adhikari',
        rating: 4.5,
        comment: 'A beautiful blend of heritage and comfort. The location is perfect for exploring Kathmandu\'s rich culture.',
        date: '2026-01-26'
      }
    ]
  },     
  {
    id: 'hotel-ktm-1',
    name: 'Kathmandu Marriott Hotel',
    description: 'A luxury international brand hotel with spacious rooms, excellent service, pool and conference facilities.',
    location: 'Naxal, Kathmandu',
    city: 'Kathmandu',
    price: 12000,
    rating: 4.6,
    stars: 5,
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipO6F9Y7jJz0B9P4WKoV8WSwF8Xk7qPzWn0WLR5_=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipPpRiQ6Rj1E3U9pQ8a-aFvUeGvA7xVP0XVbNvbM=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipNYkDLzq1FHNp_sKfsX6Xy3y9zxJxJY3oTQblsO=s1360-w1360-h1020-rw"
    ],
    amenities: ['Free WiFi','Swimming Pool','Fitness Center','Restaurant'],
    latitude: 27.7166,
    longitude: 85.3236,
    totalRooms: 220,
    availableRooms: 40,
    reviews: [
      {
        id: 'rev-ktm-1-1',
        userId: 'user-ktm-1',
        userName: 'Suman Lama',
        rating: 4.7,
        comment: 'Great hospitality and location. Perfect for both business and leisure.',
        date: '2026-01-10'
      }
    ]
  },
  {
    id: 'hotel-ktm-2',
    name: 'Hyatt Regency Kathmandu',
    description: 'Luxury hotel amidst serene surroundings with beautiful gardens and top-notch service.',
    location: 'Boudha, Kathmandu',
    city: 'Kathmandu',
    price: 11000,
    rating: 4.5,
    stars: 5,
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipPR1OcrlEMuOYS0aOBK87icar-ZGXBr044BcjLV=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipP5ntdnLNJ95lM7A9krX48R0X5eLZpTmCHZiI_d=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq8kVKV14Buc9yjXEX_As8iNJ93ia32YuZoO4GUalsiC_-SsIYL28Njc_ZE0kSQh4IGz5PpcWvAaR1D5sZljbsGj_tpW507-jT_WRs1Ik7S_pfdbKsuLHwAsZZjk5hxmzuz1C9p=s1360-w1360-h1020-rw"
    ],
    amenities: ['Free WiFi','Spa','Restaurant','Conference Hall'],
    latitude: 27.6726,
    longitude: 85.3206,
    totalRooms: 150,
    availableRooms: 20,
    reviews: [
      {
        id: 'rev-ktm-2-1',
        userId: 'user-ktm-2',
        userName: 'Binita Shrestha',
        rating: 4.3,
        comment: 'Beautiful garden area and comfortable rooms.',
        date: '2026-01-18'
      }
    ]
  },
  {
    id: 'hotel-ktm-3',
    name: 'The Soaltee Kathmandu, Autograph Collection',
    description: 'Premium hotel with elegance, excellent service and spacious rooms in the heart of the city.',
    location: 'Kalanki, Kathmandu',
    city: 'Kathmandu',
    price: 10500,
    rating: 4.4,
    stars: 5,
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipOwN7p6xE7JqIQazOl0CXn2E6e5rgZZt2YqjJuD=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipMwQ07n1GvJk-Pa0yF1JqlNe0KyQN8V3FzxDQ7P=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipNL7ybD2P5x0O29k9mX9_3sY7u0BdONJSuQq_0b=s1360-w1360-h1020-rw"
    ],
    amenities: ['Free WiFi','Restaurant','Fitness Center','Bar'],
    latitude: 27.7098,
    longitude: 85.2677,
    totalRooms: 230,
    availableRooms: 30,
    reviews: []
  },
  {
    id: 'hotel-ktm-4',
    name: 'Radisson Hotel Kathmandu',
    description: 'Modern stylish hotel with great location close to Lazimpat and city attractions.',
    location: 'Lazimpat, Kathmandu',
    city: 'Kathmandu',
    price: 9000,
    rating: 4.3,
    stars: 5,
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipP5TY7qwAZmD_bjG4Gf77lMWC-_YcM0XW6p3Png=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipNNZ7m2u0dv1I7s_5aWvPC-4XVoiBJ9M4SE6a0O=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipP8h7Y7IjkFfm0mWeLG7_gU_NxE7qIPKSY5LcHY=s1360-w1360-h1020-rw"
    ],
    amenities: ['Free WiFi','Swimming Pool','Restaurant','Bar'],
    latitude: 27.7164,
    longitude: 85.3171,
    totalRooms: 180,
    availableRooms: 25,
    reviews: []
  },
  {
    id: 'hotel-ktm-5',
    name: 'Hotel Yak & Yeti',
    description: 'Heritage-inspired luxury hotel at Durbar Marg with classic charm and modern comfort.',
    location: 'Durbar Marg, Kathmandu',
    city: 'Kathmandu',
    price: 9400,
    rating: 4.4,
    stars: 5,
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipOQHZ1bR-QHvzL5uHqLXJcGZc8tF6Kq6ld1Boh7=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipNJz_HQKMx1v-bWm2Y3z7zRzXEhFA0u6qGv9rC9=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipOa8h_YoH5XlX5z3J0cF3VZXm7hZkq_ljzHDx0f=s1360-w1360-h1020-rw"
    ],
    amenities: ['Free WiFi','Restaurant','Bar','Conference Hall'],
    latitude: 27.7134,
    longitude: 85.3188,
    totalRooms: 160,
    availableRooms: 18,
    reviews: []
  },
  {
    id: 'hotel-ktm-6',
    name: 'Aloft Kathmandu Thamel',
    description: 'Contemporary urban hotel in Thamel, ideal for both business and leisure travelers.',
    location: 'Thamel, Kathmandu',
    city: 'Kathmandu',
    price: 6800,
    rating: 4.2,
    stars: 4,
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipP7xZxfYQN6kZ0IlVYh3yjwTWQmLkLY4Pc4GNYb=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipMx9tht8gcT6o9Z4bQxwbMvYdR5o_Iu6b3Rq_Zq=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipO9WnMFMwGdBt9K8KvpJSjd9_NDXDmAvL1FvE8=s1360-w1360-h1020-rw"
    ],
    amenities: ['Free WiFi','Restaurant','Bar','Gym'],
    latitude: 27.7145,
    longitude: 85.3073,
    totalRooms: 140,
    availableRooms: 35,
    reviews: []
  },
  {
    id: 'hotel-ktm-7',
    name: 'Hotel Shanker',
    description: 'Historic heritage hotel in Lazimpat with classic architecture and fine dining options.', 
    location: 'Lazimpat, Kathmandu',
    city: 'Kathmandu',
    price: 7000,
    rating: 4.3,
    stars: 4,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/2/2c/Hotel_Shanker%2C_Kathmandu.jpg",
      "https://lh3.googleusercontent.com/p/AF1QipQB6g3Wc7kVxHi1oZp1cCLfB6PXdMsKJbpvmyGv=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipR7y2j0HTcFtQZaoUa3EGgpT5-y_h6Lq0k8PJA=s1360-w1360-h1020-rw"
    ],
    amenities: ['Free WiFi','Restaurant','Heritage Experience','Bar'],
    latitude: 27.7261,
    longitude: 85.3153,
    totalRooms: 94,
    availableRooms: 12
  },
  {
    id: 'hotel-pok-1',
    name: 'Temple Tree Resort & Spa',
    description: 'Boutique-style resort near Phewa Lake with lush gardens and spa facilities.',
    location: 'Lakeside, Pokhara',
    city: 'Pokhara',
    price: 9500,
    rating: 4.7,
    stars: 5,
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipPJ4L31dXGYZ8wJb7Eaq6RoQj4j7pX2Gz3B9sZX=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipOTv2X383ZP0Jl0-6qaZBnqBpC-G_7oM8XXSqy4=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipOvIb8FQ0EbgdNGRBl5D8YA5r9k68zNJYbxK8Ck=s1360-w1360-h1020-rw"
    ],
    amenities: ['Free WiFi','Spa','Restaurant','Garden'],
    latitude: 28.2123,
    longitude: 83.9815,
    totalRooms: 40,
    availableRooms: 10,
    reviews: [
      {
        id: 'rev-pok-1',
        userId: 'user-pok-1',
        userName: 'Anita Thapa',
        rating: 4.8,
        comment: 'Lovely lake views and great ambiance. Perfect for a romantic getaway.',
        date: '2025-12-12'
      }
    ]
  },
  {
    id: 'hotel-pok-2',
    name: 'Fish Tail Lodge',
    description: 'Elegant lodge on the edge of Phewa Lake with stunning mountain views.',
    location: 'Phewa Lake, Pokhara',
    city: 'Pokhara',
    price: 11500,
    rating: 4.8,
    stars: 5,
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipMpPHZtZQWu5v5la62yb0Xn-aFj3j2bx7ykY1Wl=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipNYa2HTIRcJ2yH4Zyso8sZqjpi5hA2tRFxYYd0w=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipO6MXAR9uqg2NVk_e3BdYjLh7RVSMc_Rf6B6q6K=s1360-w1360-h1020-rw"
    ],
    amenities: ['Lake View','Free Breakfast','Restaurant','Bar'],
    latitude: 28.2131,
    longitude: 83.9726,
    totalRooms: 50,
    availableRooms: 8,
    reviews: []
  },
  {
    id: 'hotel-pok-3',
    name: 'Hotel Barahi Pokhara',
    description: 'Well-known hotel near Lakeside with modern comforts and a welcoming atmosphere.',
    location: 'Lakeside, Pokhara',
    city: 'Pokhara',
    price: 7800,
    rating: 4.4,
    stars: 4,
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipO_gFqzH0w3j9Q2T0h7Z7pKcMqROYr1e7huVFfZ=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipNuw2ZHIsuu-lm2J0CUiF5O6eD9F4_ADY7VpXvR=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipM5z6jkHIX1eDYy6T8uD7QoLJt4yboYsG4tcu1F=s1360-w1360-h1020-rw"
    ],
    amenities: ['Free WiFi','Restaurant','Pool','Bar'],
    latitude: 28.2129,
    longitude: 83.9810,
    totalRooms: 85,
    availableRooms: 15,
    reviews: []
  },
  {
    id: 'hotel-pok-4',
    name: 'Hotel Pokhara Grande',
    description: 'Full-service hotel with fine dining, fitness area, and comfortable rooms.',
    location: 'Birauta, Pokhara',
    city: 'Pokhara',
    price: 8300,
    rating: 4.3,
    stars: 4,
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipOa5kF1zC4LeWx1Qqj8vogG0jstpUu4qi1f9b9X=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipNmpBr5nGCD7q7mBjx_4wXkYvZwJTDc6s5cJjG_=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipOkWV77o0WJf0bC9G9HUFFB_Gv2FLLy3IzkKxy6I=s1360-w1360-h1020-rw"
    ],
    amenities: ['Free Breakfast','Gym','Pool','Restaurant'],
    latitude: 28.2165,
    longitude: 83.9768,
    totalRooms: 70,
    availableRooms: 12,
    reviews: []
  },
  {
    id: 'hotel-pok-5',
    name: 'Waterfront Resort By KGH Group',
    description: 'Beautiful resort with lakefront location, outdoor pool, and scenic views.', 
    location: 'Lakeside, Pokhara',
    city: 'Pokhara',
    price: 8900,
    rating: 4.3,
    stars: 4,
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipP6yY5f7sMB5S3Yyx93PwU3urTqog6jQ2l6DfS7=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipN4i4ZUWszVo6y3p9ar0FwKLPb8jq996D1lXk3P=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipM8oPO8j8dqyzTz5W7Jx7m_JjV_jL5_Fy0C5E2d=s1360-w1360-h1020-rw"
    ],
    amenities: ['Free WiFi','Swimming Pool','Lake View','Restaurant'],
    latitude: 28.2110,
    longitude: 83.9812,
    totalRooms: 60,
    availableRooms: 14,
    reviews: []
  },
  {
    id: 'hotel-pok-6',
    name: 'Atithi Resort & Spa',
    description: 'Relaxing resort near Phewa Lake with spa, outdoor spaces, and close access to local attractions.',
    location: 'Lakeside, Pokhara',
    city: 'Pokhara',
    price: 7700,
    rating: 4.4,
    stars: 4,
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipMhN2p_xmzMu4z8IgRj1Qp6gY2pCK2Qp1pV5kBo=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipO8u9-JB9qFzW5Zg1md6m1D4F6_1KpOwJ3Y60pD=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipN9Hw5Yj4BZ9c5VZz6N7t8DBLQpXHO8m7FvMkAs=s1360-w1360-h1020-rw"
    ],
    amenities: ['Spa','Restaurant','Free Parking','Bike Rental'],
    latitude: 28.2134,
    longitude: 83.9805,
    totalRooms: 55,
    availableRooms: 18,
    reviews: []
  },
  {
    id: 'hotel-pok-7',
    name: 'Sarangkot Mountain Lodge',
    description: 'Cozy lodge with spectacular views of Annapurna range, ideal for nature lovers.', 
    location: 'Sarangkot, Pokhara',
    city: 'Pokhara',
    price: 7200,
    rating: 4.5,
    stars: 4,
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipQw40bpOVsxe_6QzSi8h0GcZ4qtpv1BnTqvVd4F=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipN6US5rXcV1C9gh5V2N8PZf_V9Yg5_ZlJqS8k=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipO4vtxIkp6MByq3Zlxh2oxMtR0pMGr9GfN8v8Zf=s1360-w1360-h1020-rw"
    ],
    amenities: ['Mountain View','Free Breakfast','Tour Services'],
    latitude: 28.2122,
    longitude: 84.0167,
    totalRooms: 30,
    availableRooms: 9,
    reviews: []
  },
  {
    id: 'hotel-pok-8',
    name: 'Hotel Lake Star',
    description: 'Comfortable lakeside hotel with easy access to local restaurants and shops.', 
    location: 'Lakeside, Pokhara',
    city: 'Pokhara',
    price: 6500,
    rating: 4.2,
    stars: 3,
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipOw5H3rh8A8XiK2JZy_UTp7eeFiI5X9QY2LT9jW=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipN2B_G3Avka70hA0VYq5WxGhV7caK8sQ-1EdPo=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipP9H7jbG8VN1Rz2M1Nt0C7yZ2Nk5ZT6sXsnNyh=s1360-w1360-h1020-rw"
    ],
    amenities: ['Free WiFi','Restaurant','Tour Desk'],
    latitude: 28.2115,
    longitude: 83.9825,
    totalRooms: 50,
    availableRooms: 17,
    reviews: []
  },
  {
    id: 'hotel-pok-9',
    name: 'Pokhara Choice Inn',
    description: 'Mid-range hotel near lakeside, popular for families and budget travelers.', 
    location: 'Lakeside, Pokhara',
    city: 'Pokhara',
    price: 6100,
    rating: 4.0,
    stars: 3,
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipO9W3H_M0VCi2c4hj6gK5J8GwB2aMZ1g9z8f7qZ=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipP2M2PQT7QW6C_YVazQZ9pX96wFZY8kEXK0Zfa=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipMx6Zq3mZ0aPp9Njq1OGQdEIYN1hQk2p0Ba9v4=s1360-w1360-h1020-rw"
    ],
    amenities: ['Free WiFi','Tour Desk','Breakfast'],
    latitude: 28.2130,
    longitude: 83.9808,
    totalRooms: 60,
    availableRooms: 20,
    reviews: []
  },
  {
    id: 'hotel-pok-10',
    name: 'Hotel Orchid Pokhara',
    description: 'Stylish hotel with modern rooms and comfortable facilities, located near lakeside.', 
    location: 'Lakeside, Pokhara',
    city: 'Pokhara',
    price: 6000,
    rating: 4.1,
    stars: 3,
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipN7q1tZsXk2C9-EQFjvJ5yYT1eZrTcF6j2p7ZYB=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipO04_B6Yq2gL8WzYpQ9TE8JpYc8qZ8t5xN4aB2=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipMx3p5jZL7YmJxqBK6d8nXZoM7NsYv1J9f5C8sN=s1360-w1360-h1020-rw"
    ],
    amenities: ['Free WiFi','Restaurant','Bar'],
    latitude: 28.2128,
    longitude: 83.9811,
    totalRooms: 45,
    availableRooms: 15,
    reviews: []
  },
  {
    id: 'hotel-cht-1',
    name: 'Soaltee Westend Resort Chitwan',
    description: 'Premium resort with luxury rooms, wellness facilities and close access to nature and safari tours.',
    location: 'Bharatpur, Chitwan',
    city: 'Chitwan',
    price: 15000,
    rating: 4.6,
    stars: 5,
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipQ6x1s3Q-W4nQej8L9Ch1E9sBBRk7AB8d6qA2ds=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipQH2zjXg2-3pvn4Q9ECBXB4I3x_47wSd8X0g0o=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipO4c_Tn6e22rT4TxG5F1klkL7yGQDv0VxekYpjF=s1360-w1360-h1020-rw"
    ],
    amenities: ['Free WiFi','Spa','Pool','Restaurant'],
    latitude: 27.6885,
    longitude: 84.4306,
    totalRooms: 120,
    availableRooms: 20,
    reviews: []
  },
  {
    id: 'hotel-cht-2',
    name: 'Kasara Resort',
    description: 'Excellent resort surrounded by lush greenery with safari and jungle experiences nearby.',
    location: 'Patihani, Chitwan',
    city: 'Chitwan',
    price: 14000,
    rating: 4.5,
    stars: 5,
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipN6y2s4K9XHGg8Cb1MM5QpF6b_7WcJTfC9smQzy=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipNpWTB5VDq2IgfABxmyY0YJz2s4q9N_7jmm0ew7=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipOaJf-HV6o7gQVp_2OpvXf8YM0Q6G4R_t4K2lNZ=s1360-w1360-h1020-rw"
    ],
    amenities: ['Free WiFi','Safari Tours','Restaurant','Bar'],
    latitude: 27.6988,
    longitude: 84.4201,
    totalRooms: 85,
    availableRooms: 15,
    reviews: []
  },
  {
    id: 'hotel-cht-3',
    name: 'River Bank Jungle Resort',
    description: 'Relaxing resort with river views, close proximity to Chitwan National Park experiences.',
    location: 'Bharatpur, Chitwan',
    city: 'Chitwan',
    price: 13500,
    rating: 4.5,
    stars: 5,
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipStZHjG4gk89fiIO7p9xJHk_l8P58QJ6M6d4y0X=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipM2OKIYn5p9sJK3YT6d5KJH7ZQb-5rCEt1hF7NT=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipODhL2R8dxyYQ7iJ9coxAgXq8JK0tT5YPXkG4U6h=s1360-w1360-h1020-rw"
    ],
    amenities: ['River View','Free Breakfast','Bar'],
    latitude: 27.6850,
    longitude: 84.4212,
    totalRooms: 70,
    availableRooms: 10,
    reviews: []
  },
  {
    id: 'hotel-cht-4',
    name: 'Green Park Chitwan',
    description: 'Eco-friendly resort with safari access, spacious rooms and nature activities.',
    location: 'Ratnanagar, Chitwan',
    city: 'Chitwan',
    price: 10000,
    rating: 4.4,
    stars: 4,
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipOZQYyGUnjU5Qp4qe9jZvn5n0QjL8pv5gt1UuL9=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipNq4_eXO9-Lhd6pQc0UTk7gJ5r0K0q-OyMB3qk9=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipM5Ez1JG2Cp5C4pK9x8vL6nGk1JYp4gH2tS9CU=s1360-w1360-h1020-rw"
    ],
    amenities: ['Free WiFi','Pool','Ground Tour'],
    latitude: 27.6567,
    longitude: 84.4578,
    totalRooms: 60,
    availableRooms: 12,
    reviews: []
  },
  {
    id: 'hotel-cht-5',
    name: 'Hotel Aikawa',
    description: 'Well-reviewed hotel with comfortable rooms and good hospitality near park areas.',
    location: 'Sauraha, Chitwan',
    city: 'Chitwan',
    price: 9500,
    rating: 4.2,
    stars: 4,
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipR5zcYf8BZ7Qe7kj9JJL9fgJ1k9FMZcQY6p7uHs=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipNtY1pvYQV7G2SDb5L9rZ_5JPwG6YwP1uJ9l6U8=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipML5YDX7EWYV1fK8U4J9V4GjS7YTnJ3p0aG2Q7Z=s1360-w1360-h1020-rw"
    ],
    amenities: ['Free WiFi','Restaurant','Tour Desk'],
    latitude: 27.6660,
    longitude: 84.4562,
    totalRooms: 50,
    availableRooms: 18,
    reviews: []
  },
  {
    id: 'hotel-cht-6',
    name: 'Park Safari Resort',
    description: 'Comfortable resort with safari packages, family-friendly environment and restaurant.',
    location: 'Sauraha, Chitwan',
    city: 'Chitwan',
    price: 9000,
    rating: 4.3,
    stars: 4,
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipOQaV7U5Z2lQ1lj8ZqS5M0T8sQ7vS8lGp3G0d8O=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipNdX1s8J4F3YpH2J5Q9xZrCTB8vL7vQl1T8gQ2H=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipMRTaQ7d9E4gG1S8J9yL5zH8g7YFJ4XcB2qNq=s1360-w1360-h1020-rw"
    ],
    amenities: ['Free Breakfast','Safari','Free WiFi'],
    latitude: 27.6668,
    longitude: 84.4575,
    totalRooms: 62,
    availableRooms: 20,
    reviews: []
  },
  {
    id: 'hotel-cht-7',
    name: 'Jagatpur Lodge',
    description: 'Cozy lodge providing authentic Chitwan hospitality and wildlife adventure experiences.',
    location: 'Jagatpur, Chitwan',
    city: 'Chitwan',
    price: 8700,
    rating: 4.4,
    stars: 3,
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipOr5d8QEhfNcG1kF9lL4J9T3LiYP1zQ8m4V3B1X=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipMye9GKE9WvT2uH7X1uD2J8g_J1YpFz2Q3K9s=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipNq2H5U7T1Pv9J5X8yF6V3nJ7YTt1JpQ4nB9k7=s1360-w1360-h1020-rw"
    ],
    amenities: ['Free WiFi','Tour Desk','Garden'],
    latitude: 27.6772,
    longitude: 84.4209,
    totalRooms: 45,
    availableRooms: 13,
    reviews: []
  },
  {
    id: 'hotel-cht-8',
    name: 'Royal Tulip Chitwan Nepal',
    description: 'Luxury property with modern amenities and excellent service in central Chitwan.',
    location: 'Sauraha, Chitwan',
    city: 'Chitwan',
    price: 17000,
    rating: 4.7,
    stars: 5,
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipQ9J1k3Hc8G3hL1J8dK5FsK8p4M3J2Q5W6L1l0E=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipN3yQH8G1X2P1L8J9qT5F6sQ8wYpG0cJ9L2l3O=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipO8jP2H3J4G5hL2K8sQ7W6R4kJ0pF1J8l2V9l1R=s1360-w1360-h1020-rw"
    ],
    amenities: ['Free WiFi','Pool','Spa','Restaurant'],
    latitude: 27.6657,
    longitude: 84.4560,
    totalRooms: 80,
    availableRooms: 15,
    reviews: []
  },
  {
    id: 'hotel-cht-9',
    name: 'Barahi Jungle Lodge',
    description: 'Rustic jungle lodge offering close nature experiences and safari activities.',
    location: 'Meghauli, Chitwan',
    city: 'Chitwan',
    price: 12500,
    rating: 4.5,
    stars: 4,
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipP9q1W4G6k8sJ3F5H8lQ2YJ5K9m1L4G8v8S1jQ=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipO0q1W7G8sJ2YQ6H5pL8vM2Q8yT5pF1J8G4L9O=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipN2q1W4L5G9H1J8M2Q8pF4S6Y2tJ1Q9M1L2sQ7=s1360-w1360-h1020-rw"
    ],
    amenities: ['Safari Tours','Free Breakfast','Nature Trails'],
    latitude: 27.6621,
    longitude: 84.4350,
    totalRooms: 30,
    availableRooms: 8,
    reviews: []
  },
  {
    id: 'hotel-cht-10',
    name: 'Hotel Seven Limited',
    description: 'Friendly hotel with good hospitality and comfy rooms located in Sauraha.',
    location: 'Sauraha, Chitwan',
    city: 'Chitwan',
    price: 8500,
    rating: 4.2,
    stars: 3,
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipOq4Y3L7X9D2J1X8F5L4sH2G7J9qL8P1V6M8sE7=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipN4r2S5H7T9G1X8J8F2L6M8J1N9P2Q5V4W6X7Y=s1360-w1360-h1020-rw",
      "https://lh3.googleusercontent.com/p/AF1QipM8t2Y3G9J9H2L6F8W4V9P6Q8R3S2M7J4N1O=s1360-w1360-h1020-rw"
    ],
    amenities: ['Free WiFi','Tour Desk','Bar'],
    latitude: 27.6670,
    longitude: 84.4567,
    totalRooms: 40,
    availableRooms: 22,
    reviews: []
  },
  

];


