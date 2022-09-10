/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation  } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bg from '../../img/bg.png';
import tshirtBgGreen from '../../img/t1-bg-green.png';
import panthBgYellow from '../../img/p1-bg-yellow.png';
import tshirtBgBlue from '../../img/t2-bg-blue.png';

const ProductList = () => {
	const [click, setClick] = useState(false);

	useEffect(() => {
		const slideImg = document.querySelectorAll('.js-bg-img');
		const bullet = document.querySelectorAll('.swiper-slide-active .swiper-pagination-bullet');
	
		slideImg.forEach((element, index ) => {
			const colorText = slideImg[index].getAttribute('src');
			const color = colorText?.split('bg-')[1].split('.')[0];
			console.log([...bullet][index],"bullet");
			console.log(color,'color');
			if([...bullet][index] !== undefined){
				[...bullet][index].style.backgroundColor = color;
			}
		});
	}, [])

	const clickNext = () => {
		setClick(!click);
	}

    return (
      <Container className="product-list">
				<Row className="left">
					<Col lg={6}>
						<img src={bg} className="bg-img" alt="img" />
					</Col>
					<Col lg={5} className="right">
						<div className="product-list__text">
							<h3>Everyday items, we have something to suit every occasion.</h3>
							<p className='desc'>At suspendisse augue lectus arcu, ut sit posuere vitae sit tincidunt semper eu proin leo gravida cursus.</p>
							<a href={'#'}>
								<p>Shop All Everyday Items</p>
							</a>
						</div>
						<div className="product-list__content">
						<Swiper
							slidesPerView={2.5}
							spaceBetween={30}
							slidesPerGroup={3}
							loop={true}
							loopFillGroupWithBlank={true}
							navigation={true}
							modules={[Navigation]}
							slideChange={clickNext}
							className="mySwiper">
								<SwiperSlide>
									<Swiper
										spaceBetween={30}
										pagination={{
											clickable: true,
										}}
										modules={[Pagination]}
										className="mySwiper1">
										<SwiperSlide>
											<img src={tshirtBgGreen} className="product-img js-bg-img" alt="img" />
											<p>365 Signature hoodie</p>
											<p>$33</p>
										</SwiperSlide>
										<SwiperSlide>
										<img src={panthBgYellow} className="product-img js-bg-img" alt="img" />
											<p>385 Signature pant</p>
											<p>$55</p>
										</SwiperSlide>
										<SwiperSlide>
										<img src={tshirtBgBlue} className="product-img js-bg-img" alt="img" />
											<p>385 Signature pant</p>
											<p>$55</p>
										</SwiperSlide>
										<SwiperSlide>
										<img src={tshirtBgGreen} className="product-img js-bg-img" alt="img" />
											<p>385 Signature pant</p>
											<p>$55</p>
										</SwiperSlide>
									</Swiper>
								</SwiperSlide>
								<SwiperSlide>
									<Swiper
										spaceBetween={30}
										pagination={{
											clickable: true,
										}}
										modules={[Pagination]}
										className="mySwiper2">
										<SwiperSlide>
											<img src={panthBgYellow} className="product-img js-bg-img" alt="img" />
											<p>385 Signature pant</p>
											<p>$55</p>
										</SwiperSlide>
										<SwiperSlide>Slide 2</SwiperSlide>
										<SwiperSlide>Slide 3</SwiperSlide>
										<SwiperSlide>Slide 4</SwiperSlide>
									</Swiper>
								</SwiperSlide>
								<SwiperSlide>
									<Swiper
										spaceBetween={30}
										pagination={{
											clickable: true,
										}}
										modules={[Pagination]}
										className="mySwiper3">
										<SwiperSlide>
											<img src={tshirtBgBlue} className="product-img" alt="img" />
											<p>455 Signature hoodie</p>
											<p>$43</p>
										</SwiperSlide>
										<SwiperSlide>Slide 2</SwiperSlide>
										<SwiperSlide>Slide 3</SwiperSlide>
										<SwiperSlide>Slide 4</SwiperSlide>
									</Swiper>
								</SwiperSlide>
							</Swiper>
							</div>
						</Col>
				</Row>
			</Container>
    );
  }
  export {ProductList};