package model.tasks;

import model.OSType;
import model.Task;

import java.io.IOException;
import java.util.UUID;

public class WebPageLauncher extends Task {
    private String url;
    private String browser;

    public WebPageLauncher(String url, String id) {
        if(url.equals("null")) {
            this.url = null;
        } else {
            this.url = url;
        }

        if(id != null) {
            this.id = id;
        } else {
            this.id = UUID.randomUUID().toString();
        }
    }

    public void launchTask(OSType osType) {
        launchWebPage(osType);
    }

    public void launchWebPage(OSType osType) {
        if (osType == OSType.WINDOWS) {
            try {
                if(this.url == null) {
                    new ProcessBuilder("cmd", "/c", "start", "https://www.google.com/").start();
                } else {
                    new ProcessBuilder("cmd", "/c", "start", this.url).start();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        } else if (osType == OSType.LINUX) {
            try {
                if(this.url == null) {
                    new ProcessBuilder("xdg-open", "https://www.google.com/").start();
                } else {
                    new ProcessBuilder("xdg-open", this.url).start();
                }
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

    // ToString for debugging
    public String toString() {
        return "WebPageLauncher{" +
                "url='" + url + '\'' +
                ", browser='" + browser + '\'' +
                ", id='" + id + '\'' +
                '}';
    }
}
