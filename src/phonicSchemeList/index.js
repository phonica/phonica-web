import React from 'react';
import gql from 'graphql-tag';
import graphql from 'react-apollo';

const PhonicSchemeList = ({data: {loading, error, phonicSchemes}}) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  const handleClick = () => {
    console.log('this is:', this);
  };

  return (
    <ul>
      {phonicSchemes.map((ps) => (
        <div key={ps.id} onClick={handleClick}>
          {ps.name} - {ps.description}
        </div>
      ))}
    </ul>
  );
};

const phonicSchemeListQuery = gql`
  query PhonicsSchemeQuery {
    phonicSchemes {
      id
      name
      description
    }
  }
`;

const Phonicschemesdata = graphql(phonicSchemeListQuery)(PhonicSchemeList);
export default Phonicschemesdata;
