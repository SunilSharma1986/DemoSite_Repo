package com.ds.cucum.util;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Util {
	
	public static WebDriverWait wait;

	public static long PAGE_LOAD_TIME=10;
	
	public static long IMPLICIT_WAIT=10;
	
	
	
	
/*	public static String TESTDATA_SHEET_PATH="D:/Workspace/freeCRMautomationFramework/src/main/java/com/"
            +"demosite/qa/testdata/Demosite_TestData.xlsx";

    public static Workbook book;
    public static Sheet sheet;*/

     
    
    
    
/*  //Method to get data from the excel
  	public static Object[][] getTestData(String sheetName) {
  		FileInputStream file = null;
  		try {
  			file = new FileInputStream(TESTDATA_SHEET_PATH);
  		} catch (FileNotFoundException e) {
  			e.printStackTrace();
  		}
  		try {
  			book = WorkbookFactory.create(file);
  		} catch (InvalidFormatException e) {
  			e.printStackTrace();
  		} catch (IOException e) {
  			e.printStackTrace();
  		}
  		sheet = book.getSheet(sheetName);
  		Object[][] data = new Object[sheet.getLastRowNum()][sheet.getRow(0).getLastCellNum()];
  		// System.out.println(sheet.getLastRowNum() + "--------" +
  		// sheet.getRow(0).getLastCellNum());
  		for (int i = 0; i < sheet.getLastRowNum(); i++) {
  			for (int k = 0; k < sheet.getRow(0).getLastCellNum(); k++) {
  				data[i][k] = sheet.getRow(i + 1).getCell(k).toString();
  				// System.out.println(data[i][k]);
  			}
  		}
  		return data;
  		
  		}
  	*/
    



	public static void takeScreenshotAtEndOfTest(WebDriver dr) {
		// TODO Auto-generated method stub
		
	}
	
	
	
	
	// User object for passing the credentials
	public class User
	{
		public String username;
		public String password;
		
		public User(String userName, String passWord)
		{
			username=userName;
			password=passWord;
		}
	}
	
	
	
	
	
	public static void waitForElementTobePresent(WebElement ele, WebDriver dr)
	{
		try
		{
		wait=new WebDriverWait(dr, IMPLICIT_WAIT);
		wait.until(ExpectedConditions.elementToBeClickable(ele));
		}catch(Exception e)
		{
			e.printStackTrace();
			System.out.println("Exception thrown while waiting for the Element");
		}
	}
	
}
