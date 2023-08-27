import axios from "axios";
import { useEffect, useState } from "react";
import RepoCard from "../components/RepoCard";
import ActivityCalendar from "react-github-calendar";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Github() {
  // const authToken = "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";
  const theme = {
    dark: ["#161B22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };
  const [user, setUser] = useState([]);
  const [repo, setRepo] = useState([]);
  const repoInfo = repo.filter((r) => r.stargazers_count > 0);
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get(
          "https://api.github.com/users/manavss",
          {
            headers: {
              Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
            },
          },
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching user:", error);
        return null;
      }
    }
    async function fetchRepo() {
      try {
        const response = await axios.get(
          "https://api.github.com/users/manavss/repos",
          {
            headers: {
              Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
            },
          },
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching user:", error);
        return null;
      }
    }

    fetchUser().then((userInfo) => {
      setUser(userInfo);
    });
    fetchRepo().then((repoInfo) => {
      setRepo(repoInfo);
    });
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Manav Shete | Github</title>
      </Helmet>
      <div className="space-y-8 bg-mainBg p-4 md:p-8">
        <div className="flex h-24 max-w-full items-center justify-center gap-x-5 divide-x-2 divide-accentColor  rounded-lg bg-articleBg">
          <div className="flex items-center justify-center gap-x-2 divide-x-2  divide-accentColor ">
            <span>
              <img
                width={60}
                height={60}
                className="  rounded-full"
                src={user.avatar_url}
                alt=""
              />
            </span>
            <h2 className="pl-2 text-lg font-medium text-textColor   md:text-2xl">
              {user.login}
            </h2>
          </div>
          <div className="pl-2">
            <h2 className=" text-lg  font-medium text-textColor md:text-2xl">
              {user.public_repos} Repos
            </h2>
          </div>
          <div className="hidden pl-2 text-textColor   md:block ">
            <h2 className="md:text-2xl">{user.bio}</h2>
          </div>
        </div>
        <div className="grid gap-x-5 gap-y-5 md:grid-cols-2 xl:grid-cols-4">
          {repoInfo &&
            repoInfo.map((r) => {
              return (
                <RepoCard
                  key={r.id}
                  name={r.name}
                  desc={r.description}
                  url={r.url}
                  homepage={r.homepage}
                />
              );
            })}
        </div>
        <div className="h-full w-full  text-textColor">
          <ActivityCalendar
            username="manavss"
            fontSize={17}
            theme={theme}
            hideColorLegend
            hideMonthLabels
          />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Github;
