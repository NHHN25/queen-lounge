// src/pages/Home.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CarouselLux from '../components/CarouselLux';

function Home() {
    return (
        <div>
            {/* HERO SECTION */}
            <div className="hero-banner">
                <img src={`${process.env.PUBLIC_URL}/images/hero.jpg`} alt="Queen Lounge Hero" />
                <div className="hero-overlay">
                    <h1 className="embossed display-4">Thỏa mãn đam mê âm nhạc tại Queen Lounge</h1>
                    <p className="lead">Hotline đặt phòng: 1900 5225</p>
                    <div className="mt-3">
                        <Button href="/booking" className="hero-btn btn-lg me-2">
                            Đặt Phòng
                        </Button>
                    </div>
                </div>
            </div>


            {/* EVENTS CAROUSEL SECTION */}
            <Container className="my-5">
                <h2 className="carousel-heading embossed mb-4">Sự Kiện</h2>
                <CarouselLux />
            </Container>
            {/* ABOUT SECTION */}

            <div className="about-section">
                {/* Left Column: About Image */}
                <div className="about-image d-none d-md-block">
                    <img src={`${process.env.PUBLIC_URL}/images/about.jpg`} alt="About Queen Lounge" />
                </div>
                {/* Right Column: About Text */}
                <div className="about-text">
                    <Container>
                        {/* Upper Row: Introductory Text */}
                        <Row className="mb-4">
                            <Col>
                                <h2 className="embossed text-center">VỀ QUEEN LOUNGE</h2>
                                <p style={{ textAlign: 'center' }}>
                                    Bước vào thế giới của sự sang trọng và tinh tế tại Queen Lounge – nơi mọi chi tiết được chăm chút tỉ mỉ để mang lại trải nghiệm đẳng cấp.
                                    Không gian của chúng tôi kết hợp vẻ đẹp hiện đại với nét cổ điển, tạo nên một bầu không khí ấm cúng và lộng lẫy.
                                </p>
                            </Col>
                        </Row>
                        {/* Lower Row: Two Text Sections */}
                        <Row>
                            <Col md={6}>
                                <h3 className="embossed">Thiết Kế Tinh Tế</h3>
                                <p>
                                    Nội thất của Queen Lounge được thiết kế với sự kết hợp hoàn hảo giữa hiện đại và cổ điển, với những chi tiết vàng tinh xảo và ánh sáng ấm áp, tạo nên một không gian đẳng cấp và mời gọi.
                                </p>
                            </Col>
                            <Col md={6}>
                                <h3 className="embossed">Dịch Vụ Đẳng Cấp</h3>
                                <p>
                                    Đội ngũ nhân viên chuyên nghiệp của chúng tôi luôn sẵn sàng phục vụ bạn, đảm bảo rằng mỗi trải nghiệm tại Queen Lounge đều trở thành kỷ niệm khó quên với sự chăm sóc tận tâm và dịch vụ cá nhân hóa.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default Home;
