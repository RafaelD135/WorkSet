package model.tasks;

import model.OSType;
import model.Task;

import java.io.IOException;
import java.util.UUID;

public class FileExplorerLauncher extends Task {
    private String projectPath;
    private String fileExplorer;

    public FileExplorerLauncher(String projectPath, String id) {
        this.projectPath = projectPath;
        if(id != null) {
            this.id = id;
        } else {
            this.id = UUID.randomUUID().toString();
        }
    }

    public void launchTask(OSType osType) {
        launchFileExplorer(osType);
    }

    public void launchFileExplorer(OSType osType)
    {
        if (osType == OSType.WINDOWS) {
            try {
                if(this.projectPath == null) {
                    new ProcessBuilder("explorer.exe").start();
                } else {
                    new ProcessBuilder("explorer.exe", this.projectPath).start();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        } else if (osType == OSType.LINUX) {
            try {
                if(this.projectPath == null) {
                    new ProcessBuilder("xdg-open").start();
                } else {
                    new ProcessBuilder("xdg-open", this.projectPath).start();
                }
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

    // ToString for debugging
    public String toString() {
        return "FileExplorerLauncher{" +
                "projectPath='" + projectPath + '\'' +
                ", fileExplorer='" + fileExplorer + '\'' +
                ", id='" + id + '\'' +
                '}';
    }
}