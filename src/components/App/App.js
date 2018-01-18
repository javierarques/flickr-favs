import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import Nav from '../Nav';
import Loader from '../Loader';
import Gallery from '../Gallery';
import { getCategoryImages } from '../../actions';

class App extends React.Component {
  static propTypes = {
    initApp: PropTypes.func.isRequired,
    firstCategory: PropTypes.object.isRequired,
    isLoading: PropTypes.bool
  };

  static defaultProps = {
    isLoading: true
  };

  componentDidMount() {
    const { initApp, firstCategory } = this.props;
    initApp(firstCategory.id, firstCategory.tags);
  }

  render() {
    const { images, isLoading } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <Header />
          <Nav />
        </div>
        <div className="App-content">
          {isLoading && <Loader />}
          {!isLoading && <Gallery images={images} />}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToPros = ({ categories, images, isLoading }) => ({
  images,
  firstCategory: categories[0],
  isLoading
});

const mapDispatchToProps = dispatch => {
  return {
    initApp: (id, tags) => dispatch(getCategoryImages(id, tags))
  };
};

export default connect(mapStateToPros, mapDispatchToProps)(App);
