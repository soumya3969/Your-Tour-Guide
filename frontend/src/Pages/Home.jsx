import React from "react";
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png'
import Subtitle from "../shared/Subtitle";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";



const Home = () => {
    return <>

        {/* hero section start */}
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="hero__content">
                            <div className="hero__subtitle d-flex align-items-center">
                                <Subtitle subtitle={'Know Before You Go'} />
                                <img src={worldImg} alt="" />
                            </div>
                            <h1>Travelling opens the door to creating <span className="highlight"> memories</span> </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores id similique obcaecati pariatur quas asperiores quibusdam voluptatum corporis dicta. Fugit sequi quis enim! Tempore accusamus reprehenderit corporis odit. Beatae, libero.</p>
                        </div>
                    </Col>


                    <Col lg='2'>
                        <div className="hero__img-box">
                            <img src={heroImg} alt="" />
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box mt-4">
                            <video src={heroVideo} alt="" controls />
                        </div>
                    </Col>
                    <Col lg='2'>
                        <div className="hero__img-box mt-5">
                            <img src={heroImg02} alt="" />
                        </div>
                    </Col>

                    <SearchBar />
                </Row>
            </Container>
        </section>
        {/* hero section end */}
        <section>
            <Container>
                <Row>
                    <Col lg='3'>
                        <h5 className="services__subtitle">What we Serve</h5>
                        <h2 className="services__title">We Offer Our Best Services</h2>
                    </Col>
                    <ServiceList />
                </Row>
            </Container>
        </section>


        {/*====== Featured tour section start=======   */}

        <section>
            <Container>
                <Row>
                    <Col lg='12' className="mb-5">
                        <Subtitle subtitle={'Explore'} />
                        <h2 className="featured__tour-title">Our Featured Tours</h2>
                    </Col>
                    <FeaturedTourList />
                </Row>
            </Container>
        </section>


        {/*====== Featured tour section End=======   */}
        {/*====== Experience section start =======   */}
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="experience__content">
                            <Subtitle subtitle={'Experience'} />

                            <h2>With Our All Experience <br /> We Will Serve You .
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                <br />
                                Molestias totam neque quas, ut rerum voluptatem?
                            </p>
                        </div>

                        <div className="counter_wrapper d-flex align-items-center gap-5">
                            <div className="counter__box">
                                <span>12k+</span>
                                <h6>Successful Trip</h6>
                            </div>
                            <div className="counter__box">
                                <span>2k+</span>
                                <h6>Regular Clients</h6>
                            </div>
                            <div className="counter__box">
                                <span>15</span>
                                <h6>Years Experience</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg='6'></Col>
                </Row>
            </Container>
        </section>
        {/*====== Experience section end =======   */}

    </>;
};
export default Home;