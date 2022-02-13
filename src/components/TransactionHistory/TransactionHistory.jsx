import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";

export default function TransactionHistory({ transactions }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.prototype = {
  transactions: PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  }).isRequired,
};
