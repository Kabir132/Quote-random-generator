import { useState } from "react";
import "./styles.css";
import { TwitterIcon } from "react-share";

export default function App() {
  const [text, setText] = useState("Click button to random your first quote");
  const [author, setAuthor] = useState("");

  const getQuotes = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setText(data.content);
    setAuthor(data.author);
  };

  const formatTweet = () => {
    return (
      "https://twitter.com/intent/tweet?text=" +
      encodeURIComponent(text + " - " + author)
    );
  };

  return (
    <div className={"container grid"}>
      <div id="quote-box">
        <h1 id="text">{text}</h1>
        <p id="author">{author}</p>
        <button
          className={"btn btn-dark"}
          onClick={() => getQuotes()}
          id="new-quote"
        >
          new quote
        </button>
        <a
          id="tweet-quote"
          className="twitter-share-button"
          href={formatTweet()}
          data-size="large"
          target="_top"
        >
          <TwitterIcon size={50} round={true} />
        </a>
      </div>
    </div>
  );
}
