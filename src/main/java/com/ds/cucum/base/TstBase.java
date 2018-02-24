package com.ds.cucum.base;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.events.EventFiringWebDriver;


import com.ds.cucum.util.Util;
import com.ds.cucum.util.WebEventListener;


public class TstBase {
	
	
	public static WebDriver dr;
	public static Properties prop;
	public static EventFiringWebDriver e_driver;
	public static WebEventListener eventListener;
	
	
	
	public TstBase() 
	{
		try
		{
		prop=new Properties();
		FileInputStream fis=new FileInputStream("D:/Workspace/com.ds.cucumber/src/main/java/com/ds/cucum/properties/config.properties");
		prop.load(fis);
		}catch(FileNotFoundException e)
		{
			e.printStackTrace();
			
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	

	public static void init()
	{
		String browserType=prop.getProperty("browser");
		
			
		if(browserType.equals("chrome"))
		{
			System.setProperty("webdriver.chrome.driver", "D:/Selenium/Chrome/chromedriver.exe");
			dr=new ChromeDriver();
		}else if(browserType.equals("mozilla"))
		{
			System.setProperty("webdriver.gecko.driver", "D:/Selenium/Gecko/geckodriver.exe");
			dr=new ChromeDriver();
		}
		
		
		
		e_driver=new EventFiringWebDriver(dr);
		eventListener=new WebEventListener();
		e_driver.register(eventListener);
		dr=e_driver;
		
		
		
		dr.manage().window().maximize();
		dr.manage().timeouts().pageLoadTimeout(Util.PAGE_LOAD_TIME, TimeUnit.SECONDS);
		dr.manage().timeouts().implicitlyWait(Util.IMPLICIT_WAIT, TimeUnit.SECONDS);
		
		
		dr.get(prop.getProperty("url"));
		
		
		}
		
	

}
