// src/components/CarouselLux.js
import React from 'react';
import Slider from "react-slick";
import { Card, Button } from 'react-bootstrap';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const eventsData = [
  {
    id: 1,
    image: '/images/carou1.jpg',
    title: 'Gala Night Extravaganza',
    description: 'Join us for an unforgettable evening of music, dance, and opulence.',
  },
  {
    id: 2,
    image: '/images/carou2.jpg',
    title: 'Live DJ Session',
    description: 'Experience electrifying beats from top DJs in a luxurious setting.',
  },
  {
    id: 3,
    image: '/images/carou3.jpg',
    title: 'VIP Lounge Party',
    description: 'Exclusive access to our VIP lounge with premium services and surprises.',
  },
  {
    id: 4,
    image: '/images/carou4.jpg',
    title: 'Karaoke Star Night',
    description: 'Showcase your talent in our star-studded karaoke event.',
  },
  {
    id: 5,
    image: '/images/carou5.jpg',
    title: 'Champagne Celebration',
    description: 'Toast to success with champagne, music, and glamour.',
  },
  {
    id: 6,
    image: '/images/carou6.jpg',
    title: 'Themed Costume Party',
    description: 'Immerse yourself in a fantastical themed party with extravagant decor.',
  },
  {
    id: 7,
    image: '/images/carou7.jpg',
    title: 'Acoustic Evening',
    description: 'Enjoy a relaxed, intimate acoustic performance.',
  },
  {
    id: 8,
    image: '/images/carou8.jpg',
    title: 'Dance Floor Fever',
    description: 'Get ready to groove with energetic performances and pulsating music.',
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4, // Desktop: scroll in chunks of 4 => 2 pages for 8 items.
  swipeToSlide: true,
  draggable: true,
  arrows: false,
  swipe: true,
  rtl: false,
  responsive: [
    {
      breakpoint: 992, // Tablet view
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576, // Mobile view
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

function CarouselLux() {
  return (
    <Slider {...settings}>
      {eventsData.map(event => (
        <div key={event.id} className="px-2">
          <Card className="event-card">
            <div style={{ position: 'relative' }}>
              <Card.Img variant="top" src={event.image} alt={event.title} />
              <div className="event-overlay">
                <Button href="/booking" className="event-btn">
                  Book Now
                </Button>
              </div>
            </div>
            <Card.Body>
              <Card.Title className="embossed">{event.title}</Card.Title>
              <Card.Text style={{ fontSize: '1rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {event.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </Slider>
  );
}

export default CarouselLux;
