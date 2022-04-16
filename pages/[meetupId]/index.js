import MeetupItem from "../../components/meetups/MeetupItem"

const MEETUP = {
  id: 'm2',
  title: 'A Second Meetup',
  image: 'https://ru.wikipedia.org/wiki/%D0%9C%D1%8E%D0%BD%D1%85%D0%B5%D0%BD#/media/%D0%A4%D0%B0%D0%B9%D0%BB:Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.zugeschnitten.jpg',
  address: 'Some address 10, 12345 Some City'
}

function DetailPage() {
  return <MeetupItem />
}

export default DetailPage;