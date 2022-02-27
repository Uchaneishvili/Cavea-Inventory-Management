import React from "react";
import { PageHeader } from "./components/pageHeader";

export const InventoryList = () => {
  return (
    <>
      <PageHeader />
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ნივთის სახელი</th>
            <th scope="col">ნივთის ადგილმდებარეობა</th>
            <th scope="col">ფასი (ლარებში)</th>
            <th scope="col">ოპერაციები</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
