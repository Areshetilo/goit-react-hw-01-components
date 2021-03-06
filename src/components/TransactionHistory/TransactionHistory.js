import React from 'react';
import TransactionItem from './TransactionHistoryItem';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({transactions}) {
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
            {transactions.map(({ id, type, amount, currency }) => {
                return (
                    <TransactionItem
                        key={id}
                        type={type}
                        amount={amount}
                        currency={currency}
                    />
                );
            })}
            </tbody>
        </table>
    )
}
