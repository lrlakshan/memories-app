import React, { useState } from "react";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";
import { createPost } from "../../reducers/postSlice";
import { PaperComponent, FormComponent, TextFiledComponent, FileImportComponent, ButtonComponent} from "./style";

const Forms = () => {

    const [postData, setPostData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: ''});

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));
        console.log("Clicked");
    };

    const clear = () => {
        console.log("clear");
    }

    return (
        <PaperComponent>
            <FormComponent autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">Creating memory</Typography>
                <TextFiledComponent name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({...postData, creator: e.target.value})}></TextFiledComponent>
                <TextFiledComponent name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})}></TextFiledComponent>
                <TextFiledComponent name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})}></TextFiledComponent>
                <TextFiledComponent name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value})}></TextFiledComponent>
                <FileImportComponent><FileBase type="File" multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})}></FileBase></FileImportComponent>
                <ButtonComponent variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</ButtonComponent>
                <ButtonComponent variant="contained" color="secondary" size="small" onClick={clear}>Clear</ButtonComponent>
            </FormComponent>
        </PaperComponent>
    )
}

export default Forms;