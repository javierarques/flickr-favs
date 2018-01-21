import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import Nav from '../Nav';
import Loader from '../Loader';
import Gallery from '../Gallery';
import { getCategoryImages } from '../../actions';
import { getImages } from '../../selectors';

class App extends React.Component {
  static propTypes = {
    error: PropTypes.bool.isRequired,
    firstCategory: PropTypes.object.isRequired,
    initApp: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
  };

  static defaultProps = {
    isLoading: true
  };

  componentDidMount() {
    const { initApp, firstCategory } = this.props;
    initApp(firstCategory.id, firstCategory.tags);
  }

  render() {
    const { error, images, isLoading } = this.props;
    const errorMessage = (
      <p className="App-errorMessage">
        Oops, we had a problem fetching the images, please reload the page.
      </p>
    );

    return (
      <div className="App">
        <div className="App-header">
          <Header />
          <Nav />
        </div>
        <div className="App-content">
          {error && errorMessage}
          {isLoading && <Loader />}
          {!error && !isLoading && <Gallery images={images} />}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToPros = state => ({
  images: getImages(state),
  firstCategory: state.categories[0],
  isLoading: state.isLoading,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  initApp: (categoryId, tags) => dispatch(getCategoryImages(categoryId, tags))
});

export default connect(mapStateToPros, mapDispatchToProps)(App);
