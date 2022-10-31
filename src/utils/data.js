export const calendar = {
  specialDates: [
    {
      date: "13-06-2022",
      events: [{ title: "Mothers Day", description: "lorem ipsum" }],
    },
    {
      date: "13-08-2022",
      events: [{ title: "Christmas Day", description: "lorem ipsum" }],
    },
    {
      date: "22-06-2022",
      events: [{ title: "Boxing Day", description: "lorem ipsum" }],
    },
    {
      date: "03-07-2022",
      events: [{ title: "Demoncracy", description: "lorem ipsum" }],
    },
  ],
  listings: [
    {
      id: 1,
      name: "Amazing Two Bedroom",
      listingCategory: "apartment",
      price: 3400,
      // guides: [],
      bookingsByDate: {
        "10-06-2022": [
          {
            id: "aldkjsfahkdsfljsadf",
            clientID: "1",
            status: "open",
            price: 3000, // is price only different if the host configures it from the calendar to be and its date specific.
            guides: ["hello"],
            lowBookingRatio: true,
            blockedHours: [],
          },
        ],
        "11-06-2022": [
          {
            id: "aldkjsfahkdsfljsadf",
            clientID: "1",
            status: "open",
            price: 2800, // is price only different if the host configures it from the calendar to be and its date specific.
            guides: ["hello"],
            lowBookingRatio: false,
            blockedHours: [],
          },
        ],
      },
    },
    {
      id: 2,
      name: "Luxury Penthouse",
      listingCategory: "apartment",
      price: 3400,
      bookingsByDate: {
        "10-06-2022": [
          {
            id: "aldkjsfahkdsfljsadf",
            clientID: "1",
            status: "blocked",
            price: 2800, // is price only different if the host configures it from the calendar to be and its date specific.
            lowBookingRatio: true,
            guides: ["hello"],
            blockedHours: [],
            bookedHours: [],
          },
        ],
      },
    },
  ],
};

export const calendar2 = {
  // this is perfect
  specialDates: [
    {
      date: "13-06-2022",
      events: [{ title: "Mothers Day", description: "lorem ipsum" }],
    },
    {
      date: "13-08-2022",
      events: [{ title: "Christmas Day", description: "lorem ipsum" }],
    },
    {
      date: "22-06-2022",
      events: [{ title: "Boxing Day", description: "lorem ipsum" }],
    },
    {
      date: "03-07-2022",
      events: [{ title: "Demoncracy", description: "lorem ipsum" }],
    },
  ],

  listings: [
    {
      id: 1,
      name: "Amazing Two Bedroom",
      listingCategory: "apartment",
      price: 3400,
      // for a listing, there would be multiple bookings
      bookings: [
        {
          // each booking should have start date and enddate as thus
          startDate: "10-06-2022",
          // this booking is till second day - will span across days in ui
          endDate: "10-07-2022",
          // for apartment and adventure listings,
          // we would also have hours 
          // checkinTime and checkoutTime
          clientID: "1",
          status: "open",
          price: 3000, // is price only different if the host configures it from the calendar to be and its date specific.
          guides: ["hello"],
          lowBookingRatio: true, // not sure what this means
          blockedHours: ['2AM'],
          id: "aldkjsfahkdsfljsadf",
        },
        // another booking
        {
          startDate: "10-06-2022",
          // this booking lasts for a single day
          endDate: "10-06-2022",
          clientID: "2",
          status: "open",
          price: 3000, // is price only different if the host configures it from the calendar to be and its date specific.
          guides: ["hello"],
          lowBookingRatio: true,
          blockedHours: [],
          id: "aldkjsfahkdsfljsadf",
        },
      ],
    },
  ],
};

export const YEARS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']