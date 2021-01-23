package com.salescustom;

import com.facebook.react.ReactActivity;
import io.invertase.firebase.app.ReactNativeFirebaseAppPackage;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "salesCustom";
    }

    // protected List<ReactPackage> getPackages() {
    //     return Arrays.asList(
    //         new MainReactPackage(),
    //         new ReactNativeFirebaseAppPackage();)
    // }
    
}
