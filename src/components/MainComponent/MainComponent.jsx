import {ExpenseForm} from '../shared/ExpenseForm/ExpenseForm';
import {ExpenseCard} from '../ExpenseCard/ExpenseCard';
import {useMainComponent} from './hooks';

import './MainComponent.css';

export const MainComponent = () => {
    const {
        isAddExpenseVisible,
        myExpenses,
        expenseData,
        expenseForEdit,
        expenseFormMode,
        handleFormChange,
        setExpenseData,
        setExpenseForEdit,
        handleFormSubmit,
        handleDeleteExpenseBtn,
        setIsAddExpenseVisible,
        setExpenseFormMode,
        handleEditExpenseBtn,
        handleExpenseEditSubmit
    } = useMainComponent();

    const expenseFormMapping = {
        edit: <ExpenseForm expenseData={expenseForEdit} handleFormChange={handleFormChange(setExpenseForEdit)}
                           handleFormSubmit={handleExpenseEditSubmit}
                           setIsAddExpenseVisible={setIsAddExpenseVisible}/>,
        add: <ExpenseForm expenseData={expenseData} handleFormChange={handleFormChange(setExpenseData)}
                          handleFormSubmit={handleFormSubmit}
                          setIsAddExpenseVisible={setIsAddExpenseVisible}/>
    }

    return (
        <div className='main-wrapper'>
            <div>
                <header className='header-wrapper'>
                    <h2>My expenses</h2>
                </header>
                <main className='expense-cards-wrapper'>
                    {myExpenses?.length > 0 ? myExpenses.map((expense) =>
                        <ExpenseCard expense={expense}
                                     key={expense.id}
                                     handleDeleteExpenseBtn={handleDeleteExpenseBtn}
                                     setIsAddExpenseVisible={setIsAddExpenseVisible}
                                     handleEditExpenseBtn={handleEditExpenseBtn} />
                    ) : <p>Expenses are not added</p>}
                </main>
                {isAddExpenseVisible ?
                    expenseFormMapping[expenseFormMode]
                    :
                    <div className='add-btn-wrapper'>
                        <button className='add-expense-btn' onClick={() => {
                            setExpenseFormMode('add')
                            setIsAddExpenseVisible(true)
                        }}>Add new
                            expense
                        </button>
                    </div>}
            </div>
        </div>
    )
}