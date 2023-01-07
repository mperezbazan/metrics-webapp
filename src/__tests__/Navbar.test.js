import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Navbar from '../components/Navbar';
import CountryList from '../components/CountryList';

describe('Test react components', () => {
  it('header renders', () => {
    const tree = renderer
      .create(
        <Router>
          <Navbar />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Test CountryList renders', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <CountryList />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
