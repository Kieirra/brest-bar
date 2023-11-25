import Header from "@/components/common/organisms/header";
import ExplorerTitle from "@/components/features/explorer/molecules/explorer-title";
import BarList from "@/components/features/explorer/organisms/bar-list/bar-list";
import DrinkCategory from "@/components/features/explorer/organisms/drink-category/drink-category";
import BarsMap from "@/components/features/interactive-map/organisms/bars-map/bars-map";

const Home = async () => {
    return (
        <main className="relative overflow-hidden">
            <Header className="absolute top-0 w-screen z-10 h-20"/>
            <div className="absolute left-0 top-0 z-10 mt-20 overflow-y-auto">
                <ExplorerTitle />
                <DrinkCategory className="border-ngrey-500 border-y-2" />
                <BarList />
            </div>
            <BarsMap className="z-0" />
        </main>
    );
};

export default Home;
