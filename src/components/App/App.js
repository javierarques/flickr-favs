import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import Nav from '../Nav';
import { getCategoryImages } from '../../actions';

class App extends React.Component {
  static propTypes = {
    initApp: PropTypes.func.isRequired,
    firstCategory: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { initApp, firstCategory } = this.props;
    initApp(firstCategory.id, firstCategory.tags);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
          <Nav />
        </div>
        <div className="App-content" />
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToPros = state => ({
  firstCategory: state.categories[0]
});

const mapDispatchToProps = dispatch => {
  return {
    initApp: (id, tags) => dispatch(getCategoryImages(id, tags))
  };
};

export default connect(mapStateToPros, mapDispatchToProps)(App);
