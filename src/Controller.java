import model.Task;
import model.tasks.TerminalLauncher;
import model.tasks.WebPageLauncher;
import model.tasks.VsCodeLauncher;
import model.tasks.FileExplorerLauncher;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.io.IOException;
import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class Controller {
    public List<Task> tasks = new ArrayList<>();

    public void loadTasks() {
        ObjectMapper mapper = new ObjectMapper();
        try {
            List<TaskData> taskDataList = mapper.readValue(new File("data/tasks/tasks.json"), new TypeReference<List<TaskData>>() {});
            for (TaskData taskData : taskDataList) {
                switch (taskData.type) {
                    case "Terminal":
                        tasks.add(new TerminalLauncher(taskData.path,taskData.id));
                        break;
                    case "WebPage":
                        tasks.add(new WebPageLauncher(taskData.url,taskData.id));
                        break;
                    case "VsCode":
                        tasks.add(new VsCodeLauncher(taskData.path,taskData.id));
                        break;
                    case "FileExplorer":
                        tasks.add(new FileExplorerLauncher(taskData.path,taskData.id));
                        break;
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void printTasks() {
        if (tasks.isEmpty()) {
            System.out.println("No tasks loaded.");
            return;
        }
        for (Task task : tasks) {
            System.out.println(task);
        }
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    private static class TaskData {
        public String type;
        public String path;
        public String url;
        public String id;
    }

    public static void main(String[] args) {
        Controller controller = new Controller();
        controller.loadTasks();
        controller.printTasks();
    }
}
