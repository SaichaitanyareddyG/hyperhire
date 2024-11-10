"use client";
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // 300ms delay

    return () => clearTimeout(timer);
  }, []);

  const movingArray = [
    { img: '/market.png', description: '해외 마케팅' },
    { img: '/image.png', description: '퍼블리셔' },
    { img: '/rhombus.png', description: '캐드원(제도사)' },
    { img: 'target.png', description: '해외 세일즈' },
    { img: 'call.png', description: '영업팀에 문의' },
  ];

  const cardData = [
    {
      imageSrc: 'bg-img.png',
      name: 'Abhishek Gupta',
      role: '마케팅 - 2y+',
      description: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    },
    {
      imageSrc: 'bg-img.png',
      name: 'Jane Doe',
      role: '개발자 - 3y+',
      description: ['프론트엔드 개발', '백엔드 개발', '데이터베이스 관리', 'API 통합'],
    },
    {
      imageSrc: 'bg-img.png',
      name: 'John Smith',
      role: '디자이너 - 4y+',
      description: ['UI/UX 디자인', '그래픽 디자인', '프로토타이핑', '사용자 테스트'],
    },
    {
      imageSrc: 'bg-img.png',
      name: 'Emily Johnson',
      role: '프로젝트 매니저 - 5y+',
      description: ['프로젝트 계획', '팀 관리', '리소스 할당', '위험 관리'],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === movingArray.length ? 0 : prevIndex + 1
      );
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <section className="max-w-7xl mx-auto p-4">
        <div
          className={`relative lg:bg-[#E9F7EF] bg-[#8BC4FF] lg:text-[#40E2E8] rounded-lg p-4 shadow-md chat-bubble inline-block ${isVisible ? 'fade-in' : 'opacity-0'}`}
        >
          풀타임, 파트타임
        </div>

        <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 gap-4 mt-4">
          {/* Left Side */}
          <div className="flex flex-col space-y-4 w-full md:w-1/2">
            {/* Step 1 */}
            <div className={`p-4 rounded-lg ${isVisible ? 'fade-in-delay' : 'opacity-0'} w-full md:w-[581px]`}>
              <p className="font-poppins lg:text-[24px] text-[36px] font-[900] lg:leading-[34px] leading-[46.8px] text-left underline decoration-transparent" style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
                최고의 실력을 가진<br />
                외국인 인재를 찾고 계신가요?
              </p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col space-x-0 md:space-x-4">
              <div className={`p-4 rounded-lg flex-1 ${isVisible ? 'fade-in-delay' : 'opacity-0'}`}>
                <p className="font-poppins text-[18px] md:text-[24px] font-[900] leading-[27px] md:leading-[34px] text-left underline decoration-transparent" style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
                  법률 및 인사관리 부담없이<br />
                  1주일 이내에 원격으로 채용해보세요.
                </p>
              </div>
              <div className={`p-4 rounded-lg flex-1 ${isVisible ? 'fade-in-delay' : 'opacity-0'} hidden md:block`}>
                <p className="font-poppins text-[18px] text-[#FBFF23] lg:text-[#FFFFFF] font-[900] leading-[27px] text-left underline decoration-solid" style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
                  개발자가 필요하신가요?
                </p>
              </div>
            </div>
            {/* Step 3 - Hidden on Mobile */}
            <div className={`p-4 rounded-lg ${isVisible ? 'fade-in-delay' : 'opacity-0'} hidden md:block`} style={{ width: '100%', maxWidth: '579px', height: '115px', gap: '48px' }}>
              <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 pt-4">
                <div className="flex-1">
                  <div className="flex flex-col space-y-2 border-t border-gray-300 pt-4">
                    <div className="font-poppins text-[18px] font-[900] leading-[27px] text-left underline decoration-transparent" style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
                      평균 월 120만원
                    </div>
                    <div className="font-poppins text-[16px] font-[900] leading-[24px] text-opacity-80 text-left underline decoration-transparent" style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
                      임금을 해당 국가를 기준으로 계산합니다.
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col space-y-2 border-t border-gray-300 pt-4">
                    <div className="font-poppins text-[18px] font-[900] leading-[27px] text-left underline decoration-transparent" style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
                      최대 3회 인력교체
                    </div>
                    <div className="font-poppins text-[16px] font-[900] text-opacity-80 leading-[24px] text-left underline decoration-transparent" style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
                      막상 채용해보니 맞지 않아도 걱정하지 마세요.
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col space-y-2 border-t border-gray-300 pt-4">
                    <div className="font-poppins text-[18px] font-[900] leading-[27px] text-left underline decoration-transparent" style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
                      평균 3일, 최대 10일
                    </div>
                    <div className="font-poppins text-[16px] font-[900] text-opacity-80 leading-[24px] text-left underline decoration-transparent" style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
                      급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side with Slider */}
          <div className="relative w-full md:w-1/2 overflow-hidden">
            <div
              className={`relative bg-[#E9F7EF] text-[#00C696] mb-8 ml-14 lg:ml-52 w-[200px]  text-[18px] rounded-lg p-4 shadow-md chat-bubble-dollar inline-block ${isVisible ? 'fade-in' : 'opacity-0'}`}
            >
              <div className="flex items-center justify-center">
                <img src={`/dollar.png`} alt={`Dollar`} className="w-7 h-7 rounded-full mr-2" />
                <span>월 100만원</span>
              </div>
            </div>
            <Swiper
              modules={[Navigation, EffectCoverflow]}
              navigation
              loop={true}
              centeredSlides={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
              effect="coverflow"
              coverflowEffect={{
                rotate: 0,
                stretch: 500, // Adjust this for horizontal spacing
                depth: 200, // Increase depth for 3D effect
                modifier: 1, // Modify effect intensity
                slideShadows: false,
              }}
            >
              {cardData.map((card, index) => (
                <SwiperSlide key={index}>
                  <Card
                    imageSrc={card.imageSrc}
                    name={card.name}
                    role={card.role}
                    description={card.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Moving Divs - Hidden on Mobile */}
        <div className="moving-container mt-16 overflow-hidden hidden md:block">
          <div
            className="moving-divs"
            style={{
              transform: `translateX(-${currentIndex * 332}px)`,
              transition: 'transform 1s ease-in-out',
            }}
          >
            {movingArray.concat(movingArray).map((item, index) => (
              <div
                key={index}
                className="moving-div bg-[#FFFFFF33] w-[300px] h-[66px] p-4 rounded-tl-lg flex items-center gap-6 mx-4"
              >
                <img src={item.img} alt={`Image ${index + 1}`} className="w-12 h-12 rounded-full" />
                <p className="font-poppins text-[16px] font-[900] leading-[24px] text-gray-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Text for Mobile */}
        <div className={`p-4 rounded-lg flex-1 ${isVisible ? 'fade-in-delay' : 'opacity-0'} md:hidden`}>
          <p className="font-poppins text-[18px] text-[#FBFF23] lg:text-[#FFFFFF] font-[900] leading-[27px] text-left underline decoration-solid" style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
            개발자가 필요하신가요?
          </p>
        </div>
        <div className={`p-4 rounded-lg flex-1 ${isVisible ? 'fade-in-delay' : 'opacity-0'} md:hidden`}>
          <div className="flex flex-wrap">
            <div className="w-1/2 p-2 flex items-center">
            <input type="checkbox" className="custom-checkbox mr-2" checked readOnly />
            <p className="font-poppins text-[16px] font-[900] leading-[24px] text-left underline decoration-transparent" style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
              한국어 능력
              </p>
            </div>
            <div className="w-1/2 p-2 flex items-center">
            <input type="checkbox" className="custom-checkbox mr-2" checked readOnly />
            <p className="font-poppins text-[16px] font-[900] leading-[24px] text-left underline decoration-transparent" style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
              업무 수행 능력
              </p>
            </div>
            <div className="w-1/2 p-2 flex items-center">
            <input type="checkbox" className="custom-checkbox mr-2" checked readOnly />

              <p className="font-poppins text-[16px] font-[900] leading-[24px] text-left underline decoration-transparent" style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
              겸업 여부
              </p>
            </div>
            <div className="w-1/2 p-2 flex items-center">
            <input type="checkbox" className="custom-checkbox mr-2" checked readOnly />
            <p className="font-poppins text-[16px] font-[900] leading-[24px] text-left underline decoration-transparent" style={{ textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
              평판 조회
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;