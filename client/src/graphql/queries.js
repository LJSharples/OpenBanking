/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const user = /* GraphQL */ `
  query User($user_name: String!) {
    user(user_name: $user_name) {
      user_name
      full_name
      first_name
      last_name
      phone
      company {
        Data
        company_name
        user_name
        site_id
        address1
        address2
        city
        company_number
        postcode
        region
        years_trading
        yearly_turnover
        num_employees
        industry
      }
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($user_name: String!) {
    getCompany(user_name: $user_name) {
      Data
      company_name
      user_name
      site_id
      address1
      address2
      city
      company_number
      postcode
      region
      years_trading
      yearly_turnover
      num_employees
      industry
    }
  }
`;
export const getLeads = /* GraphQL */ `
  query GetLeads($user_name: String!) {
    getLeads(user_name: $user_name) {
      id
      first_name
      last_name
      phone
      full_name
    }
  }
`;
export const getServices = /* GraphQL */ `
  query GetServices($user_name: String!) {
    getServices(user_name: $user_name) {
      items {
        user_name
        status
        service_name
        callback_time
        contract_end
        contract_length
        new_cost_month
        new_cost_year
        cost_month
        cost_year
        current_supplier
        request_costs
        id
        PK
        uploaded_documents
        permission
        affiliate_id
        email
        savings
      }
      nextToken
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($user_name: String!) {
    getProfile(user_name: $user_name) {
      user_name
      full_name
      first_name
      last_name
      phone
      site_id
      address1
      address2
      city
      company_number
      postcode
      region
      years_trading
      user {
        user_name
        full_name
        first_name
        last_name
        phone
      }
      companydetails {
        Data
        company_name
        user_name
        site_id
        address1
        address2
        city
        company_number
        postcode
        region
        years_trading
        yearly_turnover
        num_employees
        industry
      }
    }
  }
`;
export const getUserDetails = `query getUserProfile($user_name: String!){
  getCompany(
      user_name: $user_name
  ) {
      Data
      company_name
      address1
      address2
      city
      company_number
      postcode
      region
      years_trading
      num_employees
      yearly_turnover
      industry
  }
  user (
      user_name: $user_name
  ) {
      user_name
      full_name
      first_name
      last_name
      phone
  }
}`;