import model.WorkSpace;
import model.Task;
import model.tasks.WebPageLauncher;

public class Controller {
    public static void main(String[] args) {
        // Create a new WorkSpace
        WorkSpace workSpace = new WorkSpace();

        // Add a new task to the WorkSpace
        Task webPage = new WebPageLauncher("https://www.youtube.com/");
        workSpace.addTask(webPage);

        // Launch the WorkSpace
        workSpace.launchWorkSpace();
    }
}
