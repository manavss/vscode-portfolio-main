import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ArticleCard from "../components/ArticleCard";

function Articles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await axios.get(
          ` https://dev.to/api/articles?username=manavss`,
        );
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
    fetchArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);
  // console.log(articles);
  return (
    <HelmetProvider>
      <Helmet>
        <title>Manav Shete | Articles</title>
      </Helmet>
      <div className="p-8">
        <h1 className="pb-8 text-3xl font-semibold text-textColor">
          Recent posts from{" "}
          <a
            className=" underline decoration-accentColor"
            href="https://dev.to"
            target="_blank"
            rel="noreferrer"
          >
            dev.to
          </a>
        </h1>
        <div className="grid gap-x-5 gap-y-5 md:grid-cols-2 xl:grid-cols-4">
          {articles &&
            articles.map((article) => {
              return (
                <ArticleCard
                  key={article.id}
                  url={article.canonical_url}
                  image={article.cover_image}
                  title={article.title}
                  desc={article.description}
                />
              );
            })}
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Articles;
