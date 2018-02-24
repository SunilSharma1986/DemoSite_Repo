$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Workspace/com.ds.cucumber/src/main/java/com/ds/cucum/feature/ds.feature");
formatter.feature({
  "line": 1,
  "name": "Validation of DemoSite",
  "description": "",
  "id": "validation-of-demosite",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Validate the DemoSite Application",
  "description": "",
  "id": "validation-of-demosite;validate-the-demosite-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@validate_loginFlow"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the DemoSite website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the \u003cusername\u003e and \u003cpassword\u003e and click on loginBtn",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "HomePage should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "validation-of-demosite;validate-the-demosite-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "validation-of-demosite;validate-the-demosite-application;;1"
    },
    {
      "cells": [
        "admin",
        "demo123"
      ],
      "line": 12,
      "id": "validation-of-demosite;validate-the-demosite-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Validate the DemoSite Application",
  "description": "",
  "id": "validation-of-demosite;validate-the-demosite-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@validate_loginFlow"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the DemoSite website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the admin and demo123 and click on loginBtn",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "HomePage should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSite.i_am_on_the_DemoSite_website()"
});
formatter.result({
  "duration": 11549278802,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "demo123",
      "offset": 22
    }
  ],
  "location": "DemoSite.i_enter_valid_username_and_password_clicks_login_Btn(String,String)"
});
formatter.result({
  "duration": 2924593428,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.homepage_should_be_displayed()"
});
formatter.result({
  "duration": 34087917,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.i_close_the_browser()"
});
formatter.result({
  "duration": 140471889,
  "status": "passed"
});
formatter.after({
  "duration": 559985645,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Validate the DemoSite Application",
  "description": "",
  "id": "validation-of-demosite;validate-the-demosite-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@validate_Publish_NewPost"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I am on the DemoSite website",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I enter the \u003cusername\u003e and \u003cpassword\u003e and click on loginBtn",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "HomePage should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click on \"Posts\" link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "click on AddNew Post",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I enter the Post details \u003cposttitle\u003e \u003cpostcontent\u003e and click on \"Publish\" button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "post should be Published",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "validation-of-demosite;validate-the-demosite-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "posttitle",
        "postcontent"
      ],
      "line": 26,
      "id": "validation-of-demosite;validate-the-demosite-application;;1"
    },
    {
      "cells": [
        "admin",
        "demo123",
        "Video post",
        "This post is about video editing"
      ],
      "line": 27,
      "id": "validation-of-demosite;validate-the-demosite-application;;2"
    },
    {
      "cells": [
        "admin",
        "demo123",
        "Video post",
        "This post is about video editing"
      ],
      "line": 28,
      "id": "validation-of-demosite;validate-the-demosite-application;;3"
    },
    {
      "cells": [
        "admin",
        "demo123",
        "Video post",
        "This post is about video editing"
      ],
      "line": 29,
      "id": "validation-of-demosite;validate-the-demosite-application;;4"
    },
    {
      "cells": [
        "admin",
        "demo123",
        "Video post",
        "This post is about video editing"
      ],
      "line": 30,
      "id": "validation-of-demosite;validate-the-demosite-application;;5"
    },
    {
      "cells": [
        "admin",
        "demo123",
        "Video post",
        "This post is about video editing"
      ],
      "line": 31,
      "id": "validation-of-demosite;validate-the-demosite-application;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Validate the DemoSite Application",
  "description": "",
  "id": "validation-of-demosite;validate-the-demosite-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@validate_Publish_NewPost"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I am on the DemoSite website",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I enter the admin and demo123 and click on loginBtn",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "HomePage should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click on \"Posts\" link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "click on AddNew Post",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I enter the Post details Video post This post is about video editing and click on \"Publish\" button",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "post should be Published",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSite.i_am_on_the_DemoSite_website()"
});
formatter.result({
  "duration": 7200570079,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "demo123",
      "offset": 22
    }
  ],
  "location": "DemoSite.i_enter_valid_username_and_password_clicks_login_Btn(String,String)"
});
formatter.result({
  "duration": 3124037364,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.homepage_should_be_displayed()"
});
formatter.result({
  "duration": 41156564,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Posts",
      "offset": 12
    }
  ],
  "location": "DemoSite.i_click_on_link(String)"
});
formatter.result({
  "duration": 1149493767,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.click_on_AddNew_Post()"
});
formatter.result({
  "duration": 3335489826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Video post This post is about video",
      "offset": 25
    },
    {
      "val": "editing",
      "offset": 61
    },
    {
      "val": "Publish",
      "offset": 83
    }
  ],
  "location": "DemoSite.i_enter_the_Post_details_and_click_on_button(String,String,String)"
});
formatter.result({
  "duration": 468622327,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.post_should_be_Published()"
});
formatter.result({
  "duration": 16064689,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : }\n  (Session info: chrome\u003d64.0.3282.186)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds: null\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027BLRSSH13852621\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\ssh138\\AppData\\Local\\Temp\\scoped_dir6332_15643}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d64.0.3282.186, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 4f3b4ee620c358af3a8219f9b0d93d3a\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027message\u0027]//p}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:173)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:105)\r\n\tat com.sun.proxy.$Proxy19.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:189)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy22.isDisplayed(Unknown Source)\r\n\tat com.ds.cucum.pages.PostsPage.verifyPostNewMsg(PostsPage.java:67)\r\n\tat com.ds.cucum.stepDefinitions.DemoSite.post_should_be_Published(DemoSite.java:87)\r\n\tat ✽.Then post should be Published(D:/Workspace/com.ds.cucumber/src/main/java/com/ds/cucum/feature/ds.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DemoSite.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 676018624,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Validate the DemoSite Application",
  "description": "",
  "id": "validation-of-demosite;validate-the-demosite-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@validate_Publish_NewPost"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I am on the DemoSite website",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I enter the admin and demo123 and click on loginBtn",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "HomePage should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click on \"Posts\" link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "click on AddNew Post",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I enter the Post details Video post This post is about video editing and click on \"Publish\" button",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "post should be Published",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSite.i_am_on_the_DemoSite_website()"
});
formatter.result({
  "duration": 7108763665,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "demo123",
      "offset": 22
    }
  ],
  "location": "DemoSite.i_enter_valid_username_and_password_clicks_login_Btn(String,String)"
});
formatter.result({
  "duration": 2758038007,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.homepage_should_be_displayed()"
});
formatter.result({
  "duration": 38006410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Posts",
      "offset": 12
    }
  ],
  "location": "DemoSite.i_click_on_link(String)"
});
formatter.result({
  "duration": 1199774842,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.click_on_AddNew_Post()"
});
formatter.result({
  "duration": 3466660957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Video post This post is about video",
      "offset": 25
    },
    {
      "val": "editing",
      "offset": 61
    },
    {
      "val": "Publish",
      "offset": 83
    }
  ],
  "location": "DemoSite.i_enter_the_Post_details_and_click_on_button(String,String,String)"
});
formatter.result({
  "duration": 436961880,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.post_should_be_Published()"
});
formatter.result({
  "duration": 4252938,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : }\n  (Session info: chrome\u003d64.0.3282.186)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds: null\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027BLRSSH13852621\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\ssh138\\AppData\\Local\\Temp\\scoped_dir7104_10383}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d64.0.3282.186, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 3155da6000f6d63c280dd11993d9d613\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027message\u0027]//p}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:173)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:105)\r\n\tat com.sun.proxy.$Proxy19.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:189)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy22.isDisplayed(Unknown Source)\r\n\tat com.ds.cucum.pages.PostsPage.verifyPostNewMsg(PostsPage.java:67)\r\n\tat com.ds.cucum.stepDefinitions.DemoSite.post_should_be_Published(DemoSite.java:87)\r\n\tat ✽.Then post should be Published(D:/Workspace/com.ds.cucumber/src/main/java/com/ds/cucum/feature/ds.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DemoSite.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 656737599,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Validate the DemoSite Application",
  "description": "",
  "id": "validation-of-demosite;validate-the-demosite-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@validate_Publish_NewPost"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I am on the DemoSite website",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I enter the admin and demo123 and click on loginBtn",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "HomePage should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click on \"Posts\" link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "click on AddNew Post",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I enter the Post details Video post This post is about video editing and click on \"Publish\" button",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "post should be Published",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSite.i_am_on_the_DemoSite_website()"
});
formatter.result({
  "duration": 7112829384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "demo123",
      "offset": 22
    }
  ],
  "location": "DemoSite.i_enter_valid_username_and_password_clicks_login_Btn(String,String)"
});
formatter.result({
  "duration": 2623402095,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.homepage_should_be_displayed()"
});
formatter.result({
  "duration": 30748421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Posts",
      "offset": 12
    }
  ],
  "location": "DemoSite.i_click_on_link(String)"
});
formatter.result({
  "duration": 1427031515,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.click_on_AddNew_Post()"
});
formatter.result({
  "duration": 6804965430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Video post This post is about video",
      "offset": 25
    },
    {
      "val": "editing",
      "offset": 61
    },
    {
      "val": "Publish",
      "offset": 83
    }
  ],
  "location": "DemoSite.i_enter_the_Post_details_and_click_on_button(String,String,String)"
});
formatter.result({
  "duration": 468729207,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.post_should_be_Published()"
});
formatter.result({
  "duration": 3192624,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : }\n  (Session info: chrome\u003d64.0.3282.186)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds: null\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027BLRSSH13852621\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\ssh138\\AppData\\Local\\Temp\\scoped_dir6264_32672}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d64.0.3282.186, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 3ea2b873d05d764d0ebdbdc4b6f621d8\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027message\u0027]//p}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:173)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:105)\r\n\tat com.sun.proxy.$Proxy19.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:189)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy22.isDisplayed(Unknown Source)\r\n\tat com.ds.cucum.pages.PostsPage.verifyPostNewMsg(PostsPage.java:67)\r\n\tat com.ds.cucum.stepDefinitions.DemoSite.post_should_be_Published(DemoSite.java:87)\r\n\tat ✽.Then post should be Published(D:/Workspace/com.ds.cucumber/src/main/java/com/ds/cucum/feature/ds.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DemoSite.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 642982529,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Validate the DemoSite Application",
  "description": "",
  "id": "validation-of-demosite;validate-the-demosite-application;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@validate_Publish_NewPost"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I am on the DemoSite website",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I enter the admin and demo123 and click on loginBtn",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "HomePage should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click on \"Posts\" link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "click on AddNew Post",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I enter the Post details Video post This post is about video editing and click on \"Publish\" button",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "post should be Published",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSite.i_am_on_the_DemoSite_website()"
});
formatter.result({
  "duration": 7016013372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "demo123",
      "offset": 22
    }
  ],
  "location": "DemoSite.i_enter_valid_username_and_password_clicks_login_Btn(String,String)"
});
formatter.result({
  "duration": 2692661602,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.homepage_should_be_displayed()"
});
formatter.result({
  "duration": 30433441,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Posts",
      "offset": 12
    }
  ],
  "location": "DemoSite.i_click_on_link(String)"
});
formatter.result({
  "duration": 1094031447,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.click_on_AddNew_Post()"
});
formatter.result({
  "duration": 3793197564,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Video post This post is about video",
      "offset": 25
    },
    {
      "val": "editing",
      "offset": 61
    },
    {
      "val": "Publish",
      "offset": 83
    }
  ],
  "location": "DemoSite.i_enter_the_Post_details_and_click_on_button(String,String,String)"
});
formatter.result({
  "duration": 474012732,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.post_should_be_Published()"
});
formatter.result({
  "duration": 4518371,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : }\n  (Session info: chrome\u003d64.0.3282.186)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds: null\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027BLRSSH13852621\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\ssh138\\AppData\\Local\\Temp\\scoped_dir2724_25612}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d64.0.3282.186, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 90dff27bc6d4bdeef7313ad992096fe2\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027message\u0027]//p}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:173)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:105)\r\n\tat com.sun.proxy.$Proxy19.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:189)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy22.isDisplayed(Unknown Source)\r\n\tat com.ds.cucum.pages.PostsPage.verifyPostNewMsg(PostsPage.java:67)\r\n\tat com.ds.cucum.stepDefinitions.DemoSite.post_should_be_Published(DemoSite.java:87)\r\n\tat ✽.Then post should be Published(D:/Workspace/com.ds.cucumber/src/main/java/com/ds/cucum/feature/ds.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DemoSite.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 663011365,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Validate the DemoSite Application",
  "description": "",
  "id": "validation-of-demosite;validate-the-demosite-application;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@validate_Publish_NewPost"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I am on the DemoSite website",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I enter the admin and demo123 and click on loginBtn",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "HomePage should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click on \"Posts\" link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "click on AddNew Post",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I enter the Post details Video post This post is about video editing and click on \"Publish\" button",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "post should be Published",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSite.i_am_on_the_DemoSite_website()"
});
formatter.result({
  "duration": 6984450250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "demo123",
      "offset": 22
    }
  ],
  "location": "DemoSite.i_enter_valid_username_and_password_clicks_login_Btn(String,String)"
});
formatter.result({
  "duration": 2792816757,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.homepage_should_be_displayed()"
});
formatter.result({
  "duration": 37316993,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Posts",
      "offset": 12
    }
  ],
  "location": "DemoSite.i_click_on_link(String)"
});
formatter.result({
  "duration": 1176617086,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.click_on_AddNew_Post()"
});
formatter.result({
  "duration": 3736922667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Video post This post is about video",
      "offset": 25
    },
    {
      "val": "editing",
      "offset": 61
    },
    {
      "val": "Publish",
      "offset": 83
    }
  ],
  "location": "DemoSite.i_enter_the_Post_details_and_click_on_button(String,String,String)"
});
formatter.result({
  "duration": 447410722,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.post_should_be_Published()"
});
formatter.result({
  "duration": 3817274,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : }\n  (Session info: chrome\u003d64.0.3282.186)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds: null\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027BLRSSH13852621\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\ssh138\\AppData\\Local\\Temp\\scoped_dir5096_2615}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d64.0.3282.186, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: db891e328e0a83d6efb6d93dfceffea0\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027message\u0027]//p}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:173)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:105)\r\n\tat com.sun.proxy.$Proxy19.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:189)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy22.isDisplayed(Unknown Source)\r\n\tat com.ds.cucum.pages.PostsPage.verifyPostNewMsg(PostsPage.java:67)\r\n\tat com.ds.cucum.stepDefinitions.DemoSite.post_should_be_Published(DemoSite.java:87)\r\n\tat ✽.Then post should be Published(D:/Workspace/com.ds.cucumber/src/main/java/com/ds/cucum/feature/ds.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DemoSite.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 697545208,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "Validate the DemoSite Application",
  "description": "",
  "id": "validation-of-demosite;validate-the-demosite-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@validate_Links_AddNewLink"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I am on the DemoSite website",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I enter the \u003cusername\u003e and \u003cpassword\u003e and click on loginBtn",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "HomePage should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I click on \"Links\" link",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "click on AddNew link",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I enter the Link details \u003clinkname\u003e \u003cwebaddress\u003e \u003clinkdesc\u003e and click on \"Add Link\" button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "link should be Published",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "validation-of-demosite;validate-the-demosite-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "linkname",
        "webaddress",
        "linkdesc"
      ],
      "line": 45,
      "id": "validation-of-demosite;validate-the-demosite-application;;1"
    },
    {
      "cells": [
        "admin",
        "demo123",
        "rediff",
        "http://www.rediff.com",
        "this is rediff site"
      ],
      "line": 46,
      "id": "validation-of-demosite;validate-the-demosite-application;;2"
    },
    {
      "cells": [
        "admin",
        "demo123",
        "rediff",
        "http://www.rediff.com",
        "this is rediff site"
      ],
      "line": 47,
      "id": "validation-of-demosite;validate-the-demosite-application;;3"
    },
    {
      "cells": [
        "admin",
        "demo123",
        "rediff",
        "http://www.rediff.com",
        "this is rediff site"
      ],
      "line": 48,
      "id": "validation-of-demosite;validate-the-demosite-application;;4"
    },
    {
      "cells": [
        "admin",
        "demo123",
        "rediff",
        "http://www.rediff.com",
        "this is rediff site"
      ],
      "line": 49,
      "id": "validation-of-demosite;validate-the-demosite-application;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 46,
  "name": "Validate the DemoSite Application",
  "description": "",
  "id": "validation-of-demosite;validate-the-demosite-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@validate_Links_AddNewLink"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I am on the DemoSite website",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I enter the admin and demo123 and click on loginBtn",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "HomePage should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I click on \"Links\" link",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "click on AddNew link",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I enter the Link details rediff http://www.rediff.com this is rediff site and click on \"Add Link\" button",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "link should be Published",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSite.i_am_on_the_DemoSite_website()"
});
formatter.result({
  "duration": 6983945928,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "demo123",
      "offset": 22
    }
  ],
  "location": "DemoSite.i_enter_valid_username_and_password_clicks_login_Btn(String,String)"
});
formatter.result({
  "duration": 2651142635,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.homepage_should_be_displayed()"
});
formatter.result({
  "duration": 30684717,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Links",
      "offset": 12
    }
  ],
  "location": "DemoSite.i_click_on_link(String)"
});
formatter.result({
  "duration": 1239052852,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.click_on_AddNew_link()"
});
formatter.result({
  "duration": 1568274221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rediff http://www.rediff.com this is",
      "offset": 25
    },
    {
      "val": "rediff",
      "offset": 62
    },
    {
      "val": "site",
      "offset": 69
    },
    {
      "val": "Add Link",
      "offset": 88
    }
  ],
  "location": "DemoSite.i_enter_the_Link_details_and_click_on_button(String,String,String,String)"
});
formatter.result({
  "duration": 1769807642,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.link_should_be_Published()"
});
formatter.result({
  "duration": 28628853,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.i_close_the_browser()"
});
formatter.result({
  "duration": 121460544,
  "status": "passed"
});
formatter.after({
  "duration": 560833968,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Validate the DemoSite Application",
  "description": "",
  "id": "validation-of-demosite;validate-the-demosite-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@validate_Links_AddNewLink"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I am on the DemoSite website",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I enter the admin and demo123 and click on loginBtn",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "HomePage should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I click on \"Links\" link",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "click on AddNew link",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I enter the Link details rediff http://www.rediff.com this is rediff site and click on \"Add Link\" button",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "link should be Published",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSite.i_am_on_the_DemoSite_website()"
});
formatter.result({
  "duration": 7475408554,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "demo123",
      "offset": 22
    }
  ],
  "location": "DemoSite.i_enter_valid_username_and_password_clicks_login_Btn(String,String)"
});
formatter.result({
  "duration": 2965859705,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.homepage_should_be_displayed()"
});
formatter.result({
  "duration": 34047925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Links",
      "offset": 12
    }
  ],
  "location": "DemoSite.i_click_on_link(String)"
});
formatter.result({
  "duration": 1045580441,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.click_on_AddNew_link()"
});
formatter.result({
  "duration": 1346288686,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rediff http://www.rediff.com this is",
      "offset": 25
    },
    {
      "val": "rediff",
      "offset": 62
    },
    {
      "val": "site",
      "offset": 69
    },
    {
      "val": "Add Link",
      "offset": 88
    }
  ],
  "location": "DemoSite.i_enter_the_Link_details_and_click_on_button(String,String,String,String)"
});
formatter.result({
  "duration": 1788609473,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.link_should_be_Published()"
});
formatter.result({
  "duration": 32108144,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.i_close_the_browser()"
});
formatter.result({
  "duration": 205078539,
  "status": "passed"
});
formatter.after({
  "duration": 560709392,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Validate the DemoSite Application",
  "description": "",
  "id": "validation-of-demosite;validate-the-demosite-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@validate_Links_AddNewLink"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I am on the DemoSite website",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I enter the admin and demo123 and click on loginBtn",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "HomePage should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I click on \"Links\" link",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "click on AddNew link",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I enter the Link details rediff http://www.rediff.com this is rediff site and click on \"Add Link\" button",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "link should be Published",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSite.i_am_on_the_DemoSite_website()"
});
formatter.result({
  "duration": 6792800477,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "demo123",
      "offset": 22
    }
  ],
  "location": "DemoSite.i_enter_valid_username_and_password_clicks_login_Btn(String,String)"
});
formatter.result({
  "duration": 2504836890,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.homepage_should_be_displayed()"
});
formatter.result({
  "duration": 37789110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Links",
      "offset": 12
    }
  ],
  "location": "DemoSite.i_click_on_link(String)"
});
formatter.result({
  "duration": 1089829118,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.click_on_AddNew_link()"
});
formatter.result({
  "duration": 1358947344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rediff http://www.rediff.com this is",
      "offset": 25
    },
    {
      "val": "rediff",
      "offset": 62
    },
    {
      "val": "site",
      "offset": 69
    },
    {
      "val": "Add Link",
      "offset": 88
    }
  ],
  "location": "DemoSite.i_enter_the_Link_details_and_click_on_button(String,String,String,String)"
});
formatter.result({
  "duration": 1559652262,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.link_should_be_Published()"
});
formatter.result({
  "duration": 38674946,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.i_close_the_browser()"
});
formatter.result({
  "duration": 191111476,
  "status": "passed"
});
formatter.after({
  "duration": 564043579,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Validate the DemoSite Application",
  "description": "",
  "id": "validation-of-demosite;validate-the-demosite-application;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@validate_Links_AddNewLink"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I am on the DemoSite website",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I enter the admin and demo123 and click on loginBtn",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "HomePage should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I click on \"Links\" link",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "click on AddNew link",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I enter the Link details rediff http://www.rediff.com this is rediff site and click on \"Add Link\" button",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "link should be Published",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "DemoSite.i_am_on_the_DemoSite_website()"
});
formatter.result({
  "duration": 7156436069,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "demo123",
      "offset": 22
    }
  ],
  "location": "DemoSite.i_enter_valid_username_and_password_clicks_login_Btn(String,String)"
});
formatter.result({
  "duration": 2633931985,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.homepage_should_be_displayed()"
});
formatter.result({
  "duration": 29294912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Links",
      "offset": 12
    }
  ],
  "location": "DemoSite.i_click_on_link(String)"
});
formatter.result({
  "duration": 1379149242,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.click_on_AddNew_link()"
});
formatter.result({
  "duration": 1478205860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rediff http://www.rediff.com this is",
      "offset": 25
    },
    {
      "val": "rediff",
      "offset": 62
    },
    {
      "val": "site",
      "offset": 69
    },
    {
      "val": "Add Link",
      "offset": 88
    }
  ],
  "location": "DemoSite.i_enter_the_Link_details_and_click_on_button(String,String,String,String)"
});
formatter.result({
  "duration": 1598825867,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.link_should_be_Published()"
});
formatter.result({
  "duration": 32993981,
  "status": "passed"
});
formatter.match({
  "location": "DemoSite.i_close_the_browser()"
});
formatter.result({
  "duration": 2055830740,
  "status": "passed"
});
formatter.after({
  "duration": 546558294,
  "status": "passed"
});
});