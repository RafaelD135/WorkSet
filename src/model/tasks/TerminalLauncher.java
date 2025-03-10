package model.tasks;

import model.OSType;
import model.Task;

import java.io.IOException;
import java.util.UUID;

public class TerminalLauncher extends Task {
    private String projectPath;
    private String terminalType;

    public TerminalLauncher(String projectPath, String id) {
        this.projectPath = projectPath;

        if(id != null) {
            this.id = id;
        } else {
            this.id = UUID.randomUUID().toString();
        }
    }

    public void launchTask(OSType osType) {
        launchTerminal(osType);
    }
    
    public void launchTerminal(OSType osType)
    {
        if (osType == OSType.WINDOWS) {
            try {
                if(this.projectPath == null) {
                    new ProcessBuilder("cmd", "/c", "start", "powershell", "-NoExit", "-Command", "cd C:\\").start();
                } else {
                    new ProcessBuilder("powershell", "-NoExit", "-Command", "Start-Process powershell -ArgumentList '-NoExit', '-Command cd \"" + this.projectPath + "\"'").start();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        } else if (osType == OSType.LINUX) {
            try {
                if(this.projectPath == null) {
                    new ProcessBuilder("gnome-terminal").start();
                } else {
                    new ProcessBuilder("gnome-terminal", "--working-directory=" + this.projectPath).start();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public void detectDefaultTerminal() {
        // TO DO
    }

    // GET and SET methods
    public void setTerminalType(String terminalType) {
        this.terminalType = terminalType;
    }

    public String getTerminalType() {
        return terminalType;
    }

    public void setProjectPath(String projectPath) {
        this.projectPath = projectPath;
    }

    public String getProjectPath() {
        return projectPath;
    }

    // ToString for debugging
    public String toString() {
        return "TerminalLauncher{" +
                "projectPath='" + projectPath + '\'' +
                ", terminalType='" + terminalType + '\'' +
                '}';
    }
}