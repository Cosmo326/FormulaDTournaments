import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Search} from 'semantic-ui-react';


class SearchField extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: '',
      results: [],
      isLoading: false
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.resetComponent = this.resetComponent.bind(this);
    this.handleResultSelect = this.handleResultSelect.bind(this);
    this.resultRenderer = this.resultRenderer.bind(this);
  }

  componentWillMount(){
    this.resetComponent();
  }

  handleSearchChange(e, {value}) {
    if(value.length < 1) {
      this.setState({
        isLoading: false,
        results: [],
        value: value
      });
      return;
    }

    this.setState({isLoading: true, value});
    fetch(`${this.props.autocompleteurl}?term=${value}`)
        .then(data => data.json())
        .then(data => this.setState({results: data, isLoading: false}));
  }

  resetComponent() {
    this.setState({
      value: '',
      results: [],
      isLoading: false
    });
  }

  handleResultSelect(event, data) {
    this.setState({
      value: ''
    });
    this.props.searchaction(event, data);
  }

  resultRenderer( result ) {
    const re = new RegExp(this.state.value, 'gi');
    const parsed = result.title.replace(re, `,$&,` );

    const pieces = parsed.split(',');
    let count = 0;
    return (
        <div key={result.id}>
          {
            pieces.map(piece => {
              return <span key={count++}>{re.test(piece) ? <strong>{piece}</strong> : <span>{piece}</span>}</span>;
            })
          }
        </div>
    );
  }

  render() {
    return (
        <Grid centered className="search-control">
          <Grid.Row className="row">
            <Grid.Column width={15}>
              <Search
                  loading={this.state.isLoading}
                  input={{ fluid: true, iconPosition: 'left'}}
                  onResultSelect={this.handleResultSelect}
                  onSearchChange={this.handleSearchChange}
                  results={this.state.results}
                  value={this.state.value}
                  resultRenderer={this.resultRenderer}
                  placeholder={this.props.placeholder}
                  {...this.props.otherOptions}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
    )
  }
}

SearchField.propTypes = {
  searchaction: PropTypes.func.isRequired,
  autocompleteurl: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  otherOptions: PropTypes.object
};

export default SearchField;
