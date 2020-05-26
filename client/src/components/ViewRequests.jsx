import React, { useEffect } from "react";
import { Link, navigate } from "@reach/router";
// import DeleteButton from "./DeleteButton";

// BASICALLY COPIED OVER FROM TEAM MANAGER AND FIXING VARIABLES.
// HAHAHAHAHAHAHAHA

export default ({ data }) => {
  useEffect(() => {
    data.setRequests(data.requests);
  }, [data]);

  const removeFromDom = (requestID) => {
    data.setRequests(
      data.requests.filter((request) => request._id !== requestID)
    );
  };

  return (
    <div>
      <table className="table table-striped table-bordered table-hover table-condensed">
        <thead style={{ color: "gray" }}>
          <th>Team Name</th>
          <th>Preferred Position</th>
          <th>Actions</th>
        </thead>
        {data.requests.map((request, idx) => {
          return (
            <tr>
              <td key={idx} className="text-left">
                <Link to={`/requests/${request._id}`}>{request.name}</Link>
              </td>
              <td key={idx} className="text-left">
                {request.preferredPosition}
              </td>
              <td key={idx}>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={(e) => navigate(`/requests/edit/${request._id}`)}
                >
                  Edit
                </button>
                {/* <DeleteButton
                  requestID={request._id}
                  successfulCallback={() => removeFromDom(request._id)}
                ></DeleteButton> */}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
