import React from "react";
import "../style/UserDirectory.css";

function UserDirectory(props) {
    return (
        <div className="container"  id="userTable">
            <table>
                <tbody>
                {props.tableInputs.map((result) => (
                    <tr className="table" key={result.login.uuid}>
                    <td>
                        <img className="" src={result.picture.large} alt="" />
                    </td>
        
                    <td class="align-middle">{`${result.name.first} ${result.name.last}`} </td>
        
                    <td class="align-middle">{result.cell}</td>
                    <td class="align-middle">
                        <a href={result.email}>{result.email}</a>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserDirectory;