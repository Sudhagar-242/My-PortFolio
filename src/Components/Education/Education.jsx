import Degree from "./Degree";

function Education() {
  return (
    <section
      className="md:flex md:p-10 md:min-h-screen items-center bg-coolblue-300/10 text-coolblue-400"
      id="Education"
    >
      <section className="md:w-[60%] hiderup">
        <h1 className="text-6xl font-bold text-center mb-10">Education</h1>
        <p className="font-zilla font-medium text-2xl px-8 text-coolblue-300 ">
          My degree taught me how to break down complex problems — now I apply
          that same logic to web development. Whether it’s building sleek,
          responsive layouts or debugging tricky JavaScript issues, I use my
          mathematical mindset to craft user-friendly digital experiences.
        </p>
      </section>
      <Degree />
    </section>
  );
}

export default Education;
