import { useState, useEffect } from "react";
import { getTransactions } from "../graphql/queries"
import { Auth, API, graphqlOperation } from "aws-amplify"

export const useGraphQL =  async () => {
    let user = await Auth.currentAuthenticatedUser();
    const data = await API.graphql(graphqlOperation(getTransactions, { user_name: user.username}));
    return data
}