import React from "react";

function NewsCard({ article }) {
  const { urlToImage, title, source, publishedAt, description, url } = article;

  const formattedDate = new Date(publishedAt).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
  });

  const limitDescription = (desc, wordLimit) => {
    const words = desc.split(' ');
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(' ') + '...'
      : desc;
  };  

  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img className="news-img" src={urlToImage} alt="news" />
        </figure>

        <div className="card-body">
          <h2 className="card-title cardTitle text-white">{title}</h2>

          <h3 id="newsSrc">
            {source.name} | {formattedDate}
          </h3>

          <p className="newsDesc">{limitDescription(description,25)}</p>

          <div className="card-actions justify-center">
            <button className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-link"
              >
                Visit Site
              </a>
            </button>
          </div>
        </div>

      </div>

    </>
  );
}

export default NewsCard;
