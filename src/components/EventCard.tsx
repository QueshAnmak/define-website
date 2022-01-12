import '../styles/event-card.scss'

export default function EventCard() {
    return (
        <div className="event-card">
            <img className='event-card-image'
                src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg"
                alt="event_cover_image" loading="lazy" />
            <div className="event-card-info">
                <h2>SPIDERMAN: NO WAY HOME</h2>
                spiderman ghum hogya
            </div>
        </div>
    );
}