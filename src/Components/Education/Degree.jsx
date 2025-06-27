import Certificates from "./certificates";

function Degree() {
  return (
    <div className="hiderzoom bg-coolblue-300/40 rounded-2xl pb-6">
      <h1 className="pt-6 text-5xl text-center text-outline font-nue">
        2022 - 2025
      </h1>
      <section className="p-7">
        <h2 className=" text-2xl zoomup font-nue mb-3">B.Sc. Mathematics</h2>
        <p className="ml-4 font-medium tracking-wider font-zilla">
          Bharathidasan University,
          <br />
          St.Joseph's College (Autonomous),
          <br /> Tiruchirappalli-620 002
        </p>
      </section>
      <Certificates />
    </div>
  );
}

export default Degree;
