
import Carouselpage  from "@/components/carousel/carousel";
import Rates from "@/components/rates";
import HomeProducts from "@/components/homeProducts";
import Description from "@/components/description/description";


export default function Home() {
  return (
    <>
    <Carouselpage />
    <div className="p-4">
      <HomeProducts />
    </div>
    <Rates />
    <Description />
    </>
  );
}
