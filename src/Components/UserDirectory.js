import React from "react";
import "../style/UserDirectory.css";

function UserDirectory(props) {
    return (
        <table classname="userTable">
        <tr>
          <th></th>
          <th>Name</th>
          <th>Phone</th>
          <th>E-Mail</th>
        </tr>
  
        <tbody className="tableBody">
          {props.tableInputs.map((result) => (
            <tr className="table" key={result.login.uuid}>
              <td>
                <img className="" src={result.picture.large} alt="" />
              </td>
  
              <td>{`${result.name.first} ${result.name.last}`} </td>
  
              <td>{result.cell}</td>
              <td className="email">
                <a href={result.email}>{result.email}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
};

export default UserDirectory;