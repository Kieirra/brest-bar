import Block from "@/components/features/explorer/atoms/block";
import TextGradient from "@/components/common/atoms/text-gradient";

const ExplorerHeader = () => {
    return (
        <Block>
            <h1 className="text-4xl text-white">
                Trouver le bar qu'il vous faut <TextGradient>selon votre humeur</TextGradient>
            </h1>
        </Block>
    );
};

export default ExplorerHeader;
