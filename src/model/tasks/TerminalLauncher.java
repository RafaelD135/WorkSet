package model.tasks;

import model.OSType;
import model.Task;

import java.io.IOException;

public class TerminalLauncher extends Task {
    private String projectPath;
    private String terminalType;

    public TerminalLauncher(String projectPath) {
        this.projectPath = projectPath;
    }

    public void launchTask(OSType osType) {
        launchTerminal(osType);
    }
    
    public void launchTerminal(OSType osType)
    {
        if (osType == OSType.WINDOWS) {
            // TO DO
        } else if (osType == OSType.LINUX) {
            try {
                new ProcessBuilder("gnome-terminal", "--working-directory=" + this.projectPath).start();
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
}