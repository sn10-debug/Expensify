import React from "react";
import { removeExpense } from "../actions/expenses";
import { connect } from "react-redux";
import { editExpense } from "../actions/expenses";
import EditExpenseBar from "./EditExpenseBar";

class Expense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
    };
    this.onRemoveClick = this.onRemoveClick.bind(this);
    this.activateEditMode = this.activateEditMode.bind(this);
    this.onSaveEdits = this.onSaveEdits.bind(this);
  }

  onRemoveClick(e) {
    // let id = e.target.closest(".expense").classList[1];
    let id = this.props.id;

    this.props.dispatch(removeExpense({ id }));
  }

  activateEditMode() {
    this.setState(() => ({
      editMode: true,
    }));
  }

  onSaveEdits(changes) {
    let id = this.props.id;
    this.setState(() => ({
      editMode: false,
    }));

    this.props.dispatch(editExpense({ id, changes }));

    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div className={`expense ${this.props.id}`}>
            <p>{this.props.name}</p>
            <p>{this.props.amount}</p>
            <p>{this.props.description}</p>
            <p>
              {new Intl.DateTimeFormat("en-GB").format(this.props.createDate)}
            </p>
            {!this.props.edit ? (
              <button onClick={this.onRemoveClick}>Remove</button>
            ) : (
              <button onClick={this.activateEditMode}>Edit</button>
            )}
          </div>
        )}

        {this.state.editMode && (
          <div>
            <EditExpenseBar onSaveEdits={this.onSaveEdits} {...this.props} />
          </div>
        )}
      </div>
    );
  }
}

export default connect()(Expense);
