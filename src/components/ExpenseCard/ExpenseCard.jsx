import './ExpenseCard.css';

export const ExpenseCard = ({expense, handleDeleteExpenseBtn, handleEditExpenseBtn}) => {
    const {NO_ID_FIELD: id, shopName, amount, categories, date, } = expense || {};

    return (
        <div className='expense-card-wrapper'>
            <p className='expense-card-text'>Shop: {shopName}</p>
            <p className='expense-card-text'>Amount: ${amount}</p>
            <p className='expense-card-text'>Category: {categories}</p>
            <p className='expense-card-text'>Date: {date}</p>
            <div className='expense-btn-wrapper'>
                <button className='edit-expense-btn' onClick={() => {
                    handleEditExpenseBtn(expense);
                }}>Edit expense</button>
                <button className='delete-expense-btn' onClick={() => handleDeleteExpenseBtn(id)}>Delete expense</button>
            </div>
        </div>
    )
}