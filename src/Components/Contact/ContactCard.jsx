function ContactCard(props) {
  return (
    <div>
      <a
        className="text-4xl text-coolblue-500 hover:text-coolblue-200 transition-all "
        href={props.href}
      >
        {props.icon}
      </a>
    </div>
  );
}

export default ContactCard;
