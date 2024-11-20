import React from "react";
import './App.css';
import { Grid } from "semantic-ui-react";

function Footer() {
  return (
    <div className="footer">
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column>
            <h4>Explore</h4>
            <ul>
              <li>Home</li>
              <li>Questions</li>
              <li>Articles</li>
              <li>Tutorials</li>
            </ul>
          </Grid.Column>
          <Grid.Column>
            <h4>Support</h4>
            <ul>
              <li>FAQs</li>
              <li>Help</li>
              <li>Contact Us</li>
            </ul>
          </Grid.Column>
          <Grid.Column>
            <h4>Stay Connected</h4>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="footer-bottom">
        <p>DEV@Deakin 2022 | Privacy Policy | Terms | Code of Conduct</p>
      </div>
    </div>
  );
}

export default Footer;
