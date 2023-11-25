import ExplorerTitle from "@/components/features/explorer/molecules/explorer-title";
import BarList from "@/components/features/explorer/organisms/bar-list/bar-list";
import DrinkCategory from "@/components/features/explorer/organisms/drink-category/drink-category";
import BarsMap from "@/components/features/interactive-map/organisms/bars-map/bars-map";

const Home = async () => {
    return (
        <main className="relative overflow-hidden">
            <div className="absolute left-0 top-0 z-10">
                <ExplorerTitle />
                <DrinkCategory className='border-ngrey-500 border-y-2' />
                <BarList />
            </div>
            <BarsMap className="z-0" />
        </main>
    );
};

export default Home;
