import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export class PersonalDetailsForm extends Component {
    render() {
        const { values, handleChange } = this.props;
        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Personal Information
                </Typography>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First name"
                            onChange={handleChange("firstName")}
                            defaultValue={values.firstName}
                            fullWidth
                            autoComplete="fname"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            onChange={handleChange("lastName")}
                            defaultValue={values.lastName}
                            fullWidth
                            autoComplete="lname"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address1"
                            name="address1"
                            label="Address line 1"
                            onChange={handleChange("address1")}
                            defaultValue={values.address1}
                            fullWidth
                            autoComplete="address-line1"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="address2"
                            name="address2"
                            label="Address line 2"
                            onChange={handleChange("address2")}
                            defaultValue={values.address2}
                            fullWidth
                            autoComplete="address-line2"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="city"
                            name="city"
                            label="City"
                            onChange={handleChange("city")}
                            defaultValue={values.city}
                            fullWidth
                            autoComplete="address-level2"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="state"
                            name="state"
                            label="State/Province/Region"
                            onChange={handleChange("state")}
                            defaultValue={values.state}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            type="number"
                            id="zip"
                            name="zip"
                            label="Zip / Postal code"
                            onChange={handleChange("zip")}
                            defaultValue={values.zip}
                            fullWidth
                            autoComplete="postal-code"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="country"
                            name="country"
                            label="Country"
                            onChange={handleChange("country")}
                            defaultValue={values.country}
                            fullWidth
                            autoComplete="country"
                        />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default PersonalDetailsForm;