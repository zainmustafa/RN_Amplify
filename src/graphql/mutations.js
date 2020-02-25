/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
      id
      firstName
      lastName
      addresses {
        items {
          id
          line1
          line2
          city
          state
          zipCode
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      skills {
        items {
          id
          name
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
      id
      firstName
      lastName
      addresses {
        items {
          id
          line1
          line2
          city
          state
          zipCode
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      skills {
        items {
          id
          name
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
      id
      firstName
      lastName
      addresses {
        items {
          id
          line1
          line2
          city
          state
          zipCode
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      skills {
        items {
          id
          name
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
      id
      addresses {
        id
        firstName
        lastName
        addresses {
          nextToken
          startedAt
        }
        skills {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      line1
      line2
      city
      state
      zipCode
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
      id
      addresses {
        id
        firstName
        lastName
        addresses {
          nextToken
          startedAt
        }
        skills {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      line1
      line2
      city
      state
      zipCode
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
      id
      addresses {
        id
        firstName
        lastName
        addresses {
          nextToken
          startedAt
        }
        skills {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      line1
      line2
      city
      state
      zipCode
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createSkill = /* GraphQL */ `
  mutation CreateSkill(
    $input: CreateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    createSkill(input: $input, condition: $condition) {
      id
      name
      skills {
        id
        firstName
        lastName
        addresses {
          nextToken
          startedAt
        }
        skills {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateSkill = /* GraphQL */ `
  mutation UpdateSkill(
    $input: UpdateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    updateSkill(input: $input, condition: $condition) {
      id
      name
      skills {
        id
        firstName
        lastName
        addresses {
          nextToken
          startedAt
        }
        skills {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteSkill = /* GraphQL */ `
  mutation DeleteSkill(
    $input: DeleteSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    deleteSkill(input: $input, condition: $condition) {
      id
      name
      skills {
        id
        firstName
        lastName
        addresses {
          nextToken
          startedAt
        }
        skills {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
