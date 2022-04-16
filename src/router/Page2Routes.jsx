import { Page2 } from "../Page2";
import { UrlParamater } from "../UrlParamater";

export const Page2Routes = [
  { path: "/", exact: true, children: <Page2 /> },
  { path: "/:id", exact: false, children: <UrlParamater /> }
];

// urlパラメータの場合はコロンを先頭に付与する。
