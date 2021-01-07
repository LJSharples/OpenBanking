/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addProfile = /* GraphQL */ `
  mutation AddProfile(
    $user_name: String
    $full_name: String
    $first_name: String
    $last_name: String
    $phone: String
  ) {
    addProfile(
      user_name: $user_name
      full_name: $full_name
      first_name: $first_name
      last_name: $last_name
      phone: $phone
    ) {
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
export const addCompany = /* GraphQL */ `
  mutation AddCompany(
    $user_name: String
    $company_name: String
    $site_id: Int
    $address1: String
    $address2: String
    $city: String
    $company_number: String
    $postcode: String
    $region: String
    $industry: String
    $years_trading: String
    $yearly_turnover: String
    $num_employees: String
  ) {
    addCompany(
      user_name: $user_name
      company_name: $company_name
      site_id: $site_id
      address1: $address1
      address2: $address2
      city: $city
      company_number: $company_number
      postcode: $postcode
      region: $region
      industry: $industry
      years_trading: $years_trading
      yearly_turnover: $yearly_turnover
      num_employees: $num_employees
    ) {
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
export const addLead = /* GraphQL */ `
  mutation AddLead(
    $user_name: String
    $first_name: String
    $last_name: String
    $full_name: String
    $phone: String
  ) {
    addLead(
      user_name: $user_name
      first_name: $first_name
      last_name: $last_name
      full_name: $full_name
      phone: $phone
    ) {
      id
      first_name
      last_name
      phone
      full_name
    }
  }
`;
export const addService = /* GraphQL */ `
  mutation AddService(
    $user_name: String
    $status: String
    $service_name: String
    $callback_time: String
    $contract_end: String
    $contract_length: String
    $current_supplier: String
    $cost_month: String
    $cost_year: String
    $uploaded_documents: String
    $permission: String
    $affiliate_id: String
    $email: String
  ) {
    addService(
      user_name: $user_name
      status: $status
      service_name: $service_name
      callback_time: $callback_time
      contract_end: $contract_end
      contract_length: $contract_length
      current_supplier: $current_supplier
      cost_month: $cost_month
      cost_year: $cost_year
      uploaded_documents: $uploaded_documents
      permission: $permission
      affiliate_id: $affiliate_id
      email: $email
    ) {
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
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $user_name: String
    $full_name: String
    $first_name: String
    $last_name: String
    $phone: String
  ) {
    updateUser(
      user_name: $user_name
      full_name: $full_name
      first_name: $first_name
      last_name: $last_name
      phone: $phone
    ) {
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $user_name: String
    $Data: String
    $company_number: String
    $company_name: String
    $site_id: Int
    $address1: String
    $address2: String
    $city: String
    $postcode: String
    $region: String
    $industry: String
    $years_trading: String
    $yearly_turnover: String
    $num_employees: String
  ) {
    updateCompany(
      user_name: $user_name
      Data: $Data
      company_number: $company_number
      company_name: $company_name
      site_id: $site_id
      address1: $address1
      address2: $address2
      city: $city
      postcode: $postcode
      region: $region
      industry: $industry
      years_trading: $years_trading
      yearly_turnover: $yearly_turnover
      num_employees: $num_employees
    ) {
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
export const deleteLead = /* GraphQL */ `
  mutation DeleteLead($user_name: String, $id: String) {
    deleteLead(user_name: $user_name, id: $id) {
      id
      first_name
      last_name
      phone
      full_name
    }
  }
`;
export const deleteService = /* GraphQL */ `
  mutation DeleteService($user_name: String, $id: String, $status: String) {
    deleteService(user_name: $user_name, id: $id, status: $status) {
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
  }
`;
