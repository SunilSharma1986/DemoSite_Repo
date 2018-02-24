Feature: Validation of DemoSite

  @validate_loginFlow
  Scenario Outline: Validate the DemoSite Application
    Given I am on the DemoSite website
    When I enter the <username> and <password> and click on loginBtn
    Then HomePage should be displayed
    And I close the browser

    Examples: 
      | username | password |
      | admin    | demo123  |

  @validate_Publish_NewPost
  Scenario Outline: Validate the DemoSite Application
    Given I am on the DemoSite website
    When I enter the <username> and <password> and click on loginBtn
    Then HomePage should be displayed
    When I click on "Posts" link
    Then click on AddNew Post
    And I enter the Post details <posttitle> <postcontent> and click on "Publish" button
    Then post should be Published
    And I close the browser

    Examples: 
      | username | password | posttitle | postcontent                     |
      | admin    | demo123  | Video post | This post is about video editing |
      | admin    | demo123  | Video post | This post is about video editing |
      | admin    | demo123  | Video post | This post is about video editing |
      | admin    | demo123  | Video post | This post is about video editing |
      | admin    | demo123  | Video post | This post is about video editing |

  @validate_Links_AddNewLink
  Scenario Outline: Validate the DemoSite Application
    Given I am on the DemoSite website
    When I enter the <username> and <password> and click on loginBtn
    Then HomePage should be displayed
    When I click on "Links" link
    Then click on AddNew link
    And I enter the Link details <linkname> <webaddress> <linkdesc> and click on "Add Link" button
    Then link should be Published
    And I close the browser

    Examples: 
      | username | password | linkname | webaddress            | linkdesc            |
      | admin    | demo123  | rediff   | http://www.rediff.com | this is rediff site |
      | admin    | demo123  | rediff   | http://www.rediff.com | this is rediff site |
      | admin    | demo123  | rediff   | http://www.rediff.com | this is rediff site |
      | admin    | demo123  | rediff   | http://www.rediff.com | this is rediff site |
