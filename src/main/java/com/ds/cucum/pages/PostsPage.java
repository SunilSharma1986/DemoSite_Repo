package com.ds.cucum.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.ds.cucum.base.TstBase;
import com.ds.cucum.util.Util;

public class PostsPage extends TstBase{

	@FindBy(xpath="//a[contains(text(),'Add New')]")
	WebElement addNewBtn;
	
	@FindBy(name="post_title")
	WebElement postTitle_txtBox;
	
	@FindBy(xpath="//a[@id='content-html']")
	WebElement htmlPost_link;
	
	
	@FindBy(name="content")
	WebElement postContent_txtBox;
	
	
	@FindBy(name="publish")
	WebElement publish_Btn;
	
	
	@FindBy(xpath="//*[@id='message']//p")
	WebElement postPublishMsg;
	
	
	
	public PostsPage()
	{
		PageFactory.initElements(dr, this);
	}
	
	public String validatePostsPageTitle()
	{
		return dr.getTitle();
	}
	
	
	public void clickOnNewPostBtn()
	{
		addNewBtn.click();
	}
	
	public void publishNewPost(String title, String content)
	{
	
		
		postTitle_txtBox.sendKeys(title);
		
		htmlPost_link.click();
		postContent_txtBox.sendKeys(content);
		Util.waitForElementTobePresent(publish_Btn, dr);
		publish_Btn.submit();
		
	}
	
	
	public boolean verifyPostNewMsg()
	{
		return postPublishMsg.isDisplayed();
	}
	
}
