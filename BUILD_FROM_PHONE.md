# Build the APK from an Android phone

This repository is configured to build the Android APK with GitHub Actions.

1. Open the repository's **Actions** tab.
2. Select **Build APK**.
3. Tap **Run workflow** and choose `main`.
4. Wait for the workflow to finish with a green check.
5. Open the completed workflow run and scroll to **Artifacts**.
6. Download `Everything-Is-Going-To-Be-Alright-debug-apk`.
7. Open the downloaded ZIP, extract the APK, and install it on Android.

No Android Studio or Android SDK needs to be installed on the phone; GitHub's hosted runner supplies the build environment.
