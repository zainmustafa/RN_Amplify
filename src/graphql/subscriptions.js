/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee {
    onCreateEmployee {
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee {
    onUpdateEmployee {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee {
    onDeleteEmployee {
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
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress {
    onCreateAddress {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress {
    onUpdateAddress {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress {
    onDeleteAddress {
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
export const onCreateSkill = /* GraphQL */ `
  subscription OnCreateSkill {
    onCreateSkill {
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
export const onUpdateSkill = /* GraphQL */ `
  subscription OnUpdateSkill {
    onUpdateSkill {
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
export const onDeleteSkill = /* GraphQL */ `
  subscription OnDeleteSkill {
    onDeleteSkill {
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
