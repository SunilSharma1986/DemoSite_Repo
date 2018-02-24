package com.ds.cucum.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.ds.cucum.base.TstBase;
import com.ds.cucum.util.Util;

public class LinksPage extends TstBase{
	

	
	
	@FindBy(xpath="//a[@class='add-new-h2']")
	WebElement addNewLink_Btn;
	
	@FindBy(name="link_name")
	WebElement linkName_txtBox;
	
	@FindBy(name="link_url")
	WebElement linkURL_txtBox;
	
	@FindBy(name="link_description")
	WebElement linkDesc_txtBox;
	
	@FindBy(xpath="//input[@id='publish']")
	WebElement addLink_Btn;
	
	
	@FindBy(xpath="//*[@id='message']//p")
	WebElement linkAdd_Msg;
	
	
	public LinksPage()
	{
		PageFactory.initElements(dr, this);
	}
	
	
	public String validateLinksPageTitle()
	{
		return dr.getTitle();
	}
	
	
	public void clickonAddNewLink()
	{
		addNewLink_Btn.click();
	}
	
	
	public void enterLinkDetails(String linkName, String webaddr, String linkDesc)
	{
		linkName_txtBox.sendKeys(linkName);
		linkURL_txtBox.sendKeys(webaddr);
		linkDesc_txtBox.sendKeys(linkDesc);
		Util.waitForElementTobePresent(addLink_Btn, dr);
		addLink_Btn.click();
		
	}
	
	
	public boolean validateLinkIsPublished()
	{
		return linkAdd_Msg.isDisplayed();
		
	}

}
