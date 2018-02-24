package com.ds.cucum.pages;

import java.util.ArrayList;
import java.util.List;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.ds.cucum.base.TstBase;
import com.ds.cucum.util.Util.User;

import cucumber.api.DataTable;

public class LoginPage extends TstBase {
	
/*	private final By wordPressLogo=By.xpath("//a[contains(text(),'WordPress Demo Install')]");
	private final By userName=By.name("log");
	private final By passWord=By.name("pwd");
    private final By loginBtn=By.name("wp-submit");*/
    
	@FindBy(xpath="//a[contains(text(),'WordPress Demo Install')]")
	WebElement wordPressLogo;
	
	@FindBy(name="log")
	WebElement userName;
	
	@FindBy(name="pwd")
	WebElement passWord;
	
	@FindBy(name="wp-submit")
	WebElement loginBtn;
	
	
    
    
    public LoginPage()
    {
    	PageFactory.initElements(dr, this);
    }
	
    
    public boolean validateLoginPageLogo()
    {
    	return wordPressLogo.isDisplayed();
    }
	
    public HomePage validateLoginFlow(String UN, String Pwd)
    {
    
    	userName.sendKeys(UN);
    	passWord.sendKeys(Pwd);
    	
    	loginBtn.click();
    	return new HomePage();
    	
    }
    
    
}
