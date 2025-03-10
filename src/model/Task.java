package model;

public abstract class Task {
    public String id;

    public abstract void launchTask(OSType osType);

    public String getId() {
        return id;
    }
}