import React, {Component, PropTypes} from 'react';
import BasicInfoForm from './BasicInfoForm.react';

let data = {
  basicInfo: {fullName: "abc", email: "sfds@sfsdf.com"}
};

export default class QuestionnaireApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.data = {};
  }

  componentDidMount(){
    setTimeout(()=> {
      this.data = data;
      this.setState({loading: false});
    }, 1000)
  }

  render() {
    const loading = this.state.loading;
    return loading ?
      <div>Loading</div>:
      (
        <div>
          <BasicInfoForm data={this.data.basicInfo}/>
        </div>
      );
  }
}

QuestionnaireApp.propTypes = {}