import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです。</h1>
      <Link to="/page2/98">Url Paramater</Link>
      <br />
      <Link to="/page2/98/?name=hogehoge">Query Paramater</Link>
    </div>
  );
};
