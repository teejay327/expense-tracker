import './ExpenseItem.css';

function ExpenseItem() {
return (
  <div className="expense-item">
    <div>2 November 2022</div>
		<div className="expense-item__description">
			<h2>Car Insurance</h2>
			<div className="expense-item__price">$380.45</div>
		</div>
  </div>
)
}

export default ExpenseItem;