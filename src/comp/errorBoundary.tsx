import {Component} from 'react';
import Error from './error';

export default class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch() {
    this.setState({error: true});
  }

  content = this.state.error ? <Error /> : this.props.children;

  render() {
    return this.content;
  }
}
