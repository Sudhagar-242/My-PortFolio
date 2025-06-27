function OnProjectTech(props) {
  return (
    <a
      key={props.id}
      className={`bg-coolblue-400/30 text-coolblue-300 font-medium  ${props.className}`}
    >
      {props.children}
    </a>
  );
}

export default OnProjectTech;
