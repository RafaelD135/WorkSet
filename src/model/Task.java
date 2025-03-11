package model;

public abstract class Task {
    public String id;
    public String type;

    public abstract void launchTask(OSType osType);

    public String getId() {
        return id;
    }
}