package model.tasks;

import model.OSType;
import model.Task;

import java.io.IOException;

public class FileExplorerLauncher extends Task {
    private String projectPath;
    private String fileExplorer;

    public FileExplorerLauncher(String projectPath) {
        this.projectPath = projectPath;
    }

    public void launchTask(OSType osType) {
        launchFileExplorer(osType);
    }

    public void launchFileExplorer(OSType osType)
    {
        if (osType == OSType.WINDOWS) {
            // TO DO
        } else if (osType == OSType.LINUX) {
            try {
                new ProcessBuilder("xdg-open", this.projectPath).start();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public void detectDefaultFileExplorer() {
        // TO DO
    }

    // GET and SET methods
    public void setFileExplorer(String fileExplorer) {
        this.fileExplorer = fileExplorer;
    }

    public String getFileExplorer() {
        return fileExplorer;
    }

    public void setProjectPath(String projectPath) {
        this.projectPath = projectPath;
    }

    public String getProjectPath() {
        return projectPath;
    }
}