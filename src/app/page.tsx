import BarList from "@/components/features/explorer/organisms/bar-list/bar-list";
import BarsMap from "@/components/features/interactive-map/organisms/bars-map/bars-map";

const Home = async () => {
    return (
        <main className="relative overflow-hidden">
            <BarList className="absolute left-0 top-0 z-10" />
            <BarsMap className="z-0"/>
        </main>
    );
};

export default Home;
