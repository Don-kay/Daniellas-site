import React, { useState } from "react";
import "./map-intg.css";
import { testimonialImg } from "../../data component/data";
import ceo from "../../assets/img5.jpg";
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper";
// , Scrollbar, A11y, Navigation,
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import 'swiper/css/scrollbar';
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Map = () => {
  return (
    <main className="map-main">
      <section className="testimonial-cont">
        <h2
          style={{
            position: "relative",
            top: "0vh",
            left: "-6%",
            color: "white",
            fontSize: "40px",

            zIndex: "10",
          }}
        >
          What people say about Us
        </h2>
        <Swiper
          className="test-article"
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {testimonialImg.map((item, idx) => {
            return (
              <SwiperSlide>
                <div key={idx} className="testimonial">
                  <img src={item.img} alt="img" className="testimonialImg" />
                  <div className="testtxt">
                    <h2 className="testifier">{item.header}</h2>
                    <p className="testimonial-txt">{item.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      <div className="testHov"></div>
      <img src="../IMG_20210712_103541_940.jpg" alt="" className="fadeimg" />
    </main>
  );
};

export default Map;

// import { ListDetails } from "../../data component/data";
// import ReactPaginate from "react-paginate";
// const Map = () => {
//   const [list, SetList] = useState(ListDetails.slice(0, 5));
//   const [pagenumber, setPagenumber] = useState(0);
//   const listPerpage = 5;
//   const pagesVisited = pagenumber * listPerpage;

//   const displayList = list
//     .slice(pagesVisited, pagesVisited + listPerpage)
//     .map((list) => {
//       return (
//         <section className="map-cont">
//           <div className="post">{list.icon}</div>
//           <div className="map">{list.header}</div>
//         </section>
//       );
//     });

//   const pageCount = Math.ceil(list.length / listPerpage);
//   const changePage = ({ selected }) => {
//     setPagenumber(selected);
//   };
//   return (
//     <div className="map-main">
//       <ReactPaginate
//         previousLabel={"Previous"}
//         nextLabel={"Next"}
//         pageCount={pageCount}
//         onPageChange={changePage}
//         containerClassName={"pagin-btn"}
//         previousLinkClassName={"prev-btn"}
//         nextLinkClassName={"next-btn"}
//         disabledClassName={"pagin-desbaled"}
//         activeClassName={"pagin-active"}
//       />
//       <div>{displayList}</div>
//     </div>
//   );
// };
