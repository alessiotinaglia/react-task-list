
// importo l'array task
import tasks from "../dati/tasks";

function taskNoComponent() {
    console.log("xiaoo"); 
    const taskNoComponent = tasks.filter((task) => task.state == "completed").map((element) => {
        return (
            <li key={element.id}>
                <h3>{element.title}</h3>
                <p>Priority: {element.priority}</p>
                <p>Estimated Time: {element.estimatedTime} minutes</p>
            </li>
        );
    });
    console.log(taskNoComponent);
    return taskNoComponent
};

export default taskNoComponent;