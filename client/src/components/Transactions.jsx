import React from "react";
import PropTypes from "prop-types";
import { formatNumber, formatDate } from "../utils/Format";

export const Transactions = ({ data }) => {

  console.log(data);
  if (data.data.getTransactions.count === 0) {
    return (
      <div>
        <h4 className="pink">Some of your transactions</h4>
        <div style={{ margin: "30px" }}>
          <p>You don’t seem to have any transactions.</p>
        </div>
      </div>
    );
  }

  const transactions = data.data.getTransactions.map(result => {
    return (
      <p key={result.id}>
        <b>Transaction Date: {formatDate(new Date(result.date))}</b>
        <br />
        {result.categoryType}
        <br />
        Value: {formatNumber(result.amount)}
        <br />
        {result.categoryName}
      </p>
    );
  });

  return (
    <div>
      <h4 className="pink">Some of your transactions</h4>
      <div style={{ margin: "30px" }}>{transactions}</div>
    </div>
  );
};

Transactions.propTypes = {
  data: PropTypes.object.isRequired
};

export default Transactions;
