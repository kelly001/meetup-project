import MeetupList from "../components/meetups/MeetupList"

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.zugeschnitten.jpg/1024px-Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.zugeschnitten.jpg',
    address: 'Some address 5, 12345 Some City'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.zugeschnitten.jpg/1024px-Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.zugeschnitten.jpg',
    address: 'Some address 10, 12345 Some City'
  }
]

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS}/>
}

export default HomePage;