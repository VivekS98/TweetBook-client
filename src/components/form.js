import React from 'react';
import '../styling/main.css';
import {FormControl, InputLabel, Input, FormHelperText} from '@material-ui/core/';

function Username({handleChange, input}) {
    return <FormControl fullWidth={true}>
                <InputLabel htmlFor="my-input">User Name:</InputLabel>
                <Input required={true} type="text" id="my-input" aria-describedby="my-helper-text" name="username" value={input}  onChange={(e) => handleChange(e)} />
                <FormHelperText id="my-helper-text">Enter the user name.</FormHelperText>
            </FormControl>
}

function Email({handleChange, input}) {
    return <FormControl fullWidth={true}>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input required={true} type="text" id="my-input" aria-describedby="my-helper-text" name="email" value={input} onChange={(e) => handleChange(e)} />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
}

function Password({handleChange}) {
    return <FormControl fullWidth={true}>
                <InputLabel htmlFor="my-input">Password</InputLabel>
                <Input required={true} type="password" id="my-input" aria-describedby="my-helper-text" name="password" onChange={(e) => handleChange(e)} />
                <FormHelperText id="my-helper-text">Keep it strong and secure.</FormHelperText>
            </FormControl>
} 

function ProfileImgUrl({handleChange, input}) {
    return <FormControl fullWidth={true}>
                <InputLabel htmlFor="my-input">Profile picture link:</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" value={input} name="profileImgUrl" onChange={(e) => handleChange(e)} />
                <FormHelperText id="my-helper-text">Enter the URL of the profile picture.</FormHelperText>
            </FormControl>
}

export { Username, Email, Password, ProfileImgUrl };