import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "reactstrap";
import Spinner from "./Spinner";
import AccountsList from "./AccountsList";
import Investments from "./Investments";
import Transactions from "./Transactions";
import { formatDate } from "../utils/Format";
import { addTransaction } from "../graphql/mutations"
import { Auth, API, graphqlOperation } from "aws-amplify"

const updateGraph = async (data) => {
  let user = await Auth.currentAuthenticatedUser();

  data.response.transactionData.results.map((result) => {
    const dateFormatted = formatDate(new Date(result.transaction.date));
    
    const transaction = {
      user_name: user.username,
      accountId: result.transaction.accountId,
      amount: result.transaction.amount,
      categoryId: result.transaction.categoryId,
      categoryType: result.transaction.categoryType,
      currencyDenominatedAmount: result.transaction.currencyDenominatedAmount,
      date: dateFormatted,
      description: result.transaction.description,
      dispensableAmount: result.transaction.dispensableAmount,
      formattedDescription: result.transaction.formattedDescription,
      id: result.transaction.id,
      inserted: result.transaction.inserted,
      lastModified: result.transaction.lastModified,
      originalAmount: result.transaction.originalAmount,
      originalDate: result.transaction.originalDate,
      originalDescription: result.transaction.originalDescription,
      payload: result.transaction.payload,
      timestamp: result.transaction.timestamp,
      type: result.transaction.type,
      userId: result.transaction.userId
    }
    console.log(transaction)
    uploadTransaction(transaction)
  });
}

const uploadTransaction = async (transaction) => {
  try {
    await API.graphql(graphqlOperation(addTransaction, transaction));
    console.log("Success")
  } catch (err) {
    console.log("Error: ")
    console.log(err);
  }
}

export const FinancialOverview = ({ data, error, loading }) => {
  if (error) {
    return <noscript />;
  }

  if (loading) {
    return <Spinner width="50px" image={"./spinner.png"} />;
  }

  if (!data) {
    return <noscript />;
  }
  updateGraph(data);

  return (
    <Row>
      <Col lg={{ size: 6, offset: 3 }}>
        <AccountsList data={data} />
        <Investments data={data} />
        <Transactions data={data} />
      </Col>
    </Row>
  );
};

FinancialOverview.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.object,
  error: PropTypes.string
};

export default FinancialOverview;
