/*
 * Vincent Monard
 *     Copyright (C) 2019  Vincent Monard
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import withWidth from "@material-ui/core/withWidth";

const steps = [
  { year: 2013, label: "Bac Scientifique" },
  { year: 2015, label: "Stage à la BRED (3\u00a0mois)" },
  { year: 2015, label: "DUT Informatique" },
  { year: 2017, label: "Stage à l'INA (3\u00a0mois)" },
  { year: 2018, label: "Stage chez Oui.SNCF (6\u00a0mois)" },
  { year: 2018, label: "Diplôme d'ingénieur ESIEE\u00a0Paris" }
];

const isXSDevice = props => props.width === "xs";

const Studies = props => (
  <Paper>
    <Stepper
      orientation={isXSDevice(props) ? "vertical" : "horizontal"}
      alternativeLabel={!isXSDevice(props)}
      activeStep={steps.length}>
      {steps.map(step => (
        <Step key={step.label}>
          <StepLabel
            icon={<Typography variant="body1">{step.year}</Typography>}>
            {step.label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  </Paper>
);

export default withWidth()(Studies);
