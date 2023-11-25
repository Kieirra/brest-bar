import Header from "@/components/common/organisms/header";
import ExplorerTitle from "@/components/features/explorer/molecules/explorer-title";
import BarList from "@/components/features/explorer/organisms/bar-list/bar-list";
import DrinkCategory from "@/components/features/explorer/organisms/drink-category/drink-category";
import BarsMap from "@/components/features/interactive-map/organisms/bars-map/bars-map";

const Home = async () => {
    return (
        <div className="relative overflow-hidden">
            <div className="absolute left-0 top-20 z-10 overflow-y-auto h-[calc(100vh-5rem)] scrollbar-thin scrollbar-thumb-primary-500 scrollbar-track-ngrey-900">
                <ExplorerTitle />
                <DrinkCategory className="border-ngrey-500 border-y-2" />
                <BarList />
            </div>
            <BarsMap className="z-0" />
        </div>
    );
};

export default Home;
