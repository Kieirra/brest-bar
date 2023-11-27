import BarsMap from "@/components/features/interactive-map/organisms/bars-map/bars-map";
import ExplorerPanel from "@/components/features/explorer/organisms/explorer-panel/explorer-panel";

const Home = () => {
    return (
        <div className="relative overflow-hidden">
            <ExplorerPanel className="absolute left-0 top-20" />
            <BarsMap className="z-0" />
        </div>
    );
};

export default Home;
