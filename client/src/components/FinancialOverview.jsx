import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "reactstrap";
import Spinner from "./Spinner";
import AccountsList from "./AccountsList";
import CategoryList from "./CategoryList";
import Investments from "./Investments";
import Transactions from "./Transactions";
import { getUserDetails } from "../graphql/queries"
import { updateCompany } from "../graphql/mutations"
import { Auth, API, graphqlOperation } from "aws-amplify"

const updateGraph = async (data) => {
  let user = await Auth.currentAuthenticatedUser();
  const userProfile = await API.graphql(graphqlOperation(getUserDetails, { user_name: user.username}));

  const update = {
    user_name: user.username,
    company_name: userProfile.data["getCompany"].Data,
    address1: userProfile.data["getCompany"].address1,
    address2: userProfile.data["getCompany"].address2,
    city: userProfile.data["getCompany"].city,
    postcode: userProfile.data["getCompany"].postcode,
    region: userProfile.data["getCompany"].region,
    company_number: userProfile.data["getCompany"].company_number,
    years_trading: userProfile.data["getCompany"].years_trading,
    yearly_turnover: userProfile.data["getCompany"].yearly_turnover,
    num_employees: userProfile.data["getCompany"].num_employees,
    industry: userProfile.data["getCompany"].industry,
    transactions: data.response.transactionData.results
  }
  console.log(update)
  try {
    await API.graphql(graphqlOperation(updateCompany, update));
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
        <CategoryList data={data} />
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
