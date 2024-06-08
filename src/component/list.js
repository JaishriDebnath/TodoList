import "./List.css";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

export const List = ({todolist , handleToggle , handleDelete}) =>{
return (
    <ul className="list">
        {todolist.map((listItem) =>(
            <li key={listItem.id} className={listItem.done ? "done":''}>
                <span>
                    {listItem.item}
                </span>
                <span className ="actions">
                    {
                        listItem.done ?(
                        <CloseIcon onClick = {() => handleToggle(listItem.id) }/>
                    ):(
                    <CheckCircleOutlineIcon onClick = {() => handleToggle(listItem.id)} />
                )
                    }
                   
                   <DeleteOutlineIcon onClick = {() => handleDelete(listItem.id) } />
                </span>
            </li>
        )

        )}
    </ul>
);
};