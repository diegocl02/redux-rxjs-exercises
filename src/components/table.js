import React from "react";

const Header = props => {
  return (
    <div key={"header"} className={"header"}>
      {Object.keys(props.data[0]).map(header => {
        return (
          <div key={header} className={"cell"}>
            {header}
          </div>
        );
      })}
    </div>
  );
};

const Row = props => {
  const cellClass = props.first ? "cell first" : "cell"
  return (
    <div className={"row"} onClick={props.reportRowClicked}>
      {Object.keys(props.row).map(key => {
        return (
          <div key={key} className={cellClass}>
            {props.row[key]}
          </div>
        );
      })}
    </div>
  );
};

export class Table extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div className="table">
        <Header {...this.props} />

        <Row
          first
          key={"first"}
          row={data[this.props.first]}
          reportRowClicked={() => this.props.reportRowClicked(this.props.first)}
        />

        {data.map((row, index) => {
          if (index !== this.props.first)
            return (
              <Row
                key={index}
                row={row}
                reportRowClicked={() => this.props.reportRowClicked(index)}
              />
            );
          else return null
        })}
      </div>
    );
  }
}
