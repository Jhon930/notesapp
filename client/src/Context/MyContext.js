import { useState, useContext, createContext, useEffect } from "react";
import toast from 'react-hot-toast'

const MyContext = createContext("");

export const useCustomContext = () => {
    return useContext(MyContext);
}

const CustomContextProvider = ({ children }) => {

    const API_BASE= 'http://localhost:5000/server/tasks';

    const [items, setItems] = useState([]);
    const [showA, setShowA] = useState(false);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({title: "", description: ""});

    const handleClose = () =>setShow(false); 
    const handleShow = () => setShow(true);
    const notify = () => toast.success('Has agregado una tarea');
    const notifyStatusChanged = () => toast.success('Tarea terminada');

    useEffect(() => {
        getTasks();
    }, []);

    const addTaskModal = async (form) => {
        await fetch(API_BASE, {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify({title: form.title, description: form.description})
        }).then(res => res.json())
    }

    const handleChange = (e) => {
        console.log(e)
        setForm((prevFormData) => ({...prevFormData, [e.target.name]: e.target.value}));
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        await addTaskModal(form)
        setForm('');
        handleClose();
        getTasks();
        getFilteredTasks("todo");
        notify();
    }

    const getTasks = () => {
        fetch(API_BASE)
        .then(res => res.json())
        .then(data => { setFilteredTasks(data) })
        .catch(err => console.error(err))
      }
    
    const getFilteredTasks = (status) => {
        fetch(API_BASE)
        .then(res => res.json())
        .then(data => { const filtered = data.filter((item) => item.status === status); setFilteredTasks(filtered) })
        .catch(err => console.error(err))
      }
    
    const handleFilterClick = (status) => {
        if(status === "all") {
            //setFilteredTasks(items);
            //console.log(items);
            getTasks();
        } else if(status === "todo" || status === "done") {
            //const filtered = items.filter((item) => item.status === status);
            //setFilteredTasks(filtered);
            getFilteredTasks(status);
        } else {
            setFilteredTasks(items);
        }
    }

    const editTaskStatus = async (taskId) => {
        await fetch(API_BASE + '/' + taskId, {
          method: "PUT",
          headers: {
            "content-type" : "application/json"
          },
          body: JSON.stringify({status: 'done', color: 'success'})
        })
        getFilteredTasks("done");
        notifyStatusChanged();
    }
    

    return (
        <MyContext.Provider value = {{items, showA, filteredTasks, show, form, handleClose, handleShow, addTaskModal, handleChange, handleSubmit, handleFilterClick, editTaskStatus  }}>
            {children}
        </MyContext.Provider>
    )

}


export { MyContext, CustomContextProvider }