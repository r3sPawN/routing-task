import React from "react";
import "./employees.css";
import { trackPromise } from "react-promise-tracker";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";

const TYPES = {
  salary: (a, b) => a.employee_salary - b.employee_salary,
  age: (a, b) => a.employee_age - b.employee_age,
  name: (a, b) => a.employee_name.localeCompare(b.employee_name),
};

export class Employees extends React.Component {
  state = {
    employees: [],
  };

  async componentDidMount() {
    const res = await trackPromise(
      fetch("http://dummy.restapiexample.com/api/v1/employees")
    );
    const result = await res.json();
    this.setState({ employees: result.data });
    setInterval(() => {
      this.sortBy();
    }, 10000);
  }

  sortBy() {
    const { employees } = this.state;
    const newState = employees.sort(this.randomProperty(TYPES));
    const pickFirstEntries = newState.slice(0, 12);
    this.setState({ employees: pickFirstEntries });
  }

  randomProperty(obj) {
    var keys = Object.keys(obj);
    return obj[keys[(keys.length * Math.random()) << 0]];
  }

  renderEmployee = (employee) => {
    return (
      <div className="employee-container" key={employee.id}>
        <div>
          <span>Emoloyee name: {employee.employee_name}</span>
        </div>
        <div>
          <span>Emoloyee salary: {employee.employee_salary} moneySS</span>
        </div>
        <div>
          <span>Emoloyee age: {employee.employee_age}</span>
        </div>
      </div>
    );
  };

  LoadingIndicator = (props) => {
    const { promiseInProgress } = usePromiseTracker();
    return (
      promiseInProgress && (
        <div
          style={{
            width: "100%",
            height: "100",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader
            type="ThreeDots"
            color="deepskyblue"
            height="100"
            width="100"
          />
        </div>
      )
    );
  };

  render() {
    const { employees } = this.state;

    return (
      <div className="container">
        <this.LoadingIndicator />
        {employees.map((employee) => this.renderEmployee(employee))}
      </div>
    );
  }
}
