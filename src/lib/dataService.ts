// In a real application, this data would be fetched from a CMS or database.

interface Member {
  name: string;
  birthdate: string; // YYYY-MM-DD
  spouseName?: string;
  anniversary?: string; // YYYY-MM-DD
}

interface Event {
  date: string; // ISO 8601 format
  description: string;
  organizer?: string;
}

interface RestaurantOffer {
  restaurantName: string;
  offer: string;
  validity: string; // e.g., "2025-12-31"
}

const members: Member[] = [
  { name: "Tony Dewan", birthdate: "1985-01-01" },
  { name: "Varun Jalan", birthdate: "1990-01-29" },
  { name: "Oscar De Lima Pereira", birthdate: "1982-05-10", spouseName: "Elaine", anniversary: "2010-01-13" },
  { name: "Varun Chawla", birthdate: "1988-03-03" },
  { name: "Venkat Muppana", birthdate: "1979-03-17" },
  { name: "Ali Reza", birthdate: "1992-09-05" },
  { name: "Anca Florescu", birthdate: "1987-09-12" },
  { name: "Anirudh Agarwal", birthdate: "1991-09-25" },
  { name: "Ankit Somani", birthdate: "1986-09-17" },
  { name: "Arvind Rishi", birthdate: "1983-09-28" },
  { name: "Ashish Vergis", birthdate: "1980-09-15" },
  { name: "Gaurav Arora", birthdate: "1984-09-22" },
  { name: "Gaurav Gupta", birthdate: "1981-09-18" },
  { name: "Gautam Tewari", birthdate: "1978-09-08" },
  { name: "Gautam Vergis", birthdate: "1977-09-02" },
  { name: "Gurpreet Singh", birthdate: "1989-09-11" },
  { name: "Hrishikesh Desai", birthdate: "1976-09-30" },
  { name: "Manish Gupta", birthdate: "1975-09-20" },
  { name: "Mayank Agarwal", birthdate: "1993-09-07" },
  { name: "Naman Parakh", birthdate: "1994-09-03" },
  { name: "Nikhil Tavora", birthdate: "1995-09-14" },
  { name: "Pranab Sharma", birthdate: "1974-09-27" },
  { name: "Rahul Rivankar", birthdate: "1973-09-09" },
  { name: "Rajat Rishi", birthdate: "1972-09-24" },
  { name: "Rajesh Kenkre", birthdate: "1971-09-13" },
  { name: "Rohan Bhandare", birthdate: "1970-09-26" },
  { name: "Rohit Dias", birthdate: "1969-09-04" },
  { name: "Sachin Sumant", birthdate: "1968-09-19" },
  { name: "Sameer Kapur", birthdate: "1967-09-06" },
  { name: "Sanjay Malhotra", birthdate: "1966-09-23" },
  { name: "Sanjay Rodrigues", birthdate: "1965-09-16" },
  { name: "Saurabh Garg", birthdate: "1964-09-29" },
  { name: "Shibani Jain", birthdate: "1963-09-10" },
  { name: "Sourabh Kumar", birthdate: "1962-09-21" },
  { name: "Sumeet Bhobe", birthdate: "1961-09-01" },
  { name: "Sunil Malhotra", birthdate: "1960-09-12" },
  { name: "Sushant Tari", birthdate: "1959-09-25" },
  { name: "Swaroop Naik", birthdate: "1958-09-17" },
  { name: "Ujwal Trikha", birthdate: "1957-09-28" },
  { name: "Vidur Almeida", birthdate: "1956-09-15" },
  { name: "Vikas Jalan", birthdate: "1955-09-22" },
  { name: "Vinesh Pikale", birthdate: "1954-09-18" },
  { name: "Vishal Kenkre", birthdate: "1953-09-08" },
  { name: "Vivek Kerkar", birthdate: "1952-09-02" },
  { name: "Yogesh Arora", birthdate: "1951-09-11" },
];

const events: Event[] = [
  { date: "2025-07-16T18:30:00Z", description: "Board Meeting", organizer: "Ali" },
  { date: "2025-07-30T19:00:00Z", description: "Real Talks: F*Ups That Fueled Us", organizer: "Gaurav" },
  { date: "2025-07-10T10:00:00Z", description: "Learning Workshop: AI for Business Growth" },
  { date: "2025-08-22T10:00:00Z", description: "Learning session with Amit Jain", organizer: "Sourabh" },
  { date: "2025-08-14T19:00:00Z", description: "SLP Social – Scent of a Woman", organizer: "Shibani" },
  { date: "2025-08-20T10:00:00Z", description: "Family Retreat: Fun in the Sun" },
  { date: "2026-04-23T10:00:00Z", description: "Chapter Retreat to MALTA", organizer: "Vidur" },
];

const restaurantOffers: RestaurantOffer[] = [
  { restaurantName: "The Fisherman's Wharf", offer: "15% off on all food items", validity: "2025-12-31" },
  { restaurantName: "Gunpowder", offer: "Complimentary dessert with every main course", validity: "2025-11-30" },
];

const fetchData = async <T>(data: T, delay = 50): Promise<T> => {
  try {
    await new Promise(resolve => setTimeout(resolve, delay));
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data. Please try again later.");
  }
};

export const getMembers = async (): Promise<Member[]> => {
  return fetchData(members);
};

export const getEvents = async (): Promise<Event[]> => {
  return fetchData(events);
};

export const getRestaurantOffers = async (): Promise<RestaurantOffer[]> => {
  return fetchData(restaurantOffers);
};