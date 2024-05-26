import React from "react";
import "../HomePage/HomePage.css";
import Accordion from "../../Components/Accordion/Accordion";
import FooterComp from "../../Components/Footer";

const HomePage = () => {
  return (
    <>
      
      <div className="banner mx-28 my-12 rounded-xl h-[400px] flex gap-60">
        <div className="flex flex-col justify-center hover:cursor-pointer">
          <span className=" w-fit rounded-3xl bg-blue-600 text-white text-xs p-2 my-3">
            Introducing Gift Mode
          </span>
          <p className=" text-[44px] max-w-[450px] leading-tight">
            Extra-special gifting made extra-easy
          </p>
          <a
            href=""
            className=" font-semibold bg-black text-white w-fit p-3 rounded-[26px] tracking-wide my-3"
          >
            Shop now
          </a>
        </div>
        <div className="flex gap-5 overflow-hidden">
          <div className="w-[144px] h-[192px] mb-3 carouselverticalone verticalcolumnone">
            <a href="">
              <div className="mb-[8px] p-[12px] bg-emerald-700 rounded-[16px] tracking-[.08px] text-[16px] font-semibold">
                <p>
                  The <br /> Jewellery Lover
                </p>
                <img
                  className=" rounded-b-md br-clip mt-3"
                  src="https://i.etsystatic.com/ij/0d9581/5641434707/ij_280x280.5641434707_r63uvp56.jpg?version=0"
                  alt=""
                />
              </div>
            </a>
            <a href="">
              <div className="mb-[8px] p-[12px] bg-cyan-500 rounded-[16px] tracking-[.08px] text-[16px] font-semibold">
                <p>
                  The <br /> Knitter
                </p>
                <img
                  className=" rounded-b-md br-clip mt-3"
                  src="https://i.etsystatic.com/ij/9a0203/5641431087/ij_280x280.5641431087_76v1c80f.jpg?version=0"
                  alt=""
                />
              </div>
            </a>
            <a href="">
              <div className="mb-[8px] p-[12px] bg-amber-400 rounded-[16px] tracking-[.08px] text-[16px] font-semibold">
                <p>
                  The <br /> Dog Lover
                </p>
                <img
                  className=" rounded-b-md br-clip mt-3"
                  src="https://i.etsystatic.com/ij/226d47/5593382180/ij_280x280.5593382180_85xoxdj7.jpg?version=0"
                  alt=""
                />
              </div>
            </a>
            <a href="">
              <div className="mb-[8px] p-[12px] bg-orange-400 rounded-[16px] tracking-[.08px] text-[16px] font-semibold">
                <p>
                  The <br /> Cat Lover
                </p>
                <img
                  className=" rounded-b-md br-clip mt-3"
                  src="https://i.etsystatic.com/ij/e87972/5593424382/ij_280x280.5593424382_mebvsbop.jpg?version=0"
                  alt=""
                />
              </div>
            </a>
            <a href="">
              <div className="mb-[8px] p-[12px] bg-lime-400 rounded-[16px] tracking-[.08px] text-[16px] font-semibold">
                <p>
                  The <br /> Music Lover
                </p>
                <img
                  className=" rounded-b-md br-clip mt-3"
                  src="https://i.etsystatic.com/ij/3d6d76/5641412795/ij_280x280.5641412795_m2knvsja.jpg?version=0"
                  alt=""
                />
              </div>
            </a>
          </div>

          <div className="w-[144px] h-[192px] mb-3 carouselverticaltwo verticalcolumntwo">
            <a href="">
              <div className="mb-[8px] p-[12px] bg-amber-400 rounded-[16px] tracking-[.08px] text-[16px] font-semibold">
                <p>
                  The <br /> Bird Watcher
                </p>
                <img
                  className=" rounded-b-md br-clip mt-3"
                  src="https://i.etsystatic.com/ij/28f0d5/5641631159/ij_280x280.5641631159_rgochv54.jpg?version=0"
                  alt=""
                />
              </div>
            </a>
            <a href="">
              <div className="mb-[8px] p-[12px] bg-lime-400 rounded-[16px] tracking-[.08px] text-[16px] font-semibold">
                <p>
                  The <br /> Host
                </p>
                <img
                  className=" rounded-b-md br-clip mt-3"
                  src="https://i.etsystatic.com/ij/7c051c/5593362706/ij_280x280.5593362706_fu9skt0z.jpg?version=0"
                  alt=""
                />
              </div>
            </a>
            <a href="">
              <div className="mb-[8px] p-[12px] bg-cyan-500 rounded-[16px] tracking-[.08px] text-[16px] font-semibold">
                <p>
                  The <br /> Mixologist
                </p>
                <img
                  className=" rounded-b-md br-clip mt-3"
                  src="https://i.etsystatic.com/ij/35c69a/5593320600/ij_280x280.5593320600_klepxam0.jpg?version=0"
                  alt=""
                />
              </div>
            </a>
            <a href="">
              <div className="mb-[8px] p-[12px] bg-emerald-700 rounded-[16px] tracking-[.08px] text-[16px] font-semibold">
                <p>
                  The <br /> Pickleball Player
                </p>
                <img
                  className=" rounded-b-md br-clip mt-3"
                  src="https://i.etsystatic.com/ij/9fbd28/5574099502/ij_280x280.5574099502_ouxvnolq.jpg?version=0"
                  alt=""
                />
              </div>
            </a>
            <a href="">
              <div className="mb-[8px] p-[12px] bg-orange-400 rounded-[16px] tracking-[.08px] text-[16px] font-semibold">
                <p>
                  The <br /> Beauty Guru
                </p>
                <img
                  className=" rounded-b-md br-clip mt-3"
                  src="https://i.etsystatic.com/ij/5095f7/5641634957/ij_280x280.5641634957_chcv6wwz.jpg?version=0"
                  alt=""
                />
              </div>
            </a>
          </div>
          <div className="w-[144px] h-[192px] mb-3 carouselverticalone verticalcolumnone">
            <a href="">
              <div className="mb-[8px] p-[12px] bg-orange-400 rounded-[16px] tracking-[.08px] text-[16px] font-semibold">
                <p>
                  The <br /> Maximalist
                </p>
                <img
                  className=" rounded-b-md br-clip mt-3"
                  src="https://i.etsystatic.com/ij/610a00/5641428455/ij_280x280.5641428455_r1tti896.jpg?version=0"
                  alt=""
                />
              </div>
            </a>
            <a href="">
              <div className="mb-[8px] p-[12px] bg-cyan-500 rounded-[16px] tracking-[.08px] text-[16px] font-semibold">
                <p>
                  The <br /> Toddler
                </p>
                <img
                  className=" rounded-b-md br-clip mt-3"
                  src="https://i.etsystatic.com/ij/ae8e29/5641402225/ij_280x280.5641402225_cmos5477.jpg?version=0"
                  alt=""
                />
              </div>
            </a>
            <a href="">
              <div className="mb-[8px] p-[12px]  bg-lime-400 rounded-[16px] tracking-[.08px] text-[16px] font-semibold">
                <p>
                  The <br /> Newlywed
                </p>
                <img
                  className=" rounded-b-md br-clip mt-3"
                  src="https://i.etsystatic.com/ij/eb8d43/5593304680/ij_280x280.5593304680_4efo13nw.jpg?version=0"
                  alt=""
                />
              </div>
            </a>
            <a href="">
              <div className="mb-[8px] p-[12px]   bg-amber-400 rounded-[16px] tracking-[.08px] text-[16px] font-semibold">
                <p>
                  The <br /> Globetrotter
                </p>
                <img
                  className=" rounded-b-md br-clip mt-3"
                  src="https://i.etsystatic.com/ij/63a394/5641470151/ij_280x280.5641470151_g57lti7g.jpg?version=0"
                  alt=""
                />
              </div>
            </a>
            <a href="">
              <div className="mb-[8px] p-[12px] bg-emerald-700 rounded-[16px] tracking-[.08px] text-[16px] font-semibold">
                <p>
                  The <br /> Pisces
                </p>
                <img
                  className=" rounded-b-md br-clip mt-3"
                  src="https://i.etsystatic.com/ij/4567e7/5641406421/ij_280x280.5641406421_99a11g0i.jpg?version=0"
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="special mx-52 my-24">
        <h3 className=" font-bold text-3xl text-center">
          Small shops make every moment more special!
        </h3>
        <div className="flex gap-10 py-10">
          <div className="">
            <a href="">
              <img
                className=" rounded-full"
                src="https://i.etsystatic.com/ij/800c54/5981356668/ij_300x300.5981356668_biswxvgg.jpg?version=0"
                alt=""
              />
              <p className=" text-center pt-2 font-semibold">Gifts for Dad</p>
            </a>
          </div>
          <div>
            <a href="">
              <img
                className=" rounded-full"
                src="https://i.etsystatic.com/22881962/r/il/197d79/2691663280/il_300x300.2691663280_dwfk.jpg"
                alt=""
              />
              <p className=" text-center pt-2 font-semibold">Birthday Gifts</p>
            </a>
          </div>
          <div>
            <a href="">
              <img
                className=" rounded-full"
                src="https://i.etsystatic.com/6748817/c/2000/2000/0/554/il/56460b/2797375167/il_300x300.2797375167_iqqg.jpg"
                alt=""
              />
              <p className=" text-center pt-2 font-semibold">
                Anniversary Gifts
              </p>
            </a>
          </div>
          <div>
            <a href="">
              <img
                className=" rounded-full"
                src="https://i.etsystatic.com/6748817/r/il/3f8f04/2462639893/il_300x300.2462639893_jtmq.jpg"
                alt=""
              />
              <p className=" text-center pt-2 font-semibold">
                Wedding & Engagement Gifts
              </p>
            </a>
          </div>
          <div>
            <a href="">
              <img
                className=" rounded-full"
                src="https://i.etsystatic.com/15777598/r/il/8dc8bc/2240530050/il_300x300.2240530050_4zyb.jpg"
                alt=""
              />
              <p className=" text-center pt-2 font-semibold">Home Gifts</p>
            </a>
          </div>
          <div>
            <a href="">
              <img
                className=" rounded-full"
                src="https://i.etsystatic.com/13722199/r/il/291260/5559365546/il_300x300.5559365546_ru1a.jpg"
                alt=""
              />
              <p className=" text-center pt-2 font-semibold">
                Up to 30% Off. Terms apply
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className=" bg-yellow-100 mb-9">
        <h2 className=" font-bold text-4xl text-center py-[45px]">
          What is Etsy India?
        </h2>
        <Accordion />
      </div>

      <FooterComp />
    </>
  );
};

export default HomePage;
