const Paragraph = [
  `I’m Sudhagar, a self-taught frontend developer with a passion for creating clean, responsive, and user-focused web applications. With a strong foundation in HTML, CSS, JavaScript, TypeScript, and React, I enjoy building intuitive interfaces that bring ideas to life. I believe in writing clean code, following best practices, and always pushing the limits of what I can create on the web.`,
  `My journey in web development started out of curiosity and grew into a deep passion for building digital experiences. Over time, I've worked on various personal and collaborative projects—from drag-and-drop interfaces to fully functional web apps—all while constantly improving my skills and exploring new technologies. I'm particularly interested in performance, accessibility, and building user-friendly designs.`,
  `Beyond coding, I love learning and staying up to date with the latest trends in tech. I’m always eager to take on new challenges, contribute to meaningful projects, and collaborate with others. Whether I’m debugging a tricky issue or experimenting with a new tool, I bring energy, focus, and a desire to grow with every line of code I write.`,
];

function AboutMe() {
  return (
    <div>
      <h1 className="text-6xl text-center hiderzoom">About</h1>
      <div className="my-6 text-xl font-mono leading-8 tracking-wider font-bold p-[2%]">
        {Paragraph.map((para) => (
          <p
            className="bg-coolblue-200 text-coolblue-300 hiderup mb-5 inline-block"
            key={Math.random()}
          >
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}

export default AboutMe;
