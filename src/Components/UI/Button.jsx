function ButtonAnimation(props) {
  return (
    <button
      className={`group relative flex items-center rounded overflow-hidden ${props.className} `}
    >
      <a
        href={props.href}
        className={`flex-shrink-0 transition-all duration-700 h-full ease-in-out w-0 group-hover:w-full box-border py-4 ${props.scrollcolor}`}
      >
        <span
          className={`inline-block delay-1000 group-hover:animate-bounce h-full pt-2 ${props.iconstyle} `}
        >
          {props.icon}
        </span>
      </a>
      <a
        href={props.href}
        className={`ml-2 transition-all duration-500 ease-in-out w-full h-full group-hover:w-0 overflow-hidden text-nowrap ${props.typestyle}`}
      >
        {props.type}
      </a>
    </button>
  );
}

export default ButtonAnimation;
