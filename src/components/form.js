import React from 'react';
import {FormControl, InputLabel, Input, FormHelperText} from '@material-ui/core/';

const username = ({handleChange}) => <FormControl>
                    <InputLabel htmlFor="my-input">User Name:</InputLabel>
                    <Input type="text" id="my-input" aria-describedby="my-helper-text" onChange={() => handleChange()} />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>

const email = ({handleChange}) => <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input type="text" id="my-input" aria-describedby="my-helper-text" onChange={() => handleChange()} />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>

const password = ({handleChange}) => <FormControl>
                    <InputLabel htmlFor="my-input">Password</InputLabel>
                    <Input type="password" id="my-input" aria-describedby="my-helper-text" onChange={() => handleChange()} />
                    <FormHelperText id="my-helper-text">Keep it strong and secure.</FormHelperText>
                </FormControl>

const profileImgUrl = ({handleChange}) => <FormControl>
                        <InputLabel htmlFor="my-input">Profile picture link:</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" onChange={() => handleChange()} />
                        <FormHelperText id="my-helper-text">Enter the URL of the profile picture.</FormHelperText>
                    </FormControl>

export { username, email, password, profileImgUrl };