import Header from "../../components/Header";
import Hero from "./Hero";
import "../../css/Layout.css"
import CategorySide from "./CategorySlide";
import DestinationSide from "./DestinationSlide";
import PlanSection from "./PlanSection";
import PopularSlide from "./PopularSlide";
import RecentSection from "./RecentSection";
import TourGuide from "./TourGuide";
import Testimonial from "./Testimonial";
import TourmSection from "./TourmSection";
import Footer from "../../components/Footer";

export default function HomePage(){
return(
    <>
    <div className="A1">
         <Header/>
    <Hero/>
    <CategorySide/>
    <DestinationSide/>
    <PlanSection/>
    <PopularSlide/>
    <RecentSection/>
    <TourGuide/>
    <Testimonial/>
    <TourmSection/>
    <Footer/>
    </div>
    </>
)
}