/* eslint-disable @typescript-eslint/no-explicit-any */
import { useArticlesState } from "../../context/articles/context"
import { ArticleDetails } from "./ArticleDetails";


export default function ArticlesListItems() {
    const state : any = useArticlesState();
    const { articles , isLoading, isError, errorMessage } = state;
    console.log(articles);
    if (articles.length == 0 && isLoading) {
        return <span>Loading ...</span>
    }
    if (isError) {
        return <span>{errorMessage }</span>;
    }
    const options = { year: '2-digit', month: 'short', day: 'numeric' };
    const formatDate = (dateString: string | number | Date):string => {
        const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
        return formattedDate;
      }

    return (
        <>
        <div className="">
            {articles.map((article: any) => (
                <div
                key={article.id}
                className="flex flex-row w-[700px] bg-white border border-gray-200 rounded shadow dark:bg-gray-800 dark:border-gray-700 m-3"
                >
                <div className="p-5 flex flex-col text-left">
                    <p className="m-1 ">{article.sport.name}</p>
                    <p className="m-1 font-bold">{article.title}</p>
                    <p className="m-1">{article.summary}.....</p>
                    <div className="flex flex-row justify-between">

                    <p>{formatDate(article.date)}</p>
                    <p >{ArticleDetails(article.id)}</p>
                    </div>
                </div>
                <div className="mr-3">
                    <img
                    src={article.thumbnail}
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    className="w-full h-[200px]"
                    alt="Thumbnail"
                    />
                </div>
                </div>
            ))}
            </div>


        </>
    )
}
