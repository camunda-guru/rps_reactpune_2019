import React, {Component} from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import axios from 'axios';
const apiUrl = 'http://visaapp.us-east-1.elasticbeanstalk.com';
export class VisaForm extends Component
{

    constructor(props)
    {
        super(props);
        console.log(props.data);

    }

    componentDidMount()
    {
        axios.post(`${apiUrl}/addvisa`, this.props.data)
            .then(response =>
                console.log(response.data)
            )
            .catch(error => {
                throw(error);
            });
    }

    render()
    {
        return(
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
                            value={this.props.data.firstName}

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
                            value={this.props.data.lastName}

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
                            value={this.props.data.address1}

                            fullWidth
                            autoComplete="address-line1"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="address2"
                            name="address2"
                            label="Address line 2"
                            value={this.props.data.address2}

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
                            value={this.props.data.city}

                            fullWidth
                            autoComplete="address-level2"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="state"
                            name="state"
                            label="State/Province/Region"
                            value={this.props.data.state}

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
                            value={this.props.data.zip}

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
                            value={this.props.data.country}

                            fullWidth
                            autoComplete="country"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            value={this.props.data.email}

                            fullWidth
                            autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="password"
                            name="password"
                            label="Password"
                            value={this.props.data.password}

                            fullWidth
                            autoComplete="password"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="place"
                            name="place"
                            label="Place"
                            value={this.props.data.place}

                            fullWidth
                            autoComplete="place"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="days"
                            name="days"
                            label="Days"
                            value={this.props.data.days}

                            fullWidth
                            autoComplete="days"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="purpose"
                            name="pupose"
                            label="Purpose"
                            value={this.props.data.purpose}

                            fullWidth
                            autoComplete="purpose"
                        />
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}

