import news from "@json/news.json";
import type { INews } from "@interfaces/news";

const myNews = news as unknown as INews[];

const RES_DELAY_MS = 1000;

export type FetchNews = () => Promise<INews[]>;
export const fetchNews: FetchNews = async () =>
  new Promise((res) => setTimeout(() => res(myNews), RES_DELAY_MS));

export const fetchNewsSync = () => myNews;
