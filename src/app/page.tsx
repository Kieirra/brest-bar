import BarList from "@/components/features/explorer/organisms/bar-list";
import BarsMap from "@/components/features/interactive-map/organisms/bars-map";

const Home = async () => {
    return (
        <main className="relative">
            <div className="absolute left-0 top-0">
                <BarList />
            </div>
            <div className="relative -z-10">
                <BarsMap />
            </div>
        </main>
    );
};

export default Home;
