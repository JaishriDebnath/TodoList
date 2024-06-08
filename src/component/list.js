import "./List.css";
 
export const List = ({todolist}) =>{
return (
    <ul className="list">
        {todolist.map((listItem) =>(
            <li key={listItem.id}>
                <span>
                    {listItem.item}
                </span>
            </li>
        )

        )}
    </ul>
);
};