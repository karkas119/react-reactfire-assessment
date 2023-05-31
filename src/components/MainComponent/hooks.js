import {useState} from "react";
import {useFirestore, useFirestoreCollectionData} from "reactfire";
import {collection, doc, query, addDoc, deleteDoc, updateDoc} from "firebase/firestore";

export const useMainComponent = () => {
    const [expenseData, setExpenseData] = useState({
        amount: '',
        categories: '',
        shopName: '',
        date: ''
    });
    const [isAddExpenseVisible, setIsAddExpenseVisible] = useState(false);
    const [expenseFormMode, setExpenseFormMode] = useState('');
    const [expenseForEdit, setExpenseForEdit] = useState(null);
    const firestore = useFirestore();
    const expensesCollection = collection(firestore, 'my-expenses');
    const expensesQuery = query(expensesCollection);
    const {data: myExpenses} = useFirestoreCollectionData(expensesQuery);

    const handleFormChange = (stateSetter) => (e) => {
        stateSetter(prevExpenseData => ({
            ...prevExpenseData,
            [e.target.name]: e.target.value,
        }))
    }

    const handleFormSubmit = async () => {
        if (Object.values(expenseData).every(value => !!value)) {
            setIsAddExpenseVisible(false)
            setExpenseData({
                amount: '',
                categories: '',
                shopName: '',
                date: ''
            })
            await addDoc(expensesCollection, {
                ...expenseData,
                id: Math.random(),
            });
        }
    }

    const handleExpenseEditSubmit = async () => {
        setIsAddExpenseVisible(false)
        await updateDoc(doc(expensesCollection, expenseForEdit.NO_ID_FIELD), expenseForEdit);
    }

    const handleDeleteExpenseBtn = async (docId) => {
        await deleteDoc(doc(expensesCollection, docId));
    }

    const handleEditExpenseBtn = (expense) => {
        setExpenseForEdit(expense);
        setExpenseFormMode('edit');
        setIsAddExpenseVisible(true)
    }

    return {
        expenseData,
        myExpenses,
        isAddExpenseVisible,
        expenseFormMode,
        expenseForEdit,
        handleFormChange,
        setExpenseData,
        setExpenseForEdit,
        handleFormSubmit,
        handleDeleteExpenseBtn,
        setIsAddExpenseVisible,
        setExpenseFormMode,
        handleEditExpenseBtn,
        handleExpenseEditSubmit
    }
}