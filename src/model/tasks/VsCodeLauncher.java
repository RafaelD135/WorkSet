package model.tasks;

import model.OSType;
import model.Task;

import java.io.IOException;

public class VsCodeLauncher extends Task {
    private String projectPath;

    public VsCodeLauncher(String projectPath) {
        this.projectPath = projectPath;
    }

    public void launchTask(OSType osType) {
        launchVsCode(osType);
    }

    public void launchVsCode(OSType osType)
    {
        if (osType == OSType.WINDOWS) {
            // TO DO
        } else if (osType == OSType.LINUX) {
            try {
                new ProcessBuilder("code", this.projectPath).start();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    // GET and SET methods
    public void setProjectPath(String projectPath) {
        this.projectPath = projectPath;
    }

    public String getProjectPath() {
        return projectPath;
    }
}