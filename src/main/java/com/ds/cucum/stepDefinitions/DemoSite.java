package com.ds.cucum.stepDefinitions;

import com.ds.cucum.base.TstBase;
import com.ds.cucum.pages.HomePage;
import com.ds.cucum.pages.LinksPage;
import com.ds.cucum.pages.LoginPage;
import com.ds.cucum.pages.PostsPage;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class DemoSite extends TstBase {
    LoginPage loginPage; 
    HomePage homePage;
    PostsPage postsPage;
    LinksPage linksPage;
    String UN;
    String Pwd;
 	
	
	@Given("^I am on the DemoSite website$")
	public void i_am_on_the_DemoSite_website() throws Throwable {
		TstBase.init();
		loginPage=new LoginPage(); 
	}

	@When("^I enter the ([^\"]*) and ([^\"]*) and click on loginBtn$")
	public void i_enter_valid_username_and_password_clicks_login_Btn(String userName, String passWord) throws Throwable {

		
		
			homePage = loginPage.validateLoginFlow(userName, passWord);
		
		
		
	}

	

	@Then("^HomePage should be displayed$")
	public void homepage_should_be_displayed() throws Throwable {
		homePage.validateHomePage();

	}
	
	
	
	@When("^I click on \"(.*?)\" link$")
	public void i_click_on_link(String sName) throws Throwable {
		switch(sName)
		{
		case "Posts" :
		
		postsPage = homePage.clickOnPostsLnk();
		String Actual = postsPage.validatePostsPageTitle();
		
		Assert.assertEquals("Posts ‹ WordPress Demo Install — WordPress", Actual);
		break;
	  
		case "Links" :
			          linksPage = homePage.clickOnLinksTab();
			          
			          String actual_title = linksPage.validateLinksPageTitle();
			          Assert.assertEquals("Links ‹ WordPress Demo Install — WordPress", actual_title);
			break;
			
		default :
			break;
		}
	}

	@Then("^click on AddNew Post$")
	public void click_on_AddNew_Post() throws Throwable {
		postsPage.clickOnNewPostBtn();
	}

	@Then("^I enter the Post details ([^\"]*) ([^\"]*) and click on \"([^\"]*)\" button$")
	public void i_enter_the_Post_details_and_click_on_button(String title, String content, String arg1) throws Throwable {
	postsPage.publishNewPost(title, content);
	}

	@Then("^post should be Published$")
	public void post_should_be_Published() throws Throwable {
		boolean flg = postsPage.verifyPostNewMsg();
		
		Assert.assertTrue("Post could not be published", flg);
	}
	
	
	
	@Then("^click on AddNew link$")
	public void click_on_AddNew_link() throws Throwable {
		
				
		linksPage.clickonAddNewLink();
	}

	@Then("^I enter the Link details ([^\"]*) ([^\"]*) ([^\"]*) and click on \"([^\"]*)\" button$")
	public void i_enter_the_Link_details_and_click_on_button(String lnkName, String url, String desc, String arg1) throws Throwable {
		linksPage.enterLinkDetails(lnkName, url, desc);
		
	}

	@Then("^link should be Published$")
	public void link_should_be_Published() throws Throwable {
		boolean flg = linksPage.validateLinkIsPublished();
		Assert.assertTrue(flg);
	}
	

	@And("^I close the browser$")
	public void i_close_the_browser() throws Throwable {
		dr.close();
	}
	
	
	@After
	public void closeBrowser()
	{
		dr.quit();
	}

}
