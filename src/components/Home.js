import React from "react";

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Row, Col, Button } from "react-bootstrap";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      integerList: [
        "age",
        "bp",
        "bgr",
        "bu",
        "sc",
        "sod",
        "pot",
        "hemo",
        "pcv",
        "wbccc",
        "rbcc",
      ],
      stringList: [
        { label: "sg", list: [], type: "number" },
        { label: "rbc", list: ["normal", "abnormal"], type: "string" },
        { label: "rbc", list: ["normal", "abnormal"], type: "string" },
        { label: "rbc", list: ["normal", "abnormal"], type: "string" },
        { label: "rbc", list: ["normal", "abnormal"], type: "string" },
        { label: "rbc", list: ["normal", "abnormal"], type: "string" },
        { label: "rbc", list: ["normal", "abnormal"], type: "string" },
        { label: "rbc", list: ["normal", "abnormal"], type: "string" },
        { label: "rbc", list: ["normal", "abnormal"], type: "string" },
        { label: "rbc", list: ["normal", "abnormal"], type: "string" },
        { label: "rbc", list: ["normal", "abnormal"], type: "string" },
        { label: "rbc", list: ["normal", "abnormal"], type: "string" },
      ],

      age: "",
      rbc: "",
    };
  }

  onChange = (key, event) => {
    if (event) {
      this.setState({ [key]: event.target.value }, () => {
        console.log("this.state ==>", this.state);
      });
    }
  };

  handleSubmit = () => {
    console.log("this.state current data", this.state);
    let config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    let url = "http://localhost";

    // sending request
    return fetch(url, config).then((response) => {});
  };

  render() {
    return (
      <div className="container">
        <h1>{"Form"}</h1>
        {this.state.stringList.map((item, index) => {
          console.log("item =>", item, "index =>", index);
          return (
            <Row style={{ marginBottom: "10px" }}>
              {this.state.integerList[index] !== undefined ? (
                <Col lg={3} md={3} sm={12} xs={12}>
                  <TextField
                    type={"number"}
                    variant="outlined"
                    id={this.state.integerList[index]}
                    label={this.state.integerList[index] || ""}
                    value={this.state[this.state.integerList[index]] || ""}
                    onChange={(event) => {
                      this.onChange(this.state.integerList[index], event);
                    }}
                  />
                </Col>
              ) : (
                <Col lg={3} md={3} sm={12} xs={12}></Col>
              )}
              <Col lg={3} md={3} sm={12} xs={12} style={{ with: "200px" }}>
                <TextField
                  select
                  id={item.label}
                  variant="outlined"
                  label={item.label}
                  value={this.state[item.label] || ""}
                  onChange={(event) => {
                    this.onChange(item.label, event);
                  }}
                >
                  {item.list &&
                    item.list.map((data, index) => (
                      <MenuItem key={index} value={data}>
                        {data}
                      </MenuItem>
                    ))}
                </TextField>
              </Col>
            </Row>
          );
        })}

        <div>
          <Button variant="primary" onClick={this.handleSubmit}>
            {"Submit"}
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
