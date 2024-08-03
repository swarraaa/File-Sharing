import { useEffect, useRef, useState } from "react";
import { uploadFile } from "../services/api";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierCaveDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import clipboard from "../assets/clipboard.svg";
import copied from "../assets/check-circle.svg";

const Home = () => {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");
  const [copy, setCopy] = useState(false);
  const fileInputRef = useRef();
  const url =
    "https://i.pinimg.com/originals/4b/8c/c3/4b8cc355274d29ebd1a2023624d3b57e.jpg";

  const onUploadClick = () => {
    fileInputRef.current.click();
  };
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setResult(response.path);
      }
    };
    getImage();
  }, [file]);

  return (
    <>
      <div className="mainContainer">
        <img src={url} className="img" />
        <div className="wrapper">
          <h1>File sharing made simple!</h1>
          <h2>Upload the file and share the download link.</h2>
          <button onClick={() => onUploadClick()}>Upload File</button>
          <input
            type="file"
            name="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          {result ? (
            <div className="inner">
              <div className="copytxtcont">
                <div className="header">
                  <p style={{ fontWeight: "bold" }}>Download Link</p>
                  {copy == false ? (
                    <button
                      className="copybtn"
                      onClick={() => {
                        navigator.clipboard.writeText(result);
                        setCopy(true);
                        setTimeout(() => {
                          setCopy(false);
                        }, 3000);
                      }}
                    >
                      <img src={clipboard} alt="copy link" className="copy" />{" "}
                    </button>
                  ) : (
                    <button className="copybtn">
                      <img src={copied} alt="copy link" className="copy" />{" "}
                    </button>
                  )}
                </div>
                <SyntaxHighlighter
                  language="json"
                  style={atelierCaveDark}
                  customStyle={{
                    padding: "2rem 1.5rem",
                    color: "white",
                    margin: "0",
                  }}
                  wrapLongLines={true}
                >
                  {result}
                </SyntaxHighlighter>
              </div>
              <a href={result} target="_blank" rel="noreferrer">
                Download
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
