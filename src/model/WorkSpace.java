package model;

import java.util.ArrayList;

public class WorkSpace {
    private OSType osType;
    private int nbTask;
    private ArrayList<Task> tasks;

    public WorkSpace() {
        this.nbTask = 0;
        this.tasks = new ArrayList<Task>();
        detectOs();
    }

    public void detectOs() {
        String osName = System.getProperty("os.name").toLowerCase();
        if (osName.contains("win")) {
            this.osType = OSType.WINDOWS;
        } else if (osName.contains("nix") || osName.contains("nux") || osName.contains("aix")) {
            this.osType = OSType.LINUX;
        }
    }

    public void launchWorkSpace() {
        for (Task task : tasks) {
            task.launchTask(osType);
        }
    }

    public void addTask(Task task) {
        this.tasks.add(task);
        this.nbTask++;
    }

    public void removeTask(Task task) {
        this.tasks.remove(task);
        this.nbTask--;
    }


    // GET and SET methods
    public OSType getOsType() {
        return osType;
    }

    public int getNbTask() {
        return this.nbTask;
    }
}