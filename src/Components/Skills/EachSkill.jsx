function EachSkill(props) {
  return (
    <div className=" flex justify-center border-b-2 border-b-coolblue-10 pb-2 font-zilla font-bold tracking-wider hiderup  hover:scale-110 transition-all duration-200 delay-50">
      <span className="text-2xl animate-[zoomup_0.2s_ease-in] hover:text-coolblue-200">
        {props.icon}
      </span>
      <span className="ml-2 animate-[zoomup_0.2s_ease-in]">{props.tech}</span>
    </div>
  );
}

export default EachSkill;
