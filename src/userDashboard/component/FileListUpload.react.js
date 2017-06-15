/**
 * Created by shaochenlu on 3/20/17.
 */

import  React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dropzone from 'react-dropzone';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assessment';
import {blue500} from 'material-ui/styles/colors';
import style from '../style/fileListUpload.css';


class FileListUpload extends Component{
  constructor(){
    super();
    this.state = {
      files: [],
    };
  }

  handleDrop(acceptedFiles){
    this.setState({
      files: acceptedFiles,
    })
  }

  handleSubmit(e){
    e.preventDefault();
    const { caseId } = this.props;
    const { files } = this.state;
    if(!files || files.length === 0)
      return;
    let data = new FormData();
    data.append('caseid', caseId);
    data.append('description', "");
    data.append('file', files[0]);
    $.ajax({
      url: 'index/upload',
      method: 'POST',
      data,

      cache: false,
      processData: false,
      contentType: false,
    }).done(data => {
      console.log(data);
    })
  }

  render(){
    let { fileList } = this.props;
    return (
      <div style={{width: "350px", margin: "auto"}}>
        <h4>文件列表</h4>
        <List >
          {fileList.map((f, i) => <a href={`/download?fileid=${f}`} target="_blank" key={i}><ListItem
            leftAvatar={<Avatar icon={<ActionAssignment/>} backgroundColor={blue500}/>}
            primaryText={`File ${i + 1}`}
          /></a> )}

        </List>
        <Dropzone
          onDrop={acceptedFiles => this.handleDrop(acceptedFiles)}
          style={{
            marginTop: "20px",
            width: "100%",
            height: "120px",
            border: "3px dashed #f2f2f2",
            borderRadius: "6px",
            color: "#E2E2E2",
            textAlign: "center",
            lineHeight: "120px",
            fontSize: "19px",
          }}
        >上传文件</Dropzone>
        <div style={{textAlign: "center", paddingTop: "30px"}}>
        <RaisedButton
          label="上传" labelColor="#FFFFFF"
          backgroundColor="#3F8CBC" onClick={e => this.handleSubmit(e)}
        />
        </div>
      </div>
    );
  }
}

class AjaxFileListUpload extends Component{
  constructor(){
    super();
    this.state = {
      fileList: []
    };
  }
  componentDidMount(){
    const {caseid} = this.props;
    if(ENV === "dev"){
      this.setState({fileList: ["adfsafd"]})
    }
    else{
      $.ajax({
        url: '/getFileList',
        method: 'POST',
        data: {
          caseid,
        }
      }).done(data => {
        console.log(data);
        if(data)
          this.setState({fileList: data.map(f => f = f.fileid)})
      });
    }
  }
  render(){
    return <FileListUpload {...this.state}/>
  }
}


export {FileListUpload, AjaxFileListUpload};