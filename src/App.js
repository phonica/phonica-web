import React, {Component} from 'react';
import Phonicschemesdata from './phonicSchemeList';

// const PhonicSchemeList = ({ data: { loading, error, phonicSchemes } }) => {
//   if (loading) {
//     return <p>Loading...</p>;
//   }
//   if (error) {
//     return <p>{error.message}</p>;
//   }

//   const handleClick = () => {
//     console.log('this is:', this);
//   };

//   return (
//     <ul>
//       {phonicSchemes.map(ps => (
//         <li key={ps.id} onClick={handleClick}>
//           {ps.name} - {ps.description}
//         </li>
//       ))}
//     </ul>
//   );
// };

// const Phonicschemesdata = graphql(phonicSchemeListQuery)(PhonicSchemeList);
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Phonica</h1>
          </header>
          <Phonicschemesdata />
        </div>
      </ApolloProvider>
    );
  }
}
export default App;
