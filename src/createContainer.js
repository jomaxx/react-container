import React from "react";

export default function createContainer(defaultState) {
  const Context = React.createContext({
    state: Object.assign({}, defaultState),
    setState() {}
  });

  return class Container extends React.Component {
    static Consumer = Context.Consumer;

    state = Object.assign({}, defaultState);

    setState = this.setState.bind(this);

    _value = {};

    get value() {
      if (this._value.state !== this.state) {
        this._value = {
          state: this.state,
          setState: this.setState
        };
      }

      return this._value;
    }

    render() {
      return (
        <Context.Provider value={this.value}>
          {typeof this.props.children === "function" ? (
            <Context.Consumer>{this.props.children}</Context.Consumer>
          ) : (
            this.props.children
          )}
        </Context.Provider>
      );
    }
  };
}
