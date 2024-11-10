// src/components/Layout.tsx
import React, { useState } from 'react';
import './layout.css'; // Import the custom CSS file

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] =  useState(false);
  return (
    <div className="bg-custom min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4 text-white">
      {/* Logo Container */}
      <div className="flex items-center">
        <img
          src="/logo.svg" // Replace with your logo path
          alt="Logo"
          className="w-[114px] h-[21px]" // Apply the specified styles
        />
      </div>

      {/* Dropdown and Text - Hidden on Mobile */}
      <div className="hidden md:flex items-center space-x-8">
        <select
          className="bg-transparent text-[#FFFFFF] font-extrabold p-2 border rounded-md shadow-sm border-transparent focus:outline-none focus:ring-2"
        >
          <option value="option1" className="text-[#344054]">채용</option>
          <option value="option2" className="text-[#344054]">해외 개발자 원격 채용</option>
          <option value="option3" className="text-[#344054]">외국인 원격 채용 (비개발 직군)</option>
          <option value="option3" className="text-[#344054]">한국어 가능 외국인 채용</option>
        </select>
        <span
          className="font-poppins text-[16px] font-[900] leading-[24px] text-center underline decoration-transparent"
          style={{
            textDecorationSkipInk: 'none',
            textUnderlinePosition: 'from-font',
          }}
        >
          해외 개발자 활용 서비스
        </span>
      </div>

      {/* Button - Hidden on Mobile */}
      <div className="hidden md:flex">
        <button
          className="w-[104px] h-[36px] bg-white text-gray-800 rounded-l-[8px] rounded-r-[8px] flex items-center justify-center text-[#4A77FF] font-extrabold"
        >
          문의하기
        </button>
      </div>

      {/* Menu Button - Visible on Mobile */}
      <div className="flex md:hidden">
        <button
          className="text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Visible when Menu Button is Clicked */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-center space-y-4 p-4 md:hidden">
          <select
            className="bg-transparent text-[#FFFFFF] font-extrabold p-2 border rounded-md shadow-sm border-transparent focus:outline-none focus:ring-2"
          >
            <option value="option1" className="text-[#344054]">채용</option>
            <option value="option2" className="text-[#344054]">해외 개발자 원격 채용</option>
            <option value="option3" className="text-[#344054]">외국인 원격 채용 (비개발 직군)</option>
            <option value="option3" className="text-[#344054]">한국어 가능 외국인 채용</option>
          </select>
          <span
            className="font-poppins text-[16px] font-[900] leading-[24px] text-center underline decoration-transparent"
            style={{
              textDecorationSkipInk: 'none',
              textUnderlinePosition: 'from-font',
            }}
          >
            해외 개발자 활용 서비스
          </span>
          <button
            className="w-[104px] h-[36px] bg-white text-gray-800 rounded-l-[8px] rounded-r-[8px] flex items-center justify-center text-[#4A77FF] font-extrabold"
          >
            문의하기
          </button>
        </div>
      )}
    </header>

      {/* Main Content */}
      <main className="flex-grow p-4 text-white mt-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#FBFBFB] p-4 text-center h-auto md:h-[450px]">
  <div className="flex flex-col items-center justify-center gap-8 md:gap-16">
    {/* Div 1 */}
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 gap-8 md:gap-28">
      {/* Div 1.1 */}
      <div className="flex flex-col space-y-2 gap-5">
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/footer-logo.png" // Replace with your logo path
            alt="Logo"
            className="w-[187px] h-[34px]" // Apply the specified styles
          />
          <p className='text-[#343741] w-[247px] h-[42px] font-poppins text-[14px] font-[900] leading-[21px] mt-5 text-center md:text-left'>
            우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
          </p>
        </div>
        <div className='flex flex-col gap-3 items-center md:items-start'>
          <span className='text-[#5E626F] text-[13px] font-poppins font-[900] text-center md:text-justify'>
            010-0000-0000
          </span>
          <span className='text-[#5E626F] text-[13px] font-poppins font-[900] text-center md:text-justify'>
            aaaaa@naver.com
          </span>
        </div>
      </div>
      {/* Div 1.2 */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 gap-4 md:gap-0">
        <div className="bg-white p-2 rounded-lg shadow-md flex flex-col p-5">
          <img
            src="/code.png" // Replace with your logo path
            alt="Logo"
            className="w-[40px] h-[40px]" // Apply the specified styles
          />
          <p className='text-[#343741] font-poppins text-[14px] font-[900] leading-[21px] mt-5 text-left'>
            해외 개발자 원격 채용
          </p>
          <p className="text-[#5E626F] font-poppins text-[14px] font-[900] leading-[21px] mt-5 text-left flex items-center gap-x-4">
            바로가기
            <button className="flex items-center justify-center w-6 h-6 rounded-lg shadow-md transition-colors duration-200">
              <img src="/arrow-button.png" alt="Arrow Right" className="w-6 h-6" />
            </button>
          </p>
        </div>
        <div className="bg-white p-2 rounded-lg shadow-md flex flex-col p-5">
          <img
            src="/contact.png" 
            alt="Logo"
            className="w-[40px] h-[40px]" 
          />
          <p className='text-[#343741] font-poppins text-[14px] font-[900] leading-[21px] mt-5 text-left'>
            외국인 원격 채용 (비개발)
          </p>
          <p className="text-[#5E626F] font-poppins text-[14px] font-[900] leading-[21px] mt-5 text-left flex items-center gap-x-4">
            바로가기
            <button className="flex items-center justify-center w-6 h-6 rounded-lg shadow-md transition-colors duration-200">
              <img src="/arrow-button.png" alt="Arrow Right" className="w-6 h-6" />
            </button>
          </p>
        </div>
        <div className="bg-white p-2 rounded-lg shadow-md flex flex-col p-5">
          <img
            src="/KOR.png" // Replace with your logo path
            alt="Logo"
            className="w-[40px] h-[40px]" // Apply the specified styles
          />
          <p className='text-[#343741] font-poppins text-[14px] font-[900] leading-[21px] mt-5 text-left'>
            한국어 가능 외국인 채용
          </p>
          <p className="text-[#5E626F] font-poppins text-[14px] font-[900] leading-[21px] mt-5 text-left flex items-center gap-x-4">
            바로가기
            <button className="flex items-center justify-center w-6 h-6 rounded-lg shadow-md transition-colors duration-200">
              <img src="/arrow-button.png" alt="Arrow Right" className="w-6 h-6" />
            </button>
          </p>
        </div>
        <div className="bg-white p-2 rounded-lg shadow-md flex flex-col p-5">
          <img
            src="/setting.png" // Replace with your logo path
            alt="Logo"
            className="w-[40px] h-[40px]" // Apply the specified styles
          />
          <p className='text-[#343741] font-poppins text-[14px] font-[900] leading-[21px] mt-5 text-left'>
            해외 개발자 활용 서비스
          </p>
          <p className="text-[#5E626F] font-poppins text-[14px] font-[900] leading-[21px] mt-5 text-left flex items-center gap-x-4">
            바로가기
            <button className="flex items-center justify-center w-6 h-6 rounded-lg shadow-md transition-colors duration-200">
              <img src="/arrow-button.png" alt="Arrow Right" className="w-6 h-6" />
            </button>
          </p>
        </div>
      </div>
    </div>
    {/* Div 2 */}
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 gap-8 md:gap-16 items-center md:items-start justify-center">
      <div className='flex flex-col gap-3 items-center md:items-start'>
        <p className='text-[#343741] w-[44px] h-[18px] font-poppins text-[12px] font-[900] leading-[18px] text-left'>
          상호명
        </p>
        <p className='text-[#5E626F] w-[82px] h-[20px] font-poppins text-[13px] font-[900] leading-[18px] text-left'>
          하이퍼하이어
        </p>
        <p className='text-[#343741] w-[212px] h-[20px] font-poppins text-[13px] font-[900] leading-[19.5px] text-left'>
          Hyperhire India Private Limited
        </p>
      </div>
      <div className='flex flex-col gap-3 items-center md:items-start'>
        <p className='text-[#343741] w-[70px] h-[18px] font-poppins text-[12px] font-[900] leading-[18px] text-left'>
          대표 CEO
        </p>
        <p className='text-[#5E626F] w-[46px] h-[20px] font-poppins text-[13px] font-[900] leading-[18px] text-left'>
          김주현      
        </p>
        <p className='text-[#343741] w-[83px] h-[20px] font-poppins text-[13px] font-[900] leading-[19.5px] text-left'>
          Juhyun Kim
        </p>
      </div>
      <div className='flex flex-col gap-3 items-center md:items-start'>
        <p className='text-[#343741] w-[122px] h-[18px] font-poppins text-[12px] font-[900] leading-[18px] text-left'>
          사업자등록번호 CIN
        </p>
        <p className='text-[#5E626F] w-[90px] h-[20px] font-poppins text-[13px] font-[900] leading-[18px] text-left'>
          427-86-01187
        </p>
        <p className='text-[#343741] w-[161px] h-[20px] font-poppins text-[13px] font-[900] leading-[19.5px] text-left'>
          U74110DL2016PTC290812 
        </p>
      </div>
      <div className='flex flex-col gap-3 items-center md:items-start'>
        <p className='text-[#343741] font-poppins w-[100px] h-[18px] text-[12px] font-[900] leading-[18px] text-left'>
          주소 ADDRESS
        </p>
        <p className='text-[#5E626F] font-poppins w-[300px] h-[20px] text-[13px] font-[900] leading-[18px] text-left'>
          서울특별시 강남대로 479, 지하 1층 238호 
        </p>
        <p className='text-[#343741]  w-[200px] lg:w-[455px] h-[40px] font-poppins text-[13px] font-[900] leading-[19.5px] text-left'>
          D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 
          110053 India
        </p>
      </div>
    </div> 
  </div>
  <div className="flex justify-center lg:ml-80 lg:justify-start items-center">
    <p className="text-gray-600 mt-4">ⓒ 2023 Hyperhire</p>
  </div>
</footer>
    </div>
  );
};

export default Layout;