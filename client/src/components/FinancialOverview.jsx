import React, {useState} from "react";
import PropTypes from "prop-types";
import { Col, Row, Button } from "reactstrap";
import Transactions from "./Transactions";
import { formatDate } from "../utils/Format";
import { addTransaction } from "../graphql/mutations"
import { getTransactions } from "../graphql/queries"
import { Auth, API, graphqlOperation } from "aws-amplify"

const updateGraph = async (data) => {
  let user = await Auth.currentAuthenticatedUser();

  data.response.transactionData.results.map((result) => {
    const dateFormatted = formatDate(new Date(result.transaction.date));
    
    const category = data.response.categoryData.find(
      category => category.id === result.transaction.categoryId
    );
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
      userId: result.transaction.userId,
      categoryCode: category.code,
      categoryName: category.primaryName,
      categoryDescript: category.secondaryName
    }
    uploadTransaction(transaction)
  });
}

const uploadTransaction = async (transaction) => {
  try {
    await API.graphql(graphqlOperation(addTransaction, transaction));
  } catch (err) {
    console.log("Error: ")
    console.log(err);
  }
}


export const FinancialOverview = ({ data, error, loading }) => {
  const [tData, addData] = useState({});
  const [transactionsAvailable, toggleAvaialble] = useState(false);

  if(data !== undefined && data.response !== undefined){
    updateGraph(data)
  }

  const getUser = async () => {
    let user = await Auth.currentAuthenticatedUser();
    GetData(user);
  }

  const GetData =  async (user) => {
    const d = await API.graphql(graphqlOperation(getTransactions, { user_name: user.username}));
    refreshData(d);
  }

  const refreshData = (d) => {
    if(tData.data === undefined){
      addData(d)
      toggleAvaialble(true)
    }
  }

  if(transactionsAvailable === false){
    return (
      <div>
        <h4 className="pink">Some of your transactions</h4>
        <div style={{ margin: "30px" }}>
          <p style={{ fontSize: "18px", paddingTop: "40px" }}>You can refresh your transactions here</p>
          <Button style={{ margin: "30px" }} onClick={() => getUser()}>
            Get Transactions
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <Row>
        <Col lg={{ size: 6, offset: 3 }}>
          <Transactions data={tData} />
        </Col>
      </Row>
    );
  }
};

FinancialOverview.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.object,
  error: PropTypes.string
};

export default FinancialOverview;
