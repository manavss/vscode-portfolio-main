import { Helmet, HelmetProvider } from "react-helmet-async";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../../services/apiArticles";
import { useLoaderData } from "react-router";

function Articles() {
  const articles = useLoaderData();
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
export async function loader() {
  const articles = await getArticles();
  return articles;
}

export default Articles;
