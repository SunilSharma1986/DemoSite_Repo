package com.ds.cucum.runner;

//import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
//import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

//@RunWith(Cucumber.class)
@CucumberOptions(
		features="D:/Workspace/com.ds.cucumber/src/main/java/com/ds/cucum/feature/ds.feature",
		glue={"com/ds/cucum/stepDefinitions"},
		tags={"@validate_loginFlow, @validate_Publish_NewPost, @validate_Links_AddNewLink"},
		format={"pretty","html:test-output"},
		monochrome=true,
		strict=true,
		dryRun=false
		)
public class TestRunner extends AbstractTestNGCucumberTests{

}
