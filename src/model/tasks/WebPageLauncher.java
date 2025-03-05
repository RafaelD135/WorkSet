package model.tasks;

import model.OSType;
import model.Task;

import java.io.IOException;

public class WebPageLauncher extends Task {
    private String url;
    private String browser;

    public WebPageLauncher(String url) {
        this.url = url;
    }

    public void launchTask(OSType osType) {
        launchWebPage(osType);
    }

    public void launchWebPage(OSType osType) {
        if (osType == OSType.WINDOWS) {
            // TO DO
        } else if (osType == OSType.LINUX) {
            try {
                new ProcessBuilder("firefox", this.url).start();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public void detectDefaultBrowser() {
        // TO DO
    }

    // GET and SET methods
    public void setUrl(String url) {
        this.url = url;
    }

    public String getUrl() {
        return url;
    }

    public void setBrowser(String browser) {
        this.browser = browser;
    }

    public String getBrowser() {
        return browser;
    }
}
