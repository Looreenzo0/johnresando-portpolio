import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl mb-2">Full Stack Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">John Laurence Resando</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I specialize in both front-end and back-end development, working
              with .NET technologies such as C#, ASP.NET Core, ASP.NET MVC, and
              the .NET framework. I also have expertise in building web
              applications and APIs using .NET Core, EF Core, and Dapper for
              data management.
            </p>
            {/* btn and social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV </span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>
          {/* photo */}
          <div>text</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
