package com.ds.cucum.pages;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.ds.cucum.base.TstBase;

public class HomePage extends TstBase {

	@FindBy(xpath="//a[contains(text(),'Home')]")
	WebElement Home_lnk;
	
	
	@FindBy(xpath="//a[contains(text(),'Posts')]")
	WebElement Posts_lnk;
	
	@FindBy(xpath="//a[contains(text(),'Media')]")
	WebElement Media_lnk;
	
	@FindBy(xpath="//a[contains(text(),'Links')]")
	WebElement Links_lnk;
	
	
	@FindBy(xpath="//a[contains(text(),'Pages')]")
	WebElement Pages_lnk;
	
	
	
	
	
	public HomePage()
	{
		PageFactory.initElements(dr, this);
	}
	
	public void validateHomePage()
	{
		boolean flg = Home_lnk.isDisplayed();
		
		Assert.assertTrue("Home Page is not dispalyed", flg);
	}

	
	public PostsPage clickOnPostsLnk()
	{
		Posts_lnk.click();
		
		return new PostsPage();
	}
	
	
	public LinksPage clickOnLinksTab()
	{
		Links_lnk.click();
		
		return new LinksPage();
	}
	
}
