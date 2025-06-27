import BodyPara from "./HomeBodyPara";
import BodyImage from "./HomeBodyImage";

function Body() {
  return (
    <div className="flex justify-between flex-col md:flex-row w-full h-8/10">
      <BodyPara />
      <div className="hidden md:block w-2/5">
        <BodyImage />
      </div>
    </div>
  );
}

export default Body;
