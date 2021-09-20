import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Eli Kanowitz",
      title: "SDE Intern @ SaveAway",

      icon: "assets/twitter.png",
      desc:
        '"Working with Rahul during the summer of 2021 was a pleasure. His vast knowledge of full stack programing made him a really valuable coworker. Additionally, his team work and strong problem solving made him a big help for everyone in the company." ',
    },

    {
      id: 2,
      name: "Jason Pruski",
      title: "Software Developer @ SaveAway",
      icon: "assets/linkedin.png",
      desc:
        '"Rahul' +
        "'s work was crucial in both a supervisory role, as well as a full stack developer, which is exceptional given the size/complexity of the code base. He built aesthetically pleasing features and he was a problem solver to resolve particularly vexing dev ops issues." +
        '"',
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
