// importo l'array task

import tasks from "../dati/tasks";

function taskComponent() {
    console.log("xiaoo"); 
    const notCompletedTasks = tasks.filter((task) => task.state !== "completed").map((element) => {
        return (
            <li key={element.id}>
                <h3>{element.title}<span className='button'>{element.state}</span></h3>
                <p>Priority: {element.priority}</p>
                <p>Estimated Time: {element.estimatedTime} minutes</p>
            </li>
        );
    });
    console.log(notCompletedTasks);
    return notCompletedTasks
};

export default taskComponent;