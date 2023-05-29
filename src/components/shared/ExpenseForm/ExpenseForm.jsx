import './ExpenseForm.css';

export const ExpenseForm = ({expenseData, handleFormChange, handleFormSubmit, setIsAddExpenseVisible}) => {
    return (
        <div className='expense-form-main-wrapper'>
            <header>
                <h3>Add expense</h3>
            </header>
            <form className="form-wrapper" onChange={handleFormChange} onSubmit={e => e.preventDefault()}>
                <div className="form-item">
                    <label htmlFor="shopName">Enter shop name:* </label>
                    <input defaultValue={expenseData.shopName} type="text" name="shopName" id="shopName" required/>
                </div>
                <div className="form-item">
                    <label htmlFor="amount">Enter amount:* </label>
                    <input defaultValue={expenseData.amount} type="number" name="amount" id='amount' required/>
                </div>
                <div className="form-item">
                    <label htmlFor="categories-select">Select category:* </label>
                    <select defaultValue={expenseData.categories} name="categories" id="categories-select" required>
                        <option value="">--Please choose an option--</option>
                        <option value="food">Food</option>
                        <option value="travelling">Travelling</option>
                        <option value="restaurants">Restaurants</option>
                        <option value="sport">Sport</option>
                        <option value="house">House</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-item">
                    <label htmlFor="amount">Expense date:* </label>
                    <input defaultValue={expenseData.date} type="date" name="date" id='date' required/>
                </div>
                <div className='expense-btn-wrapper'>
                    <button className='add-expense-btn' onClick={handleFormSubmit}>Add expense</button>
                    <button className='cancel-btn' onClick={() => setIsAddExpenseVisible(false)}>Cancel</button>
                </div>
            </form>
        </div>
    )
}