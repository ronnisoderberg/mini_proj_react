import React from "react";

class QRform extends React.Component {
  render() {
    const FormURL = () => {
      const [url, setUrl] = useState("");

      return (
        <>
          <div className="container">
            <h2>Create a QR image</h2>
            <div>Write the link you want to create as a QR image!</div>
            <form className="url-form">
              <label>Task</label>
              <input
                type="text"
                value={url}
                required
                onChange={(e) => setUrl(e.target.value)}
              />
              <button type="button"> Create </button>
            </form>
          </div>
        </>
      );
    };
  }
}
