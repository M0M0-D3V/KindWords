import React from "react";

export default () => {
  const [reply, setReply] = useState([]);
  const postReply = (request) => {
    console.log(`request is: ${request}`);
    const editedRequest = {
      responsesFromUsers: [reply],
    };
    console.log(request);
    axios
      .put(
        `http://localhost:9001/api/kindwords/update/${request._id}`,
        editedRequest
      )
      .then((res) => {
        console.log(res.data);
        setReply(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  };
  return (
    <>
      {/* <form
    onSubmit={postReply(request)}
    id={request._id}
  >
  <input type="hidden" id={request._id} />
    <textarea
      className="form-control"
      rows="3"
      onChange={(event) => {
        setReply(event.target.value);
      }}
      ></textarea>
      <button className="btn btn-info">Reply</button>
      <br /> <br />
    </form> */}
    </>
  );
};
