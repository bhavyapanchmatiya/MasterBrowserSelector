package MasterBrowserSelector;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends UtilsPage{

BrowserSelector browserSelector = new BrowserSelector();


@Before

public void setUpBrowser(){


browserSelector.setUpBrowser();
    manageWindow();
    manageTimeoutImplicity();
    openNopCommerce();

}
    @After
    public void closeBrowser(Scenario scenario){

        if(scenario.isFailed()){

            UtilsPage.takeSnapShot(scenario.getName());
        }
        //driver.quit();
    }


}
