import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiException } from "../../shared/services/api/ApiException";
import {
  ITarefa,
  TarefasService,
} from "../../shared/services/api/tarefas/TarefasService";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [list, setList] = useState<ITarefa[]>([]);

  useEffect(() => {
    TarefasService.getAll().then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        setList(result);
      }
    });
  }, []);

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        if (e.key === "Enter") {
          if (e.currentTarget.value.trim().length === 0) return;
          const value = e.currentTarget.value;
          e.currentTarget.value = "";

          if (list.some((listItem) => listItem.title === value)) return;
          TarefasService.create({
            title: value,
            isCompleted: false,
          }).then((result) => {
            if (result instanceof ApiException) {
              alert(result.message);
            } else {
              setList((oldList) => [...oldList,result]);
            }
          });
        }
      },
      [list]
    );

    const handleToggleComplete = useCallback((id: number)=>{

      const tarefaToUpdate = list.find((tarefa) => tarefa.id === id)
      if(!tarefaToUpdate) return;


      TarefasService.updateById(id, {
        ...tarefaToUpdate,
        isCompleted: !tarefaToUpdate.isCompleted
      })
      .then((result) => {
        if(result instanceof ApiException){
          alert(result.message)
        } else {
          setList(oldList => {
            return oldList.map(oldListItem => {
              if(oldListItem.id === id) return result;
              return oldListItem
            });
          });
        }

      })

      

    },[list])

    const handleDelete = useCallback((id: number)=>{

      TarefasService.deleteById(id)
      .then((result) => {
        if(result instanceof ApiException){
          alert(result.message)
        } else {
          setList(oldList => {
            return oldList.filter(oldListItem => oldListItem.id === id);
          });
        }

      })

      

    },[list])

  return (
    <div>
      <p>Dashboard - List</p>

      <input onKeyDown={handleInputKeyDown} />

      <p>{list.filter((listItem) => listItem.isCompleted).length}</p>

      <ul>
        {list.map((listItem) => {
          return (
            <li key={listItem.id}>
              <input
                type="checkbox"
                checked={listItem.isCompleted}
                onChange={() => handleToggleComplete(listItem.id)}
              />
              {listItem.title}

              <button onClick={() => handleDelete(listItem.id)}>Deletar</button>
            </li>
          );
        })}
      </ul>
      
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  );
};
