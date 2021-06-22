// react
import React from 'react';

// material-ui
import { Modal, Fade, Backdrop, makeStyles, FormControl, TextField, MenuItem, Select, InputLabel } from '@material-ui/core'
import { Formik, Form, Field } from 'formik';


export const Register = ({ modal, setModal, classes }) => {
    // options
    let options = ['No', 'Yes', 'Not Sure']

    return (
        <>
            <p>We look forward to seeing you! Fill out form below.</p>
            <hr />
            <div className="rsvp-component">
                <Formik
                    initialValues={{ party: '', email: '', attendees: [], status: 'No', questions: '' }}
                    onSubmit={data => Promise.resolve(data).then(fetch('/register', {
                        method: 'POST',
                        mode: 'cors',
                        credentials: 'same-origin',
                        cache: 'no-cache',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(data)

                    })).then(setModal({
                        state: true,
                        name: "Alert",
                        data: {}
                    }))}
                >
                    {({ values }) => (
                        <Form>
                            <FormControl fullWidth>
                                <Field name="party" as={TextField} variant="outlined" label="Party Name" />
                            </FormControl>

                            <FormControl fullWidth className={classes.formControl}>
                                <Field name="email" as={TextField} variant="outlined" label="Email" />
                            </FormControl>

                            <FormControl fullWidth className={classes.formControl}>
                                <Field name="attendees" as={TextField} variant="outlined" label="Attendees" />
                            </FormControl>

                            <FormControl fullWidth className={classes.formControl}>
                                <Field name="status" as={Select} variant="outlined" labelId="status-label">
                                    <InputLabel id="status-label">Status</InputLabel>
                                    {options.map(option => (
                                        <MenuItem key={option} value={option}>{option}</MenuItem>
                                    ))}
                                </Field>
                            </FormControl>

                            <FormControl fullWidth className={classes.formControl}>
                                <Field name="questions" as={TextField} variant="outlined" label="Questions" />
                            </FormControl>

                            <div className="submit-button">
                                <button type="submit">Submit</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export const Alert = ({ modal, setModal, classes }) => {
    return (
        <div>
            Submitted! Thanks!
        </div>
    )
}