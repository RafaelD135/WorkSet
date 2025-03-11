package model.tasks;

import model.OSType;
import model.Task;

import java.io.IOException;
import java.util.UUID;

public class VsCodeLauncher extends Task {
    private String projectPath;

    public VsCodeLauncher(String projectPath, String id) {
        if(projectPath.equals("null")) {
            this.projectPath = null;
        } else {
            this.projectPath = projectPath;
        }

        if(id != null) {
            this.id = id;
        } else {
            this.id = UUID.randomUUID().toString();
        }

        this.type = "VsCode";
    }

    public void launchTask(OSType osType) {
        launchVsCode(osType);
    }

    public void launchVsCode(OSType osType)
    {
        if (osType == OSType.WINDOWS) {
            try {
                if(this.projectPath == null) {
                    new ProcessBuilder("cmd", "/c", "start", "code").start();
                } else {
                    new ProcessBuilder("cmd", "/c", "start", "code", this.projectPath).start();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        } else if (osType == OSType.LINUX) {
            try {
                if(this.projectPath == null) {
                    new ProcessBuilder("code").start();
                } else {
                    new ProcessBuilder("code", this.projectPath).start();
                }
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

    // ToString for debugging
    public String toString() {
        return "VsCodeLauncher{" +
                "projectPath='" + projectPath + '\'' +
                ", id='" + id + '\'' +
                '}';
    }
}