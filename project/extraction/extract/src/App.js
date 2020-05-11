import React from "react";
import { CsvToHtmlTable } from "react-csv-to-table";

import { disclosureData } from "./disclosure.js";
import { creditData } from "./credit.js";
import { w2Data } from "./w2.js";
import { paystubData } from "./paystub.js";
import { appraisalData } from "./appraisal.js";
import { feedbackData } from "./feedback.js";

export const App = () => {
  return (
    <div className="container">

      <br/><br/>
      <CsvToHtmlTable
        data={sampleData}
        csvDelimiter=","
        tableClassName="table table-striped table-hover"
      />

    </div>
  );
};

export default App;
