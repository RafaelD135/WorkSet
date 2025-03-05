import model.WorkSpace;
import model.Task;
import model.tasks.VsCodeLauncher;

public class Controller {
    public static void main(String[] args) {
        // Create a new WorkSpace
        WorkSpace workSpace = new WorkSpace();

        // Add a new task to the WorkSpace
        Task vsCodeLauncher = new VsCodeLauncher("/path/to/project");
        workSpace.addTask(vsCodeLauncher);

        // Launch the WorkSpace
        workSpace.launchWorkSpace();
    }
}
