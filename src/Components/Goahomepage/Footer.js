import React from 'react';
import TextButtons5 from './Terms&Conditions';
import TextButtons6 from './Disclaimer';
import TextButtons7 from './PrivacyPolicies';
import TextButtons8 from './HyperlinkingPolicies';
import TextButtons9 from './Help';
import ButtonLink5 from './CallUs';
import ButtonLink6 from './Email';
import ContainedButtons1 from './YoutubeIcon';
import ContainedButtons2 from './TwitterIcon';
import ContainedButtons3 from './FacebookIcon';
import ContainedButtons4 from './InstaIcon';


export default function AppFooter() {
  return (
    <div className="root">
        
      <footer className="App-footer">
        <div className="flexbox-container">
        <p>
              Policies
            </p>
            <TextButtons5/>
            <TextButtons6/>
            <TextButtons7/>
            <TextButtons8/>
            <TextButtons9/>
            <p>
              Contact Us
            </p>
            <p>
              Goa Tourism Department
            </p>
            <p>
              Paryatan Bhavan, 2nd Floor, Patto
            </p>
            <p>
              Panaji-Goa, India 403001
            </p>
            <p>
            <ButtonLink5/>
            </p>
            <p>
            <ButtonLink6/>
            </p>
            <ContainedButtons1/>
            <ContainedButtons2/>
            <ContainedButtons3/>
            <ContainedButtons4/>
            <p>
            Copyright © 2021. All Rights Reserved.This is the official website of Goa Tourism Department, Govt of Goa.
            </p>
         

        </div>
      </footer>

    </div>
  );
}