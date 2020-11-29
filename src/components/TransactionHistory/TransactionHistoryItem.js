import React from 'react';
import PropTypes from 'prop-types';

export default function TransactionItem({ type, amount, currency }) {
    return (
        <tr>
            <td>{type[0].toUpperCase()+type.slice(1)}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    );
}

TransactionItem.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
};
