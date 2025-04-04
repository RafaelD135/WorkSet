import model.OSType;
import model.Task;
import model.WorkSpace;
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
    public List<WorkSpace> workSpaces = new ArrayList<>();

    // Gestion des tasks
    public void loadTasks() {
        ObjectMapper mapper = new ObjectMapper();
        try {
            List<TaskData> taskDataList = mapper.readValue(new File("data/tasks/tasks.json"), new TypeReference<List<TaskData>>() {});
            for (TaskData taskData : taskDataList) {
                switch (taskData.type) {
                    case "Terminal":
                        tasks.add(new TerminalLauncher(taskData.projectPath,taskData.id));
                        break;
                    case "WebPage":
                        tasks.add(new WebPageLauncher(taskData.url,taskData.id));
                        break;
                    case "VsCode":
                        tasks.add(new VsCodeLauncher(taskData.projectPath,taskData.id));
                        break;
                    case "FileExplorer":
                        tasks.add(new FileExplorerLauncher(taskData.projectPath,taskData.id));
                        break;
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void saveTasks() {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            objectMapper.writeValue(new File("data/tasks/tasks.json"), tasks);
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
        public String projectPath;
        public String url;
        public String id;
    }

    public Task getTaskById(String id) {
        for (Task task : tasks) {
            if (task.getId().equals(id)) {
                return task;
            }
        }
        return null;
    }

    public void createTask(String type, String projectPath, String url,WorkSpace workSpace) {
        Task task = null;
        switch (type) {
            case "Terminal":
                task = new TerminalLauncher(projectPath,null);
                break;
            case "WebPage":
                task = new WebPageLauncher(url,null);
                break;
            case "VsCode":
                task = new VsCodeLauncher(projectPath,null);
                break;
            case "FileExplorer":
                task = new FileExplorerLauncher(projectPath,null);
                break;
        }
        if (task != null) {
            tasks.add(task);
            saveTasks();
        }
        if(workSpace != null) {
            workSpace.addTask(task);
            // saveWorkspaces
        }
    }

    // Gestion des WorkSpaces
    public void loadWorkSpaces() {
        ObjectMapper mapper = new ObjectMapper();
        try {
            List<WorkSpaceData> workSpaceDataList = mapper.readValue(new File("data/workSpaces/workspaces.json"), new TypeReference<List<WorkSpaceData>>() {});
            for (WorkSpaceData workSpaceData : workSpaceDataList) {
                WorkSpace workSpace = new WorkSpace(workSpaceData.id);
                for (String taskId : workSpaceData.tasks) {
                    Task task = getTaskById(taskId);
                    if (task != null) {
                        workSpace.addTask(task);
                    }
                }
                workSpaces.add(workSpace);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void printWorkSpaces() {
        if (workSpaces.isEmpty()) {
            System.out.println("No workspaces loaded.");
            return;
        }
        for (WorkSpace workSpace : workSpaces) {
            System.out.println(workSpace);
        }
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    private static class WorkSpaceData {
        public String id;
        public List<String> tasks;
    }

    public static void main(String[] args) {
        Controller controller = new Controller();
        controller.loadTasks();
        // controller.printTasks();
        controller.loadWorkSpaces();
        controller.printWorkSpaces();
        controller.workSpaces.get(0).launchWorkSpace();
    }
}
