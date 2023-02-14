import './App.css';

import Header from './components/Header';
import Content from './components/Content';
import Counter from './components/Counter';
import Form from './components/Form';

const App = () => {
  const outputArr = [
    <Header key={1} secretMessage={'you have been here before'}/>,
    <Header key={2} secretMessage={'this is the products page'}/>
  ];

  // has to return either jsx or null
  return (
    <>
      {/* <Header secretMessage="drink your ovaltine"></Header> Header({secret:''}) */}
      {/* <Header secretMessage="this is the about page"/> */}

      {/* { outputArr } */}

      {/* <Content>
        <aside>
          <section className="section">
            <h2>How elaborate is this now??</h2>
          </section>
        </aside>
      </Content> */}

      {/* <Counter /> */}

      <Form />

      {/* <div className="App">
        <h2>Welcome to our site!</h2>
      </div>
      <h2>Check out the about page</h2> */}
    </>
  );
};

export default App;
