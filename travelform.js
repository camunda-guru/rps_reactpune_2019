import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export class TravelForm extends Component {
    render() {
        const { values, handleChange } = this.props;
        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Travel Information
                </Typography>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <TextField
                            id="place"
                            name="place"
                            required
                            label="Place"
                            onChange={handleChange("place")}
                            defaultValue={values.place}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="days"
                            type="number"
                            name="days"
                            required
                            label="How Many Days"
                            fullWidth
                            onChange={handleChange("days")}
                            defaultValue={values.days}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="purpose"
                            name="purpose"
                            required
                            label="Why do you travel"
                            onChange={handleChange("purpose")}
                            defaultValue={values.purpose}
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default TravelForm;